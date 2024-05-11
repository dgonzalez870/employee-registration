<?php

namespace App\Services\Employees;

use App\Models\Employee;

class RegisterEmployeeService
{
  public function exec($data)
  {
    return Employee::create($data);
  }
}
