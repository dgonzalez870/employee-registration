<?php

use GuzzleHttp\Psr7\Message;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\HttpException;

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

            if ($e instanceof HttpException) {
                return response()->json([
                    'message' => $e->getMessage()
                ], $e->getStatusCode());
            }

            if ($e instanceof ValidationException) {
                return response()->json([
                    'message'   => 'validation error',
                    'validator' => $e->validator->errors()->getMessages(),
                ], 400);
            }

            return response()->json(
                ['message' => $e->getMessage()],
                500
            );
        });
    })->create();
