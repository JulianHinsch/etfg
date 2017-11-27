<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->integer('id')->unique();
            $table->string('ticker');
            $table->string('type_id');
            $table->string('name');
            $table->string('issuer_id');
            $table->string('asset_class_id');
            $table->string('category_id');
            $table->string('focus_id');
            $table->string('is_inverse');
            $table->string('is_leveraged');
            $table->string('multiplier');
            $table->string('development_class');
            $table->string('region');
            $table->string('sub_region');
            $table->string('is_etn');
            $table->string('type_of_fund');
            $table->string('created_at');
            $table->string('updated_at');
            $table->string('view_count');
            $table->string('is_etf');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
