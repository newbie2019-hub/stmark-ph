<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use DateTimeInterface;
class Announcement extends Model
{
    protected function serializeDate(DateTimeInterface $date){
        return $date->format('Y-m-d h:i a');
    }
    
    protected $fillable = ['title', 'slug', 'featuredImage', 'description', 'content'];

    public function setSlugAttribute($title){
       return $this->attributes['slug'] = $this->uniqueSlug($title);
    }

    public function uniqueSlug($title){
        $slug = Str::slug($title, '-');
        $count = Announcement::where('slug', 'LIKE', "{$slug}%")->count();
        $newCount = $count > 0 ? ++$count : '';
        return $newCount > 0 ? "$slug-$newCount" : $slug;
    }

    public static function updateUniqueSlug($title){
        $slug = Str::slug($title, '-');
        $count = Announcement::where('slug', 'LIKE', "{$slug}%")->count();
        $newCount = $count > 1 ? ++$count : '';
        return $newCount > 1 ? "$slug-$newCount" : $slug;
    }

    public function tags(){
        return $this->hasMany('App\tags');
    }
}
