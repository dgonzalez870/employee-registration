<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->string('first_surname', 20);
            $table->string('second_surname', 20);
            $table->string('first_name', 20);
            $table->string('other_names', 50)->nullable(true);
            $table->bigInteger('job_country');
            $table->bigInteger('id_document');
            $table->string('id_number', 20);
            $table->string('email', 300);
            $table->date('admission_date');
            $table->bigInteger('job_area');
            $table->string('status')->default('Activo');
            $table->timestamp('created_at', 0)->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at', 0)->default(DB::raw('CURRENT_TIMESTAMP'))->onUpdate(DB::raw('CURRENT_TIMESTAMP'));
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
