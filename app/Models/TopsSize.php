<?php

namespace App\Models;

use App\Models\TopsRakutenApi;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TopsSize extends Model
{
    use HasFactory;

    protected $fillable = [
        'item_id',
    ];

    /**
     * モデルに関連付けるテーブル
     *
     * @var string
     */
    protected $table = 'tops_size';

    public function topsItem()
    {
        return $this->belongsTo(TopsRakutenApi::class,'item_id');
    }
}
