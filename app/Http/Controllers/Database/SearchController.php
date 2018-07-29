<?php

namespace App\Http\Controllers\Database;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use DB;
use Illuminate\Support\Facades\Input;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class SearchController extends Controller {
    public function getSearchResults($terms) {
        $termArray = explode(" ",$terms);
        $productResults = [];
        foreach($termArray as &$value) {
            $results = DB::table('products')
            //raw here may need to be protected against injections, although input is exploded
                ->select(DB::raw("products.ticker, products.name, MATCH (products.ticker,products.name) AGAINST ('$value' IN BOOLEAN MODE) as relevance"))
                ->where('products.name','LIKE',"%$value%")
                ->orderBy('relevance','DESC')
                ->limit(20)
                ->get()
                ->toArray();
            $productResults = array_merge($results, $productResults);
        }
        $firmResults = [];
        foreach($termArray as &$value) {
            $results = DB::table('firms')
                ->select(DB::raw("firms.name,firms.id, MATCH (firms.name) AGAINST ('$value' IN BOOLEAN MODE) as relevance"))
                ->where('firms.name','LIKE',"%$value%")
                ->orderBy('relevance','DESC')
                ->limit(20)
                ->get()
                ->toArray();
            $firmResults = array_merge($results, $firmResults);
        }
        $results = array_merge($productResults,$firmResults);
        usort($results, function($a, $b) {
            return ($b->relevance) - ($a->relevance);
        });
        return response()->json($results);
    }
}

?>