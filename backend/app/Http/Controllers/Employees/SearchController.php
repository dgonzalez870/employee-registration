<?php

namespace App\Http\Controllers\Employees;

use App\Http\Controllers\Controller;
use App\Services\Employees\SearchEmployeesService;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    private SearchEmployeesService $service;

    public function __construct(SearchEmployeesService $service)
    {
        $this->service = $service;
    }

    public function exec(): Collection
    {
        return $this->service->exec();
    }
}
