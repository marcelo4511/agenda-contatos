<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::all();
        return response()->json($categories);
    }

    public function show($id) 
    {
        $category = Category::find($id);
        return response()->json($category);
    }

    public function store( Request $request)
    {

        $category = new Category();
        $category->name = $request->input('name');
        $category->status = $request->input('status');
        
        try {
            $category->save();
            return response()->json($category,200);
        
        }catch(\Exception $e) {
            return response()->json($e,401);
        }
    }

    public function update(Request $request,$id) 
    {
        $data = $request->all();
        $category = Category::findOrFail($id);
        try {
            $category->update($data);
            return response()->json($category,200);
        
        }catch(\Exception $e) {
            return response()->json($e,401);
        }
        return response()->json($category);
    }

    public function destroy($id)
    {
        Category::where('id', $id)->delete();

        return response()->json(['data' => ['msg' => 'Categoria removida com sucesso']]);
    }
}
