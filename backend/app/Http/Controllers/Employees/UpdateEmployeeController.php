<?php

namespace App\Http\Controllers\Employees;

use App\Http\Controllers\Controller;
use App\Services\Employees\UpdateEmployeeService;
use Illuminate\Http\Request;

class UpdateEmployeeController extends Controller
{
    private UpdateEmployeeService $service;

    public function __construct(UpdateEmployeeService $service)
    {
        $this->service = $service;
    }

    public function exec(Request $request, int $id)
    {
        return $this->service->exec($id, $request->json()->all());
    }
}
