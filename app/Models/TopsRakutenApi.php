<?php

namespace App\Models;

use App\Models\TopsSize;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TopsRakutenApi extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'itemId',
        'brand',
        'category',
        'moshimoLink',
        'availability',
        'black',
        'white',
        'blue',
        'red',
        'green',
        'yellow',
        'navy',
        'pink',
        'orange',
        'purple',
        'gray',
        'img',
    ];

    public function topsSizes()
    {
        return $this->hasMany(TopsSize::class, 'item_id', 'id');
    }
}
