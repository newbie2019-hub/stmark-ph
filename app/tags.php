<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class tags extends Model
{
    protected $fillable = ['announcement_id', 'name'];
}
