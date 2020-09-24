<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ads', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('location');
            $table->float('price');
            $table->mediumText('description');
            $table->boolean('utilities')->nullable();
            $table->boolean('pool')->nullable();
            $table->boolean('fitness_center')->nullable();
            $table->boolean('parking')->nullable();
            $table->boolean('free_parking')->nullable();
            $table->boolean('wheelchair_access')->nullable();
            $table->boolean('wifi')->nullable();
            $table->boolean('ac')->nullable();
            $table->boolean('nearby_grocery_store')->nullable();
            $table->boolean('subway')->nullable();
            $table->boolean('bus')->nullable();
            $table->boolean('train')->nullable();
            $table->enum('occupant_gender', ['male', 'female', 'other']);
            $table->enum('rental_type', ['roommate', 'flatmate', 'other']);
            $table->enum('rental_term', ['short term', 'long term']);
            $table->boolean('furnished')->nullable();
            $table->boolean('pet_friendly')->nullable();
            $table->boolean('private_bath')->nullable();
            $table->boolean('smoking_allowed')->nullable();
            $table->boolean('party_room')->nullable();
            $table->boolean('security_on_site')->nullable();
            $table->date('start_date');
            $table->date('end_date');
            $table->enum('type', ['house', 'apartment', 'room', 'basement suite']);
            $table->integer('bedrooms_number');
            $table->integer('baths_number');
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
        Schema::dropIfExists('ads');
    }
}
