<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CapsRakutenApi extends Model
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
        'shopify_id',
    ];
}
