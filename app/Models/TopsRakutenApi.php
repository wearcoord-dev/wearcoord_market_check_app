<?php

namespace App\Models;

use App\Models\TopsSize;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TopsRakutenApi extends Model
{
    use HasFactory;

    public function topsSizes()
    {
        return $this->hasMany(TopsSize::class, 'item_id', 'id');
    }
}
