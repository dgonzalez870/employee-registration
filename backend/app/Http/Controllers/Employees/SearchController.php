<?php

namespace App\Http\Controllers\Employees;

use App\Http\Controllers\Controller;
use App\Services\Employees\SearchEmployeesService;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    private SearchEmployeesService $service;

    public function __construct(SearchEmployeesService $service)
    {
        $this->service = $service;
    }

    /**
     * @OA\Get(
     *   tags={"Employees"},
     *   path="employees",
     *   summary="Search for users with the given properties",
     *   @OA\Parameter(ref="#/components/parameters/id"),
     *   @OA\Response(response=200, description="A list of employees"),
     *   @OA\Response(response=401, description="Unauthorized"),
     * )
     */
    public function exec(Request $request)
    {
        return $this->service->exec($request->query());
    }
}
