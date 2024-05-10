<?php

namespace Database\Seeders;

use App\Models\IdDocument;
use Illuminate\Database\Seeder;

class IdDocumentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        IdDocument::insert([
            [
                'name' => 'Cédula de Ciudadanía',
                'description' => fake()->text(1000),
            ],
            [
                'name' => 'Cédula de Extrangería',
                'description' => fake()->text(1000),
            ],
            [
                'name' => 'Pasaporte',
                'description' => fake()->text(1000),
            ],
            [
                'name' => 'Permiso especial',
                'description' => fake()->text(1000),
            ],
        ]);
    }
}
