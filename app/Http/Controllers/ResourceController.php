<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Resources;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class ResourceController extends Controller
{

    public function index(Request $request){
        $resource = Resources::get();
        return view('resources', array('res'=>$resource));
    }

}