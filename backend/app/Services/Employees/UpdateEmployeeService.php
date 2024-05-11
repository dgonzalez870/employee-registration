<?php

namespace App\Services\Employees;

use App\Models\Employee;

class UpdateEmployeeService
{
  public function exec($id, $data)
  {
    $employee = Employee::find($id);
    $employee->fill($data);
    $employee->save();
    return $employee;
  }
}
