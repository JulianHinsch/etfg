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

class FirmsController extends Controller {
    public function getAll() {
        $firms = DB::table('firms')
            ->select(DB::raw('firms.id, firms.name, count(users.id) as users, firms.view_count'))
            ->where('firms.name','!=','Guest')
            ->where('firms.name','!=','Demo User')
            ->groupBy('firms.id')
            ->join('users','users.firm_id', '=', 'firms.id')
            ->orderBy('firms.view_count','desc')
            ->limit(20)
            ->get();
        return response()->json($firms);
    }
    public function getInfoById($id) {
        $firmInfo = DB::table('firms')->where('id',$id)->first();
        return response()->json($firmInfo);
    }
    public function getViewsById($firmId) {
        $viewedProducts = DB::table('products')
            ->select(DB::raw('DISTINCT products.ticker, products.name, issuers.issuer_name, count(views.id) as view_count'))
            ->join('views', 'views.product_id', '=', 'products.id')
            ->join('users', 'users.id', '=', 'views.user_id')
            ->join('firms', 'users.firm_id', '=', 'firms.id')
            ->join('issuers', 'issuers.issuer_id', '=', 'products.issuer_id')
            ->groupBy('products.id','issuers.issuer_name')
            ->limit('20')
            ->where('users.firm_id',$firmId)
            ->orderBy('view_count','desc')
            ->get();
        return response()->json($viewedProducts);
    }
    public function getActionsById($firmId) {
        $actions = DB::table('actions')
            ->select('date','type','portfolio')
            ->join('users', 'users.email', '=', 'actions.email')
            ->where('users.firm_id',$firmId)
            ->where('actions.type','!=','n/a')
            ->where('portfolio', '!=','n/a')
            ->limit('20')
            ->orderBy('date','desc')
            ->get();
        return response()->json($actions);
    }
}

class ProductsController extends Controller {
    public function getAll() {
        $products = DB::table('products')
            ->select(DB::raw('DISTINCT products.ticker, products.name, issuers.issuer_name, products.view_count'))
            ->join('issuers', 'issuers.issuer_id', '=', 'products.issuer_id')
            ->orderBy('view_count', 'desc')
            ->limit(20)
            ->get();
        return response()->json($products);
    }
    public function getInfoByTicker($ticker) {
        $productInfo = DB::table('products')->where('ticker', $ticker)->first();
        return response()->json($productInfo);
    }
    public function getActionsByTicker($ticker) {
        $actions = DB::table('actions')
            ->select('date','firms.name as firm','type','portfolio')
            ->where('portfolio','like',"%$ticker%")
            ->join('users', 'users.email', '=', 'actions.email')
            ->join('firms', 'users.firm_id', '=', 'firms.id')
            ->orderBy('date','desc')
            ->limit(20)
            ->get();
        return response()->json($actions);
    }
}

class IpCountriesController extends Controller {
    public function getAllCountries() {
        $countries = DB::table('countries')->get();
        return response()->json($countries);
    }
    public function getCountryInfoByCountryCode($countryCode) {
        $countryInfo = DB::table('countries')->where('code',$countryCode)->first();
        return response()->json($countryInfo);
    }
}

/*
class PostsController extends Controller {
    public function index() {
        $posts = DB::select('select * from users');
        return response()->json($posts);
    }
}
class IpCitiesController extends Controller {
    public function index() {
        $cities = DB::select('select * from ip_cities');
        return response()->json($cities);
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
*/