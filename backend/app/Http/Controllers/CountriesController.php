<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CountriesController extends Controller
{
    //
    public function exec(): array
    {
        return [
            '1' => 'Japan',
            '2' => 'USA',
            '3' => 'Australia',
            '4' => 'Canada',
        ];
    }
}
