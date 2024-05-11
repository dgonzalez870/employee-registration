<?php

namespace App\Services\Employees;

use App\Models\Employee;
use Illuminate\Database\Eloquent\Collection;

class SearchEmployeesService
{
  public function exec(): Collection
  {
    return Employee::with(['jobArea'])->get();
    // return Employee::all();
  }
}
