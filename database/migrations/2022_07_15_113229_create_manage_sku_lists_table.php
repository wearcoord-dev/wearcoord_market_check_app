<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateManageSkuListsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('manage_sku_lists', function (Blueprint $table) {
            $table->id();
            $table->string('sku');
            $table->boolean('isShow')->nullable();
            $table->string('type');
            $table->string('brand');
            $table->string('gender');
            $table->bigInteger('wearId');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('manage_sku_lists');
    }
}
