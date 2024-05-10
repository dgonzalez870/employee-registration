<?php

namespace App\Services\Countries;

use App\Models\Country;
use Illuminate\Database\Eloquent\Collection;

class FindAllCountriesService
{
  public function exec(): Collection
  {
    return Country::all();
  }
}
