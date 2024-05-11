<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_surname',
        'second_surname',
        'first_name',
        'other_names',
        'country_id',
        'id_document_id',
        'id_code',
        'email',
        'admission_date',
        'job_area_id',
    ];
}
