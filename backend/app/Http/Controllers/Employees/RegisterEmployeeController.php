<?php

namespace App\Http\Controllers\Employees;

use App\Http\Controllers\Controller;
use App\Services\Employees\RegisterEmployeeService;
use Illuminate\Http\Request;

class RegisterEmployeeController extends Controller
{
    private RegisterEmployeeService $service;

    public function __construct(RegisterEmployeeService $service)
    {
        $this->service = $service;
    }

    public function exec(Request $request)
    {
        $validated = $request->validate([
            'first_surname' => 'required|string|uppercase|max:20|regex:/[A-Z\s]/',
            'second_surname' => 'required|string|uppercase|max:20|regex:/[A-Z\s]/',
            'first_name' => 'required|string|uppercase|max:20|regex:/[A-Z\s]/',
            'other_names' => 'nullable|string|uppercase|max:50|regex:/[A-Z\s]/',
            'id_code' => 'nullable|string|max:20|regex:/^[A-Za-z0-9]/',
            'id_document_id' => 'nullable|integer',
            'country_id' => 'nullable|integer',
            'job_area_id' => 'nullable|integer',
            'admission_date' => 'nullable|date'
        ]);

        return $this->service->exec($validated);
    }
}
