<?php

namespace App\Services\IdDocuments;

use App\Models\IdDocument;
use Illuminate\Database\Eloquent\Collection;

class FindAllIdDocumentsService
{

  public function exec(): Collection
  {
    return IdDocument::all();
  }
}
