<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use App\Post;
use DB;
use Illuminate\Support\Facades\Input;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User; /* User model */
use Illuminate\Database\Eloquent\ModelNotFoundException; 

//TODO: test all controllers
//TODO: prepare front end for different data format

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
}

class FirmsController extends Controller {
    public function getAll() {
        $firms = DB::table('firms')
            ->select(DB::raw('firms.id as id, firms.name as name, count(users.id) as users, firms.view_count as views'))
            ->where('firms.name','!=','Guest')
            ->where('firms.name','!=','Demo User')
            ->groupBy('firms.id','firms.name','firms.view_count')
            ->join('users','users.firm_id', '=', 'firms.id')
            ->orderBy(Input::get('sort'),Input::get('order'))
            ->simplePaginate(20)
            ->all();
        $total = count(DB::table('firms')
            ->select(DB::raw('firms.id as id, firms.name as name, count(users.id) as users, firms.view_count as views'))
            ->where('firms.name','!=','Guest')
            ->where('firms.name','!=','Demo User')
            ->groupBy('firms.id','firms.name','firms.view_count')
            ->join('users','users.firm_id', '=', 'firms.id')
            ->get());
        $response = array('total'=>$total,'items'=>$firms);
        return response()->json($response);
    }

    public function getInfoById($id) {
        $firmInfo = DB::table('firms')->where('id',$id)->first();
        return response()->json($firmInfo);
    }

    public function getViewsById($firmId) {
        $viewedProducts = DB::table('products')
            ->select(DB::raw('DISTINCT products.ticker as ticker, products.name as name, issuers.issuer_name as issuer, count(views.id) as views'))
            ->join('views', 'views.product_id', '=', 'products.id')
            ->join('users', 'users.id', '=', 'views.user_id')
            ->join('issuers', 'issuers.issuer_id', '=', 'products.issuer_id')
            ->groupBy('products.id')
            ->where('users.firm_id',$firmId)
            ->orderBy(Input::get('sort'),Input::get('order'))
            ->simplePaginate(20)
            ->all();
        $total = count(DB::table('products')
            ->select(DB::raw('DISTINCT products.ticker as ticker, products.name as name, issuers.issuer_name as issuer, count(views.id) as views'))
            ->join('views', 'views.product_id', '=', 'products.id')
            ->join('users', 'users.id', '=', 'views.user_id')
            ->join('issuers', 'issuers.issuer_id', '=', 'products.issuer_id')
            ->groupBy('products.id')
            ->where('users.firm_id',$firmId)
            ->get());
        $response = array('total'=>$total,'items'=>$viewedProducts);
        return response()->json($response);
    }

    public function getActionsById($firmId) {
        $actions = DB::table('actions')
            ->select('date','type','portfolio','users.address as address','users.city as city','users.state as state','users.zip as zip','countries.name as country')
            ->join('users', 'users.email', '=', 'actions.email')
            ->join('countries','countries.id', '=', 'users.country_id')
            ->where('users.firm_id',$firmId)
            ->where('actions.type','!=','n/a')
            ->where('portfolio', '!=','n/a')
            ->orderBy(Input::get('sort'),Input::get('order'))
            ->simplePaginate(20)
            ->all();
        $total = count(DB::table('actions')
            ->select('date','type','portfolio','users.address as address','users.city as city','users.state as state','users.zip as zip','countries.name as country')
            ->join('users', 'users.email', '=', 'actions.email')
            ->join('countries','countries.id', '=', 'users.country_id')
            ->where('users.firm_id',$firmId)
            ->where('actions.type','!=','n/a')
            ->where('portfolio', '!=','n/a')
            ->get());
        $response = array('total'=>$total,'items'=>$actions);
        return response()->json($response);
    }
}

