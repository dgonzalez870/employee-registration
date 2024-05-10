<?php

namespace App\Http\Controllers\IdDocuments;

use App\Http\Controllers\Controller;
use App\Services\IdDocuments\FindAllIdDocumentsService;
use Illuminate\Database\Eloquent\Collection;

class FindAllIdDocumentsController extends Controller
{
  private FindAllIdDocumentsService $service;

  public function __construct(FindAllIdDocumentsService $service)
  {
    $this->service = $service;
  }

  public function exec(): Collection
  {
    return $this->service->exec();
  }
}
