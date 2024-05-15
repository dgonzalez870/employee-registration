<?php

namespace App\Utils;

use Illuminate\Database\Eloquent\ModelNotFoundException;

class ModelNotFoundExceptionParser
{

  /**
   * Process the default message, for example: "No query results for model [App\\Models\\Employee] 500"
   *  and returns a human readable message "The Employee with id 500 was not found"
   *  @param ModelNotFoundException $e - Error instance
   *  @param string $locale - Language code, default is 'es'
   *  @return string
   */
  public static function parse(ModelNotFoundException $e, string $locale = 'es')
  {
    return  __(
      'models.model_not_found',
      [
        'model' => __('models.' . $e->getModel(), [], $locale),
        'id' => $e->getIds()[0]
      ],
      $locale,
    );
  }
}
