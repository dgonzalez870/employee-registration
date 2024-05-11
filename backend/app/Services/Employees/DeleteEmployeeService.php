<?php

namespace App\Services\Employees;

use App\Models\Employee;

class DeleteEmployeeService
{
  public function exec($id)
  {
    $employee = Employee::findOrFail($id);
    $employee->delete();
  }
}
