<?php

use Illuminate\Support\Facades\Route;
use App\Http\Middleware\AdminCheck;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//UNUSED
Route::post('/deleteFImage', 'AdminController@deleteFImage');
//USER ROUTES
Route::post('/create_user', 'AdminController@createUser');
Route::post('/sign-up', 'AdminController@signup');

Route::middleware([AdminCheck::class])->group(function () 
{
    //DASHBOARD ROUTES
    Route::get('/postCount', 'AdminController@countPost');
    Route::get('/accCount', 'AdminController@countAcc');
    Route::get('/schedCount', 'AdminController@countSched');
    
    //USER ROUTES
    Route::get('/get_users', 'AdminController@getUsers');
    Route::put('/updateUserAcc', 'AdminController@updateUser');
    Route::delete('/deleteUserAcc', 'AdminController@deleteUser');

    //UPDATES
    Route::post('createPost', 'AdminController@addPost');
    Route::get('/getPost', 'AdminController@getPost');
    Route::put('/updatePost', 'AdminController@updatePost');
    Route::delete('/deletePost', 'AdminController@deletePost');

    //UDPATE-IMG UPLOAD
    Route::post('/img_upload', 'AdminController@uploadImage');
    Route::post('/uploadFImage', 'AdminController@uploadFeaturedImage');

    //SCHEDULE ROUTES
    Route::post('/storeSchedule', 'EventScheduleController@store');
    Route::put('/updateSchedule', 'EventScheduleController@put');
    Route::delete('/deleteSchedule', 'EventScheduleController@delete');

    //RESOURCES
    Route::post('/storeFile', 'AdminController@storeFile');
    Route::post('/store', 'AdminController@store');
    Route::get('/getResources', 'AdminController@getResources');
});

//SCHEDULE ROUTE
Route::get('/getSchedule', 'EventScheduleController@get');
//ADMIN PANEL
Route::get('/manage/{slug}', 'AdminController@index');
Route::get('/manage/resources/{slug}', function () {
    return view('manage');
});
Route::get('/manage', 'AdminController@index');

// MAIN PAGE
Route::get('/index', function () {
    return view('welcome');
});
Route::get('/login', 'AdminController@index')->name('login');
Route::get('/logout', 'AdminController@logout');
Route::post('/userlogin', 'AdminController@login');

Route::get('/schedules', function () { return view('schedules');});
Route::get('/blog/{slug}', 'HomeController@blogPost');
Route::get('/fetchUpdates', 'HomeController@getUpdates');
Route::get('/getPopularPost', 'HomeController@getMostViewed');

Route::get('/updates', function () {
    return view('update');
});
Route::get('/resource', function () {
    return view('resources');
});
Route::any('{slug}', function(){
    return view('welcome');
});
Route::get('/', function () {
    return view('welcome');
});
