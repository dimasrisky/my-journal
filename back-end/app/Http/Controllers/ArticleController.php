<?php

namespace App\Http\Controllers;
use App\Models\Article;
use App\Models\Category;

use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index(Request $request){
        if($request->query('category') && $request->query('category') != 1){
            $query = $request->query('category');
            $articles = Article::with('category', 'user')->where('category_id', $query)->orderBy('id', 'DESC')->paginate(5);
            return response()->json($articles, 200);
        }else{
            $articles = Article::with('category', 'user')->orderBy('id', 'DESC')->paginate(5);
            return response()->json($articles, 200);
        }
    }

    public function store(Request $request){
        $filename = null;
        $request->validate([
            'user_id' => ['required'],
            'title' => ['required'],
            'content' => ['required'],
            'category' => ['required'],
            'image' => ['required']
        ]);

        if($request->hasFile('image')){
            $path = $request->file('image')->store('articleImage');
            $filename = explode('/', $path);
        }

        Article::create([
            'user_id' => $request->user_id,
            'title' => $request->title,
            'description' => nl2br($request->content),
            'category_id' => $request->category,
            'image' => env('APP_URL') . '/storage/' . $filename[1]
        ]);

        return response()->json([
            "status" => "success",
            "message" => "article berhasil di upload"
        ]);
    }

    public function destroy($id){
        Article::destroy($id);
        $article = Article::find($id);
        return response()->json([
            "status" => "success",
        ]);
    }

    public function show($id){
        $article = Article::with('user', 'category')->find($id);
        return response()->json($article, 200);
    }

    public function newestArticle(){
        $articles = Article::with('category', 'user')->orderBy('id', 'DESC')->limit(5)->get();
        return response()->json($articles, 200);
    }

    public function popularArticle(){
        $articles = Article::with('category', 'user')->orderBy('id', 'DESC')->limit(10)->get();
        return response()->json($articles, 200);
    }
    
    public function category(){
        $category = Category::get();
        return response()->json($category, 200);
    }
}
