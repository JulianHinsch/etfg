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

    public function edit($user_id) {
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

    public function update(Request $request, $user_id) {
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

class PostsController extends Controller {
    public function index() {
        $posts = DB::select('select * from users');
        return response()->json($posts);
    }
}

class FirmsController extends Controller {
    public function index() {
        $firms = DB::select('select * from firms where name != "Guest" and name != "Demo User" order by view_count desc');
        return response()->json($firms);
    }
}

class FirmController extends Controller {
    public function index($id) {
        $firmInfo = DB::table('firms')->where('id',$id)->first();
        return response()->json($firmInfo);
    }
}

class ProductsController extends Controller {
    public function index() {
        $products = DB::select('select * from products order by view_count desc');
        return response()->json($products);
    }
}

class ProductController extends Controller {
    public function index($ticker) {
        $productInfo = DB::table('products')->where('ticker', $ticker)->first();
        return response()->json($productInfo);
    }
}

class ActionTypesController extends Controller {
    public function index() {
        $actionTypes = DB::select('select * from action_types');
        return response()->json($actionTypes);
    }
}

class ActionsController extends Controller {
    public function index($ticker) {
        $actions = DB::table('actions')
            ->select('ACTIONDATE as date','IP','TYPE as type','TICKERPERCENTHASH as portfolio')
            ->where('TICKERPERCENTHASH','like',"%$ticker%")
            ->orderBy('ACTIONDATE','desc')
            ->limit(100)
            ->get();
        return response()->json($actions);
    }
}

class IpCitiesController extends Controller {
    public function index() {
        $cities = DB::select('select * from ip_cities');
        return response()->json($cities);
    }
}

class IpCountriesController extends Controller {
    public function index() {
        $countries = DB::table('countries')->get();
        return response()->json($countries);
    }
}

class IpCountryController extends Controller {
    public function index($countryCode) {
        $countryInfo = DB::table('countries')->where('code',$countryCode)->first();
        return response()->json($countryInfo);
    }
}

class IpStatesController extends Controller {
    public function index() {
        $states = DB::select('select * from ip_states');
        return response()->json($states);
    }
}

class IpAddressesController extends Controller {
    public function index() {
        $addresses = DB::select('select * from ip_addresses');
        return response()->json($addresses);
    }
}

class MigrationsController extends Controller {
    public function index() {
        $migrations = DB::select('select * from migrations');
        return response()->json($migrations);
    }
}

class UserActionsController extends Controller {
    public function index() {
        $useractions = DB::select('select * from user_actions');
        return response()->json($useractions);
    }
}

class UsersController extends Controller {
    public function index() {
        $users = DB::select('select * from users');
        return response()->json($users);
    }
}