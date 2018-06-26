<?php namespace App\Http\Middleware;
use Closure;

class AddAuthResponseHeader {

    public function handle($request, Closure $next)
    {
        $response = $next($request);
        $response->header('Access-Control-Allow-Headers', 'Authorization');
        return $response;
    }
}