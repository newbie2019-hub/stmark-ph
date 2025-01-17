<?php

namespace App\Http\Middleware;
use Illuminate\Support\Facades\Auth;
use Closure;

class AdminCheck
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(!Auth::check()){
            return redirect('/');
        }
        $user = Auth::user();
        if($user->status == "Pending"){
            return redirect('/');
        }
        if($user->role == "User"){
            return redirect('/');
        }
        return $next($request);
    }
}
