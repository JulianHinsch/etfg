<?php

use App\Http\Controllers\Controller;

class ProductsController extends Controller {
    public function getAll() {
        //slow!!!!!!!!
        /*
        $products = DB::table('products')
            ->select(DB::raw('products.ticker as ticker, products.name as name, issuers.issuer_name as issuer, count(views.id) as views'))
            ->join('issuers', 'issuers.issuer_id', '=', 'products.issuer_id')
            ->join('views','products.id', '=', 'views.product_id')
            ->join('users','users.id','=','views.user_id')
            ->join('firms','users.firm_id','=','firms.id')
            ->where('firms.type','!=',parent::getFilter(Input::get('datafilter')))
            ->groupBy('products.id')
            ->orderBy(Input::get('sort'),Input::get('order'))
            ->simplePaginate(20)
            ->all();
        $total = count(DB::select("SELECT products.id FROM products
            INNER JOIN views ON products.id = views.product_id
            INNER JOIN users ON users.id = views.user_id
            INNER JOIN firms ON users.firm_id = firms.id
            WHERE firms.type != " 
            . DB::getPDO()->quote(parent::getFilter(Input::get('datafilter')))
            . 'GROUP BY products.id'));
        */
         // workaround (no firms.type) - fast!
        $products = DB::table('products')
            ->select(DB::raw('products.ticker as ticker, products.name as name, issuers.issuer_name as issuer, products.view_count as views'))
            ->join('issuers', 'issuers.issuer_id', '=', 'products.issuer_id')
            ->orderBy(Input::get('sort'),Input::get('order'))
            ->simplePaginate(20)
            ->all();
        $total = count(DB::select("SELECT products.id FROM products"));
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
            ->where('firms.type','!=',parent::getFilter(Input::get('datafilter')))            
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
            ->where('firms.type','!=',parent::getFilter(Input::get('datafilter')))            
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
            ->where('firms.type','!=',parent::getFilter(Input::get('datafilter')))   
            ->where('firms.name','!=','ETF Global')
            ->where('firms.name','!=', 'Track One Capital')   
            ->where('products.ticker',$ticker)
            ->groupBy('firms.id')            
            ->orderBy(Input::get('sort'),Input::get('order'))
            ->simplePaginate(20)
            ->all();
        $total = count(DB::table('products')
            ->select(DB::raw('DISTINCT firms.name as firm, firms.id as firmId, count(DISTINCT users.id) as users, count(views.id) as views'))
            ->join('views', 'views.product_id', '=', 'products.id')
            ->join('users', 'users.id', '=', 'views.user_id')
            ->join('firms', 'users.firm_id', '=', 'firms.id')
            ->groupBy('firms.id')
            ->where('firms.type','!=',parent::getFilter(Input::get('datafilter')))            
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

?>