class ProductsController extends Controller {
    public function getAll() {
        $products = DB::table('products')
            ->select(DB::raw('DISTINCT products.ticker as ticker, products.name as name, issuers.issuer_name as issuer, products.view_count as views'))
            ->join('issuers', 'issuers.issuer_id', '=', 'products.issuer_id')
            ->orderBy(Input::get('sort'),Input::get('order'))
            ->simplePaginate(20)
            ->all();
        $total = count(DB::table('products')
            ->select(DB::raw('DISTINCT products.ticker as ticker, products.name as name, issuers.issuer_name as issuer, products.view_count as views'))
            ->join('issuers', 'issuers.issuer_id', '=', 'products.issuer_id')
            ->get());
        $response = array('total'=>$total,'items'=>$products);
        return response()->json($response);
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
            //ip street addresses instead of user street addresses?
            //->select('date','firms.name as firm','firms.id as firmId','users.address as userAddress','users.city as userCity','users.state as userState','users.zip as userZip','countries.name as country','ip_addresses.postal_code as ipZip','ip_cities.name as ipCity','ip_states.name as ipState','actions.type as type','portfolio')
            ->select('date','firms.name as firm','firms.id as firmId','users.address as address','users.city as city','users.state as state','users.zip as zip','countries.name as country','actions.type as type','portfolio')
            ->where('portfolio','like',"%$ticker%")
            ->join('users', 'users.email', '=', 'actions.email')
            ->join('firms', 'users.firm_id', '=', 'firms.id')
            ->join('countries','countries.id', '=', 'users.country_id')
            ->where('firms.name','!=','ETF Global')
            ->where('firms.name','!=', 'Track One Capital')
            ->orderBy(Input::get('sort'),Input::get('order'))
            ->simplePaginate(20)
            ->all();
        $total = count(DB::table('actions')
            ->select('date','firms.name as firm','firms.id as firmId','users.address as address','users.city as city','users.state as state','users.zip as zip','countries.name as country','actions.type as type','portfolio')
            ->where('portfolio','like',"%$ticker%")
            ->join('users', 'users.email', '=', 'actions.email')
            ->join('firms', 'users.firm_id', '=', 'firms.id')
            ->join('countries','countries.id', '=', 'users.country_id')
            ->where('firms.name','!=','ETF Global')
            ->where('firms.name','!=', 'Track One Capital')
            ->get());
        $response = array('total'=>$total,'items'=>$actions);
        return response()->json($response);
    }

    public function getFirmsByTicker($ticker) {
        $firms = DB::table('products')
            ->select(DB::raw('DISTINCT firms.name as name, firms.id as firmId, count(DISTINCT users.id) as users, count(views.id) as views'))
            ->join('views', 'views.product_id', '=', 'products.id')
            ->join('users', 'users.id', '=', 'views.user_id')
            ->join('firms', 'users.firm_id', '=', 'firms.id')
            ->groupBy('firms.id')
            ->where('firms.name','!=','ETF Global')
            ->where('firms.name','!=', 'Track One Capital')
            ->where('products.ticker',$ticker)
            ->orderBy(Input::get('sort'),Input::get('order'))
            ->simplePaginate(20)
            ->all();
        $total = count(DB::table('products')
            ->select(DB::raw('DISTINCT firms.name as firm, firms.id as firmId, count(DISTINCT users.id) as users, count(views.id) as views'))
            ->join('views', 'views.product_id', '=', 'products.id')
            ->join('users', 'users.id', '=', 'views.user_id')
            ->join('firms', 'users.firm_id', '=', 'firms.id')
            ->groupBy('firms.id')
            ->where('firms.name','!=','ETF Global')
            ->where('firms.name','!=', 'Track One Capital')
            ->where('products.ticker',$ticker)
            ->get());
        $response = array('total'=>$total,'items'=>$firms);
        return response()->json($response);
    }

