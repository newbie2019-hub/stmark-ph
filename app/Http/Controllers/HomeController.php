<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use App\Announcement;

class HomeController extends Controller
{
    public function getUpdates(Request $request){
        // return Announcement::with('tags')->orderBy('id', 'DESC')->paginate($request->total);
        return Announcement::with(['tags','user'])->orderBy('id', 'DESC')->paginate($request->total);
    }

    public function blogPost($slug){
        
        $post = Announcement::with(['tags','user:id,name'])->where('slug', $slug)->get(['id', 'title', 'featuredImage', 'content', 'created_at', 'views', 'user_id'])->first();
        $recent = Announcement::where('slug', '<>', $slug)->orderBy('id', 'DESC')->limit(5)->get(['id','title','slug','featuredImage','created_at']);
        
        if($post){
            if($post->count() > 0){
                Announcement::where('slug', $slug)->update(['views' => ($post['views'] + 1)]);
                return view('blog', ['blog' => $post,'recent' => $recent]);
            }
        }
        else {
            return view('notfound');
        }
    }

    public function getMostViewed(){
        return Announcement::orderBy('views', 'DESC')->limit(3)->get(['slug','title','featuredImage','views', 'created_at']);
    }
}
