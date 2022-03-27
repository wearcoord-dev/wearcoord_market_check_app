<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShoesCountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shoes_counts', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('wearId');
            $table->bigInteger('totalCount')->default(0);
            $table->bigInteger('month')->default(0);
            $table->bigInteger('week')->default(0);
            $table->bigInteger('day')->default(0);
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
        Schema::dropIfExists('shoes_counts');
    }
}
