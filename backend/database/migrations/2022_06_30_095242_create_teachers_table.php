<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTeachersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teachers', function (Blueprint $table) {
            $table->id('teach_id');
            $table->string('teach_name');
            $table->string('teach_email');
            $table->string('teach_qualification');
            $table->string('teach_contact');
            $table->string('teach_address');
            $table->string('teach_city');
            // $table->unsignedBigInteger('prin_id');
            $table->foreignId('prin_id')->references('prin_id')->on('principal')->onUpdate('cascade')->onDelete('cascade');
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
        Schema::dropIfExists('teachers');
    }
}
