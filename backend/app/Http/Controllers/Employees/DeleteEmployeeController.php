<?php

namespace App\Http\Controllers\Employees;

use App\Http\Controllers\Controller;
use App\Services\Employees\DeleteEmployeeService;

class DeleteEmployeeController extends Controller
{
    private DeleteEmployeeService $service;

    public function __construct(DeleteEmployeeService $service)
    {
        $this->service = $service;
    }

    /**
     * @OA\Get(
     *   tags={"Employees"},
     *   path="employees/{id}",
     *   summary="Deletes the user for the given id",
     *   @OA\Parameter(ref="#/components/parameters/id"),
     *   @OA\Response(response=204, description="OK"),
     *   @OA\Response(response=401, description="Unauthorized"),
     *   @OA\Response(response=404, description="The employee was not found")
     * )
     */
    public function exec($id)
    {
        $this->service->exec($id);
        return response()->noContent();
    }
}
