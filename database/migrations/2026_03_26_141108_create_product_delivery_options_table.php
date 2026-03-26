<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('product_delivery_options', function (Blueprint $table) {
            $table->id('option_id');
            $table->unsignedBigInteger('product_id');
            $table->unsignedBigInteger('dtype_id');
            $table->decimal('delivery_price', 10, 2);
            $table->integer('speed_days')->nullable();
            $table->timestamps();

            $table->foreign('product_id')->references('product_id')->on('products')->onDelete('cascade');
            $table->foreign('dtype_id')->references('dtype_id')->on('delivery_types')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_delivery_options');
    }
};
