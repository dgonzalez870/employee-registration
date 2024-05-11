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
            $table->foreignId('country_id')->constrained()->comment('País para el cual el empleado prestará sus servicios');
            $table->foreignId('id_document_id')->constrained()->comment('Tipo de Identificación');
            $table->string('id_code', 20);
            $table->string('email', 300)->unique();
            $table->date('admission_date');
            $table->foreignId('job_area_id')->constrained()->comment('Área para la cual fue contratado el empleado');
            $table->string('status')->default('Activo');
            $table->timestamp('created_at', 0)->default(DB::raw('CURRENT_TIMESTAMP'))->comment('Fecha y hora del registro de usuario');
            $table->timestamp('updated_at', 0)->comment('Fecha y hora de la última actualizacion del registro de usuario')->default(DB::raw('CURRENT_TIMESTAMP'))->onUpdate(DB::raw('CURRENT_TIMESTAMP'));

            // Creates a `unique` index on the `id_code` and `id_document_id` columns
            $table->unique(['id_code', 'id_document_id']);
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