    public function getViewsByFirm($ticker,$firmId) {
        $actions = DB::table('actions')
            ->select('actions.date','actions.type','actions.portfolio','users.address as address','users.city as city','users.state as state','users.zip as zip','countries.name as country')            
            ->where('portfolio','like',"%$ticker%")
            ->join('users', 'users.email', '=', 'actions.email')
            ->join('firms', 'users.firm_id', '=', 'firms.id')
            ->join('countries','countries.id', '=', 'users.country_id')
            ->where('firms.id',$firmId)
            ->orderBy(Input::get('sort'),Input::get('order'))            
            ->simplePaginate(20)
            ->all();
        $total = count(DB::table('actions')
            ->where('portfolio','like',"%$ticker%")
            ->join('users', 'users.email', '=', 'actions.email')
            ->join('firms', 'users.firm_id', '=', 'firms.id')
            ->where('firms.id',$firmId)
            ->get());
        $response = array('total'=>$total,'items'=>$actions);
        return response()->json($response);
    }
}

class SearchProductsFirmsController extends Controller {
    //could be updated for pagination
    public function getProductsFirmsSearchResults($terms) {
        $terms = preg_replace('/[^a-z\d ]/i', '', $terms);
        $terms = trim($terms);
        $termArray = preg_split('/\s+/', $terms);

        $productResults = [];
        $firmResults = [];
        
        foreach($termArray as &$value) {
            $productResultsForTerms = DB::table('products')
            //raw here may need to be protected against injections, although input is exploded
                ->select(DB::raw("products.ticker, products.name, MATCH (products.ticker,products.name) AGAINST (" 
                    . DB::getPdo()->quote($value) 
                    . " IN BOOLEAN MODE) as relevance"))
                ->where('products.name','LIKE',"%$value%")
                ->orWhere('products.ticker','LIKE',"%$value%")
                ->orderBy('relevance','DESC')
                ->get()
                ->toArray();
            $productResults = array_merge($productResults, $productResultsForTerms);
        }
        foreach($termArray as &$value) {
            $firmResultsForTerms = DB::table('firms')
                ->select(DB::raw("firms.name,firms.id, MATCH (firms.name) AGAINST ("
                    . DB::getPdo()->quote($value) 
                    . " IN BOOLEAN MODE) as relevance"))
                ->where('firms.name','LIKE',"%$value%")
                ->orderBy('relevance','DESC')
                ->limit(20)
                ->get()
                ->toArray();
            $firmResults = array_merge($firmResults, $firmResultsForTerms);
        }

        $results = array_merge($productResults,$firmResults);

        usort($results, function($a, $b) {
            return ($b->relevance) - ($a->relevance);
        });
        
        return response()->json($results);
    }
}

class ChartsController extends Controller {
    
    public function getViewsByType() {
        $results = DB::table('actions')
            ->select(DB::raw('type as label, count(*) as value'))
            ->groupBy('type')
            ->where('type','!=','n/a')
            ->get();
        return response()->json($results);
    }

    public function getViewsByCountry() {
        $results = DB::table('actions')
            ->select(DB::raw('countries.name as label, count(*) as value'))
            ->join('ip_addresses','actions.ip','=','ip_addresses.ip_address')
            ->join('ip_countries','ip_addresses.country_id','=','ip_countries.id')
            ->join('countries','countries.code','=','ip_countries.code')
            ->groupBy('countries.name')
            ->get();
        return response()->json($results);
    }

    public function getProductViewsByFirm($ticker) {
        $results = DB::table('actions')
            ->select(DB::raw('firms.name as label, count(*) as value'))
            ->where('portfolio','like',"%$ticker%")
            ->join('users', 'users.email', '=', 'actions.email')
            ->join('firms', 'users.firm_id', '=', 'firms.id')
            ->where('firms.name','!=','ETF Global')
            ->where('firms.name','!=', 'Track One Capital')
            ->groupBy('firms.name')
            ->orderBy('value','desc')
            ->limit(20)
            ->get();
        return response()->json($results);
    }

    public function getProductViewsByType($ticker) {
        $results = DB::table('actions')
            ->select(DB::raw('type as label, count(*) as value'))
            ->groupBy('type')
            ->where('type','!=','n/a')
            ->where('portfolio','like',"%$ticker%")
            ->orderBy('value','desc')            
            ->get();
        return response()->json($results);
    }

    //discuss if these are needed with ETFG
    public function getProductViewsByCountry() {}
    public function getTotalViews() {}
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