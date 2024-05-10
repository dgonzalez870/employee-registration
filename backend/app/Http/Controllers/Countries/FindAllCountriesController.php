<?php

namespace App\Http\Controllers\Countries;


use App\Services\Countries\FindAllCountriesService;
use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Collection;

class FindAllCountriesController extends Controller
{
  private FindAllCountriesService $service;

  public function __construct(FindAllCountriesService $service)
  {
    $this->service = $service;
  }

  //
  public function exec(): Collection
  {
    return $this->service->exec();
  }
}
