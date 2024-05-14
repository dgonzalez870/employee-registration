<?php

namespace App\Services\Employees;

use App\Models\Employee;

class GetEmployeeDetailsService
{
  public function exec($id)
  {
    return Employee::findOrFail($id);
  }
}
