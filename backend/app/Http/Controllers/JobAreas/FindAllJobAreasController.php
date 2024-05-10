<?php

namespace App\Http\Controllers\JobAreas;

use App\Http\Controllers\Controller;
use App\Services\JobAreas\FindAllJobAreasService;

class FindAllJobAreasController extends Controller
{

  private FindAllJobAreasService $service;

  public function __construct(FindAllJobAreasService $service)
  {
    $this->service = $service;
  }

  public function exec()
  {
    return $this->service->exec();
  }
}
