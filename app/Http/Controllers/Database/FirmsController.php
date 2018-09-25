<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use DB;
use Illuminate\Support\Facades\Input;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class FirmsController extends Controller {
    public function getAll() {
        $firms = DB::table('firms')
            ->select(DB::raw('firms.id as id, firms.name as name, count(users.id) as users, firms.view_count as views'))
            ->where('firms.name','!=','Guest')
            ->where('firms.name','!=','Demo User')
            ->where('firms.type','!=',parent::getFilter(Input::get('datafilter')))
            ->groupBy('firms.id','firms.name')
            ->join('users','users.firm_id', '=', 'firms.id')
            ->orderBy(Input::get('sort'),Input::get('order'))
            ->simplePaginate(20)
            ->all();
        $total = count(DB::table('firms')
            ->select(DB::raw('firms.id as id, firms.name as name, count(users.id) as users, firms.view_count as views'))
            ->where('firms.name','!=','Guest')
            ->where('firms.name','!=','Demo User')
            ->where('firms.type','!=',parent::getFilter(Input::get('datafilter')))
            ->groupBy('firms.id','firms.name')
            ->join('users','users.firm_id', '=', 'firms.id')
            ->get());
        $response = array('total'=>$total,'items'=>$firms);
        return response()->json($response);
    }

    public function getInfoById($firmId) {
        $firmInfo = DB::table('firms')->where('id',$firmId)->first();
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

?>