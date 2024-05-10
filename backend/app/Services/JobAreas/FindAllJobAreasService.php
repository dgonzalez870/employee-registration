<?php

namespace App\Services\JobAreas;

use App\Models\JobArea;
use Illuminate\Database\Eloquent\Collection;

class FindAllJobAreasService
{
  public function exec(): Collection
  {
    return JobArea::all();
  }
}
