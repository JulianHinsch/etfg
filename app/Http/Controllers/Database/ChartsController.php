<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use DB;
use Illuminate\Support\Facades\Input;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ChartsController extends Controller {
    
    public function getViewsByType() {
        $results = DB::table('actions')
            ->select(DB::raw('actions.type as label, count(actions.id) as value'))
            ->join('users', 'users.email', '=', 'actions.email')
            ->join('firms', 'users.firm_id', '=', 'firms.id')
            ->where('actions.type','!=','n/a')
            ->where('firms.type','!=',parent::getFilter(Input::get('datafilter')))
            ->groupBy('actions.type')
            ->get();
        return response()->json($results);
    }

    public function getViewsByCountry() {
        $results = DB::table('countries')
            ->select(DB::raw('countries.name as label, count(views.id) as value'))
            ->join('ip_countries','ip_countries.code','=','countries.code')
            ->join('ip_addresses','ip_addresses.country_id','=','ip_countries.id')
            ->join('users', 'users.ip', '=', 'ip_addresses.ip_address')
            ->join('views', 'views.user_id', '=', 'users.id')
            ->join('firms', 'users.firm_id', '=', 'firms.id')
            ->where('firms.type','!=',parent::getFilter(Input::get('datafilter')))
            ->groupBy('countries.id')
            ->get();
        return response()->json($results);
    }

    public function getProductViewsByFirm($ticker) {
        $results = DB::table('actions')
            ->select(DB::raw('firms.name as label, count(firms.id) as value'))
            ->where('portfolio','like',"%$ticker%")
            ->join('users', 'users.email', '=', 'actions.email')
            ->join('firms', 'users.firm_id', '=', 'firms.id')
            ->where('firms.name','!=','ETF Global')
            ->where('firms.name','!=', 'Track One Capital')
            ->where('firms.type','!=',parent::getFilter(Input::get('datafilter')))
            ->groupBy('firms.name')
            ->orderBy('value','desc')
            ->limit(20)
            ->get();
        return response()->json($results);
    }

    public function getProductViewsByType($ticker) {
        $results = DB::table('actions')
            ->select(DB::raw('actions.type as label, count(actions.id) as value'))
            ->join('users', 'users.email', '=', 'actions.email')
            ->join('firms', 'users.firm_id', '=', 'firms.id')
            ->where('actions.type','!=','n/a')
            ->where('firms.type','!=',parent::getFilter(Input::get('datafilter')))
            ->where('portfolio','like',"%$ticker%")
            ->groupBy('actions.type')
            ->orderBy('value','desc')
            ->get();
        return response()->json($results);
    }
}

?>