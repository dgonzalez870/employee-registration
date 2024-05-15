<?php

use App\Utils\ModelNotFoundExceptionParser;
use GuzzleHttp\Psr7\Message;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;


return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        api: __DIR__ . '/../routes/api.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        //
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
        $exceptions->render(function (Throwable $e, Request $request) {

            if ($e instanceof NotFoundHttpException) {
                $previous = $e->getPrevious();
                if ($previous instanceof ModelNotFoundException) {
                    return response()->json([
                        'message'   => ModelNotFoundExceptionParser::parse($previous),
                    ], 404);
                }
            }

            if ($e instanceof HttpException) {
                return response()->json([
                    'message' => $e->getMessage()
                ], $e->getStatusCode());
            }

            if ($e instanceof ValidationException) {
                return response()->json([
                    // Returns a generic validation message
                    'message'   => 'Los datos de su solicitud no son correctos, por favor intente nuevamente',
                    'validator' => $e->validator->errors()->getMessages(),
                ], 400);
            }

            return response()->json(
                // Returns a generic error message to the client, so the server does not return
                // any sensitive information but still the errors can be seen in the logs.
                ['message' => 'Tenemos un problema, por favor intente nuevamente más tarde'],
                500
            );
        });
    })->create();
