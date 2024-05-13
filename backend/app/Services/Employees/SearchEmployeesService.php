<?php

namespace App\Services\Employees;

use App\Models\Employee;


class SearchEmployeesService
{

  public function transformResponse(Employee $employee)
  {
    return [
      'id' => $employee->id,
      'first_surname' => $employee->first_surname,
      'second_surname' => $employee->second_surname,
      'first_name' => $employee->first_name,
      'other_names' => $employee->other_names,
      'email' => $employee->email,
      'id_code' => $employee->id_code,
      'country' => $employee->country->name,
      'job_area' => $employee->jobArea->name,
      'id_document' => $employee->idDocument->name,
      'created_at' => $employee->created_at,
      'updated_at' => $employee->updated_at,
      'admission_date' => $employee->admission_date,
    ];
  }

  /**
   * Builds the base query for the search, this query
   * will be used for searching and counting, allowing get
   * pagination
   *
   */
  public function getBaseQuery($query)
  {
    $term = $query['term'] ?? null;
    $countries = $query['countries'] ?? null;
    $jobAreas = $query['jobAreas'] ?? null;
    $idDocuments = $query['idDocuments'] ?? null;

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
      });
  }

  public function exec($query)
  {
    $page = $query['page'] ?? 1;
    $size = $query['size'] ?? 10;

    $employeesCount = $this->getBaseQuery($query)->count();

    $employees = $this->getBaseQuery($query)
      ->with(['country', 'jobArea', 'idDocument'])
      ->skip(($page - 1) * $size)
      ->take($size)
      ->get();

    $mappedEmployees = ($employees->map(function ($item) {
      return $this->transformResponse($item);
    }));

    return [
      'employees' => $mappedEmployees,
      'totalPages' => ceil($employeesCount / $size),
      'page' => $page,
    ];
  }
}
