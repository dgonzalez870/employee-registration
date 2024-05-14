<?php

namespace App\Services\Employees;

use App\Models\Country;
use App\Models\Employee;
use Symfony\Component\HttpFoundation\Exception\BadRequestException;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class RegisterEmployeeService
{

  private EmailGeneratorService $emailGeneratorService;

  public function __construct(EmailGeneratorService $emailGeneratorService)
  {
    $this->emailGeneratorService = $emailGeneratorService;
  }


  public function exec($data)
  {
    $county = Country::find($data['country_id']);
    $idCode = $data['id_code'];

    // Search for the employee with the same id code
    $employee = Employee::where('id_code', $idCode)->first();

    if ($employee) {
      throw new BadRequestHttpException(
        'Un empleado con ese número de identificación ya se encuentra registrado'
      );
    }

    // Creates email data to fit the specification [name].[surname]<number>@global.com.[country_code]
    $emailData =
      [
        'first_name' => $data['first_name'],
        'first_surname' => $data['first_surname'],
        'country_code' => $county->code,
      ];

    // Creates a comparition email pattern
    $emailPattern = $this->emailGeneratorService->getEmailPattern(
      $emailData
    );

    // Retrieves the employees having a similar email
    $registeredCount = Employee::whereRaw("email REGEXP '*$emailPattern*'")->count();


    $email = $this->emailGeneratorService->exec($data, $registeredCount);

    $data['email'] = $email;

    return Employee::create($data);
  }
}
