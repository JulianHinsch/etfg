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

    /*
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
    */ 
}

class FirmsController extends Controller {
    public function getAll() {
        $firms = DB::table('firms')
            ->select(DB::raw('firms.id, firms.name, count(users.id) as users, firms.view_count'))
            ->where('firms.name','!=','Guest')
            ->where('firms.name','!=','Demo User')
            ->groupBy('firms.id','firms.name','firms.view_count')
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
            ->select('date','type','portfolio','users.address as address','users.city as city','users.state as state','users.zip as zip','countries.name as country')
            ->join('users', 'users.email', '=', 'actions.email')
            ->join('countries','countries.id', '=', 'users.country_id')
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
        $productInfo = DB::table('products')
            ->select(DB::raw('products.ticker, products.name, products.development_class, products.region, products.sub_region, products.view_count, products.updated_at, asset_classes.name as asset_class, issuers.issuer_name as issuer, categories.category_name as category'))
            ->where('ticker', $ticker)
            ->join('asset_classes', 'asset_classes.id','=','products.asset_class_id')
            ->join('issuers', 'issuers.issuer_id','=','products.issuer_id')
            ->join('categories', 'categories.category_id','=','products.category_id')
            ->first();
        return response()->json($productInfo);
    }
    public function getActionsByTicker($ticker) {
        $actions = DB::table('actions')
            //->select('date','firms.name as firm','firms.id as firmId','users.address as userAddress','users.city as userCity','users.state as userState','users.zip as userZip','countries.name as country','ip_addresses.postal_code as ipZip','ip_cities.name as ipCity','ip_states.name as ipState','actions.type as type','portfolio')
            ->select('date','firms.name as firm','firms.id as firmId','users.address as address','users.city as city','users.state as state','users.zip as zip','countries.name as country','actions.type as type','portfolio')
            ->where('portfolio','like',"%$ticker%")
            ->join('users', 'users.email', '=', 'actions.email')
            ->join('firms', 'users.firm_id', '=', 'firms.id')
            // slow
            // ->join('ip_addresses','ip_addresses.ip_address','=','actions.ip')
            // ->join('ip_cities','ip_cities.id','=','ip_addresses.city_id')
            // ->join('ip_states','ip_states.id','=','ip_addresses.state_id')
            // ->join('ip_countries','ip_countries.id','=','ip_addresses.country_id')
            // ->join('countries','countries.code','=','ip_countries.code')
            // fast
            ->join('countries','countries.id', '=', 'users.country_id')
            ->where('firms.name','!=','ETF Global')
            ->where('firms.name','!=', 'Track One Capital')
            ->orderBy('date','desc')
            ->limit(20)
            ->get();
        return response()->json($actions);
    }
    public function getFirmsByTicker($ticker) {
        $firms = DB::table('products')
            ->select(DB::raw('DISTINCT firms.name as firm, firms.id as firmId, count(DISTINCT users.id) as users, count(views.id) as view_count'))
            ->join('views', 'views.product_id', '=', 'products.id')
            ->join('users', 'users.id', '=', 'views.user_id')
            ->join('firms', 'users.firm_id', '=', 'firms.id')
            ->groupBy('firms.id','firms.name')
            ->where('firms.name','!=','ETF Global')
            ->where('firms.name','!=', 'Track One Capital')
            ->where('products.ticker',$ticker)
            ->orderBy('view_count', 'desc')
            ->limit(20)
            ->get();
        return response()->json($firms);
    }
    public function getViewsByFirm($ticker,$firmId) {
        $actions = DB::table('actions')
            ->select('actions.date','actions.type','actions.portfolio','users.address as address','users.city as city','users.state as state','users.zip as zip','countries.name as country')            
            ->where('portfolio','like',"%$ticker%")
            ->join('users', 'users.email', '=', 'actions.email')
            ->join('firms', 'users.firm_id', '=', 'firms.id')
            ->join('countries','countries.id', '=', 'users.country_id')
            ->where('firms.id',$firmId)
            ->orderBy('date','desc')
            ->limit(20)
            ->get();
        return response()->json($actions);
    }
}

class SearchProductsFirmsController extends Controller {
    public function getProductsFirmsSearchResults($terms) {
        $termArray = explode(" ",$terms);

        $productResults = [];
        $firmResults = [];

        foreach($termArray as &$value) {
            $productResultsForTerm = DB::table('products')
            //raw here may need to be protected against injections, although input is exploded
                ->select(DB::raw("products.ticker, products.name, MATCH (products.ticker,products.name) AGAINST ('$value' IN BOOLEAN MODE) as relevance"))
                ->where('products.name','LIKE',"%$value%")
                ->orWhere('products.ticker','LIKE',"%$value%")
                ->orderBy('relevance','DESC')
                ->get()
                ->toArray();
            $productResults = array_merge($productResults, $productResultsForTerm);
        }
        foreach($termArray as &$value) {
            $firmResultsForTerm = DB::table('firms')
                ->select(DB::raw("firms.name,firms.id, MATCH (firms.name) AGAINST ('$value' IN BOOLEAN MODE) as relevance"))
                ->where('firms.name','LIKE',"%$value%")
                ->orderBy('relevance','DESC')
                ->limit(20)
                ->get()
                ->toArray();
            $firmResults = array_merge($firmResults, $firmResultsForTerm);
        }

        $results = array_merge($productResults,$firmResults);

        usort($results, function($a, $b) {
            return ($b->relevance) - ($a->relevance);
        });
        return response()->json($results);
    }
}

/*
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