<?php

namespace App\Services\Employees;

use App\Models\Employee;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

/**
 * Updates the register and updates the email address if the first_surname or first_name has changed
 */
class UpdateEmployeeService
{

  private EmailGeneratorService $emailGeneratorService;

  public function __construct(EmailGeneratorService $emailGeneratorService)
  {
    $this->emailGeneratorService = $emailGeneratorService;
  }

  public function exec($id, $data)
  {
    $employee = Employee::findOrFail($id);
    $first_surname = $data['first_surname'];
    $first_name = $data['first_name'];
    $id_document_id = $data['id_document_id'];
    $id_code = $data['id_code'];

    // If the id code or id document has changed we need to validate that there is not any other user already
    // registered with the same id code and id document
    if ($id_code != $employee->id_code || $id_document_id != $employee->id_document_id) {
      $otherEmployee = Employee::where('id_code', $id_code)->where('id_document_id', $id_document_id)->first();
      if ($otherEmployee) {
        throw new BadRequestHttpException(
          'Un empleado con ese número de identificación ya se encuentra registrado'
        );
      }
    }

    // If the first_surname or first_name has changed we need to update the email address
    if ($first_surname != $employee->first_surname || $first_name != $employee->first_name) {
      $data['email'] = $this->emailGeneratorService->exec([
        'first_name' => $first_name,
        'first_surname' => $first_surname,
        'country_id' => $data['country_id'],
      ]);
    }

    $employee->fill($data);
    $employee->save();
    return $employee;
  }
}
