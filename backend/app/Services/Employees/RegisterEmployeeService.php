<?php

namespace App\Services\Employees;

use App\Models\Employee;
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
        'country_id' => $data['country_id'],
      ];


    $data['email'] = $this->emailGeneratorService->exec($emailData);

    return Employee::create($data);
  }
}
