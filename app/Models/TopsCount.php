<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TopsCount extends Model
{
    use HasFactory;

    protected $primaryKey = 'mainid';


    protected $fillable = [
        'wearId',
        'totalCount',
        'month',
        'week',
        'day',
    ];
}
