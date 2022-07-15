<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ManageSkuList extends Model
{
    use HasFactory;

    protected $fillable = ['sku', 'isShow', 'type', 'wearId', 'brand'];
}
