<?php

namespace App\Services\Employees;

use App\Models\Country;
use App\Models\Employee;

/**
 * This service is used to generate email Address
 */
class EmailGeneratorService
{

  public function clearWhitespacesAndLowercase($original): string
  {
    return strtolower(preg_replace('/\s+/', '', $original));
  }

  public function getIncrementalEmail($data, int $regCount = 0): string
  {
    $name = $this->clearWhitespacesAndLowercase($data['first_name']);
    $surname = $this->clearWhitespacesAndLowercase($data['first_surname']);
    $emailDomain = env('EMAIL_DOMAIN', 'global.com');
    $countryCode = strtolower($data['country_code']);
    return $name . '.' . $surname . ($regCount > 0 ? '.' . $regCount + 1 : '') . '@' . $emailDomain . '.' . $countryCode;
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
    return $name . '.' . $surname . '(\\.[0-9])*@' . $emailDomain . '.' . $countryCode;
  }

  /**
   * Generates an email address based on the first name, surname and country with
   * the following format: <first_name>.<first_surname>@<email_domain>.<country_code>
   * If there is already an employee with the same email, it will be incremented by 1,
   * example: <first_name>.<first_surname>.1@<email_domain>.<country_code>
   */
  public function exec($emailData): string
  {

    $county = Country::find($emailData['country_id']);

    $emailData['country_code'] = $county->code;

    // Creates a comparition email pattern
    $emailPattern = $this->getEmailPattern(
      $emailData
    );

    // Retrieves the employees having a similar email
    $registeredCount = Employee::whereRaw("email REGEXP '$emailPattern'")->count();


    return $this->getIncrementalEmail($emailData, $registeredCount);
  }
}
