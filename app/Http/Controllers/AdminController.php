<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Announcement;
use App\User;
use App\tags;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function addPost(Request $request){
        $user = Auth::user();
        $this->validate($request, [
            'title' => 'required',
            'description' => 'required',
            'featuredImage' => 'required',
            'content' => 'required',
            'tags' => 'required',
        ]);
        
        $tags = $request->tags;
        
        DB::beginTransaction();
        try{
            $announcement = Announcement::create([
                'title' => $request->title,
                'slug' => $request->title,
                'featuredImage' => $request->featuredImage,
                'description' => $request->description,
                'content' => $request->content,
                'user_id' => $user->id,
            ]);

            foreach ($tags as $tag){
                tags::insert(['announcement_id' => $announcement->id, 'name' => $tag]);
            }
            DB::commit();
            return response()->json([
                'msg' => 'Success'
            ]);
        }catch (\Throwable $th){
            DB::rollback();
            return 'An error occured';
        }
    }

    public function updatePost(Request $request){
        $this->validate($request, [
            'title' => 'required',
            'description' => 'required',
            'content' => 'required',
            'tags' => 'required',
        ]);

        $data = [
            'id' => $request->id,
            'slug' => Announcement::updateUniqueSlug($request->title),
            'title' => $request->title,
            'description' => $request->description,
            'content' => $request->content,
        ];

        if($request->featuredImage){
            $data['featuredImage'] = $request->featuredImage;
        };
       

        //DELETE ALL TAGS FIRST
        tags::where('announcement_id', $request->id)->delete();

        $tags = $request->tags;
        DB::beginTransaction();
        try{
            Announcement::where('id', $request->id)->update($data);

            foreach ($tags as $tag){
                tags::insert(['announcement_id' => $request->id, 'name' => $tag]);
            }
            DB::commit();
            return 'done';
        }catch (\Throwable $th){
            DB::rollback();
            return 'An error occured';
        }
    }

    public function getPost(Request $request){
        // return Announcement::paginate($request->total);
        return Announcement::with('tags')->paginate($request->total);
    }

    public function deletePost(Request $request){
         //DELETE THE IMAGE
         $post = Announcement::where('id', $request->aID)->get(['featuredImage']);
         $this->deleteFileFromServer($post[0]['featuredImage']);
         
         tags::where('announcement_id', $request->aID)->delete();
         return Announcement::where('id', $request->aID)->delete();
        
    }

    public function uploadImage(Request $request){
        $picName = time().'.'.$request->image->extension();
        $request->image->move(public_path('uploads'), $picName);
        return response()->json([
            'url' => "https://stmark-ph.herokuapp.com/uploads/$picName"
        ]);
    }

    public function uploadFeaturedImage(Request $request){
        $picName = time().'.'.$request->file->extension();
        $request->file->move(public_path('uploads'), $picName);
        return $picName;
    }

    public function slug(){
        $title = 'This is a nice title';
        return Announcement::create([
            'title' => $title,
            'slug' => $title,
            'description' => 'This is some description, This is some description, ',
            'postexcerpt' => 'This is some description, This is some description, ',
            'content' => 'This is some description, This is some description, This is some description, ',
        ]);
        return $title;
    }

    public function deleteFImage(Request $request){
        $fileName = $request->imageName;
        $this->deleteFileFromServer($fileName);
    }

    public function deleteFileFromServer($filename){
        $filePath = public_path().'/uploads/'.$filename;
        if(file_exists($filePath)){
            @unlink($filePath);
        }
        return;
    }

    //DASHBOARD
    function countPost(){
        return Announcement::count();
    }

    function countAcc(){
        return User::count();
    }

    function countSched(){
        return Announcement::count();
    }


    //USER FUNCTIONS
    public function createUser(Request $request){
            // validate request
            $this->validate($request, [
                'fullName' => 'required',
                'email' => 'bail|required|email|unique:users',
                'password' => 'bail|required|min:6',
                'role' => 'required',
            ]);
            $password = bcrypt($request->password);
            return User::create([
                'name' => $request->fullName,
                'email' => $request->email,
                'password' => $password,
                'role' => $request->role,
            ]);
    }
    public function signup(Request $request){
            // validate request
            $this->validate($request, [
                'fullName' => 'required',
                'email' => 'bail|required|email|unique:users',
                'password' => 'bail|required|min:6',
            ]);
            $password = bcrypt($request->password);
            User::create([
                'name' => $request->fullName,
                'email' => $request->email,
                'password' => $password,
                'role' => $request->role,
            ]);

            //LOG-IN USER
            Auth::attempt(['email' => $request->email, 'password' => $request->password]);
            Auth::user();
         
    }

    public function getUsers(Request $request){
        return User::paginate($request->total);
    }

    public function updateUser(Request $request){
        $this->validate($request, [
            'fullName' => 'required',
            'email' => 'bail|required|email',
        ]);
        $data = [
            'name' => $request->fullName,
            'email' => $request->email,
            'role' => $request->role,
        ];
        if($request->password){
            $password = bcrypt($request->password);
            $data['password'] = $password;
        }
        User::where('id', $request->id)->update($data);
    }

    public function deleteUser(Request $request){
        return User::where('id', $request->userID)->delete();
    }

    public function index(){
        if(Auth::check()){
            return view('manage');
        }
        else
        {
            return view('login');
        }
    }
    public function login(Request $request){
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            Auth::user();
            return redirect('/manage');
        } else {
            return response()->json([
                'msg' => 'Incorrect login details',
            ], 401);
        }
    }

    public function logout(){
            Auth::logout();
            return redirect('/login');
    }

}
