<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Employee>
 */
class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'first_surname' => fake()->lastName(),
            'second_surname' => fake()->lastName(),
            'first_name' => fake()->firstName(),
            'other_names' => fake()->firstName(),
            'country_id' => fake()->numberBetween(1, 2),
            'id_document_id' => fake()->numberBetween(1, 4),
            'id_code' => fake()->ean13() . fake()->randomDigit(),
            'job_area_id' => fake()->numberBetween(1, 7),
            'admission_date' => fake()->dateTimeThisDecade(),
            'email' => fake()->email(),
        ];
    }
}
