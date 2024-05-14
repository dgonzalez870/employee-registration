<?php

namespace App\Services\Employees;

/**
 * This service is used to generate email Address
 */
class EmailGeneratorService
{

  public function clearWhitespacesAndLowercase($original): string
  {
    return strtolower(preg_replace('/\s+/', '', $original));
  }

  public function exec($data, int $regCount = 0): string
  {
    $name = $this->clearWhitespacesAndLowercase($data['first_name']);
    $surname = $this->clearWhitespacesAndLowercase($data['first_surname']);
    $emailDomain = env('EMAIL_DOMAIN', 'global.com');
    $countryCode = strtolower($data['country_code']);
    return $name . '.' . $surname . ($regCount > 0 ? $regCount + 1 : '') . '@' . $emailDomain . '.' . $countryCode;
  }

  /**
   * Generates a regex to be used in MySQL query
   */
  public function getEmailPattern($data): string
  {
    $name = $this->clearWhitespacesAndLowercase($data['first_name']);
    $surname = $this->clearWhitespacesAndLowercase($data['first_surname']);
    $emailDomain = env('EMAIL_DOMAIN', 'global.com');
    $countryCode = strtolower($data['country_code']);
    return $name . '.' . $surname . '[0-9]*@' . $emailDomain . '.' . $countryCode;
  }
}
