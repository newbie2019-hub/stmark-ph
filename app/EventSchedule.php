<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EventSchedule extends Model
{
    protected $fillable = ['id', 'title', 'description', 'start', 'end'];
}
