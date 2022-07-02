<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id('stud_id');
            $table->string('stud_name');
            $table->string('stud_email');
            $table->string('stud_class');
            $table->string('stud_ph_no');
            $table->string('father_name');
            $table->string('mother_name');
            // $table->unsignedBigInteger('teach_id');
            // $table->unsignedBigInteger('prin_id');
            // $table->foreignId('teach_id')->references('teach_id')->on('teachers')->onUpdate('cascade')->onDelete('cascade');
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
        Schema::dropIfExists('students');
    }
}
