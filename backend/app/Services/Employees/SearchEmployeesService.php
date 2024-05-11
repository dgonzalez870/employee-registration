<?php

namespace App\Services\Employees;

use App\Models\Employee;
use Illuminate\Database\Eloquent\Collection;

class SearchEmployeesService
{
  public function exec($query): Collection
  {
    $term = $query['term'] ?? null;
    $countries = $query['countries'] ?? null;
    $jobAreas = $query['jobAreas'] ?? null;
    $idDocuments = $query['idDocuments'] ?? null;
    $page = $query['page'] ?? 1;
    $size = $query['size'] ?? 10;

    return Employee::when($term, function ($q) use ($term) {
      $q->where('first_surname', 'like', '%' . $term . '%')
        ->orWhere('second_surname', 'like', '%' . $term . '%')
        ->orWhere('first_name', 'like', '%' . $term . '%')
        ->orWhere('other_names', 'like', '%' . $term . '%')
        ->orWhere('email', 'like', '%' . $term . '%')
        ->orWhere('id_code', 'like', '%' . $term . '%');
    })
      ->when($countries, function ($q) use ($countries) {
        $q->whereIn('country_id', $countries);
      })
      ->when($jobAreas, function ($q) use ($jobAreas) {
        $q->whereIn('job_area_id', $jobAreas);
      })
      ->when($idDocuments, function ($q) use ($idDocuments) {
        $q->whereIn('id_document_id', $idDocuments);
      })
      ->skip(($page - 1) * $size)
      ->take($size)
      ->get();
  }
}
