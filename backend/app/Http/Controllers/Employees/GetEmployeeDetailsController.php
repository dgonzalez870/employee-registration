<?php

namespace App\Http\Controllers\Employees;

use App\Http\Controllers\Controller;
use App\Services\Employees\GetEmployeeDetailsService;

class GetEmployeeDetailsController extends Controller
{
  private GetEmployeeDetailsService $service;

  public function __construct(GetEmployeeDetailsService $service)
  {
    $this->service = $service;
  }

  public function exec(int $id)
  {
    return $this->service->exec($id);
  }
}
