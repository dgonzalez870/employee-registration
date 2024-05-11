<?php

namespace App\Services\Employees;

class EmailGeneratorService
{

  public function exec($data, int $regCount = 0): string
  {
    $name = $data['first_name'];
    $surname = $data['first_surname'];
    $emailDomain = env('EMAIL_DOMAIN', 'global.com');
    $countryCode = strtolower($data['country_code']);
    return $name . '.' . $surname . '.' . ($regCount > 0 ? $regCount + 1 : '') . '@' . $emailDomain . '.' . $countryCode;
  }

  public function getEmailPattern($data): string
  {
    $name = $data['first_name'];
    $surname = $data['first_surname'];
    $emailDomain = env('EMAIL_DOMAIN', 'global.com');
    $countryCode = strtolower($data['country_code']);
    return '/' . $name . '.' . $surname . '\d@' . $emailDomain . '.' . $countryCode . '/';
  }
}
