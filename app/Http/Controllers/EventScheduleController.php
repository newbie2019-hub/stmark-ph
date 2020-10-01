<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\EventSchedule;
use Illuminate\Support\Carbon;

class EventScheduleController extends Controller
{
    public function get(Request $request){
        
        return EventSchedule::get();
        
        // return response()->json(EventSchedule::get());
    }

    public function getCurrent(Request $request){
        return EventSchedule::where('start', $request->start);
    }

    public function store(Request $request)
    {
        return EventSchedule::create(
            [
            'title' => $request->name,
            'description' => $request->desc,
            'start' => $request->start,
            'end' => $request->end,
            ]
        );
    }

    public function delete(Request $request){
        return EventSchedule::where('id', $request->id)->delete();
    }

    public function put(Request $request)
    {
        $data = [
            'title' => $request->name,
            'description' => $request->desc,
            'start' => $request->start,
            'end' => $request->end,
        ];
        EventSchedule::where('id', $request->id)->update($data);
    }
}
