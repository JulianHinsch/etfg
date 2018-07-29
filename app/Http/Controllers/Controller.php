<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use DB;
use Illuminate\Support\Facades\Input;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class Controller extends BaseController {

    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function formatValidationErrors(\Illuminate\Contracts\Validation\Validator $validator) {
        $status = 422;
        return [
            "message" => $status . " error",
            "errors" => [
                "message" => $validator->getMessageBag()->first(),
                "info" => [$validator->getMessageBag()->keys()[0]],
            ],
            "status_code" => $status
        ];
    }

    protected function getFilter($dataFilter) {
        switch($dataFilter) {
            case 'student':
                return 0;
            case 'professional':
                return 1;
            default:
                return 2;
        }
    }
}

?>
