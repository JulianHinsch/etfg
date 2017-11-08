<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use App\Post;
use DB;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User; /* User model */
use Illuminate\Database\Eloquent\ModelNotFoundException; 


class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function formatValidationErrors(\Illuminate\Contracts\Validation\Validator $validator)
    {
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
    public function edit($user_id)
{
    try{
        //Find the user object from model if it exists
        $user= User::findOrFail($user_id);
        //Redirect to edit user form with the user info found above.
        return view('add',['user'=>$user]);
    }
    catch(ModelNotFoundException $err){
        //redirect to your error page
    }
}
public function update(Request $request, $user_id)
{
    try{
        //Find the user object from model if it exists
        $user= User::findOrFail($user_id);
        //Set user object attributes
        //the $request index should match your form field ids!!!!!
        //you can exclude any field you want.
        $user->description = $request['idemployee'];
        $user->contactName = $request['contactName'];
        $user->contactPhone = $request['contactPhone'];
        $user->timeZone = $request['timeZone'];
        //Save/update user.
        $user->save();

        //redirect to somewhere?
    }
    catch(ModelNotFoundException $err){
        //Show error page
    }       
}      
}
class PostsController extends Controller
{
    public function index()
    {
        $posts = DB::select('select * from users');
        return response()->json($posts);
    }
}

class FirmsController extends Controller
{
    public function index()
    {
        $firms = DB::select('select * from firms');
        return response()->json($firms);

    }
}

class ProductsController extends Controller
{
    public function index()
    {
        $products = DB::select('select * from products');
        return response()->json($products);
    }
}

class ActionTypesController extends Controller
{
    public function index()
    {
        $actionTypes = DB::select('select * from action_types');
        return response()->json($actionTypes);
    }
}

class ActionsController extends Controller
{
    public function index()
        {
            $actions = DB::select('select * from actions');
            return response()->json($actions);
        }
}

class IpCitiesController extends Controller
{
    public function index()
        {
            $cities = DB::select('select * from ip_cities');
            return response()->json($cities);
        }
}

class IpCountriesController extends Controller
{
    public function index()
        {
            $countries = DB::select('select * from countries');
            return response()->json($countries);
        }
}

class IpStatesController extends Controller
{
    public function index()
        {
            $states = DB::select('select * from ip_states');
            return response()->json($states);
        }
}

class IpAddressesController extends Controller
{
    public function index()
        {
            $addresses = DB::select('select * from ip_addresses');
            return response()->json($addresses);
        }
}

class MigrationsController extends Controller
{
    public function index()
        {
            $migrations = DB::select('select * from migrations');
            return response()->json($migrations);
        }
}

class UserActionsController extends Controller
{
    public function index()
        {
            $useractions = DB::select('select * from user_actions');
            return response()->json($useractions);
        }
}

class UsersController extends Controller
{
    public function index()
        {
            $users = DB::select('select * from users');
            return response()->json($users);
        }
}