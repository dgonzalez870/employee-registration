<?php

namespace Database\Seeders;

use App\Models\JobArea;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JobAreaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $jobAreaNames = [
            'Administración',
            'Finaciera',
            'Compras',
            'Infraestructura',
            'Operación',
            'Talento Humano',
            'Servicios Varios',

        ];
        JobArea::insert(array_map(function (string $name) {
            return [
                'name' => $name,
                'description' => fake()->text(1000),
            ];
        }, $jobAreaNames));
    }
}
