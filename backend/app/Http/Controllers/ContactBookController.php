<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ContactBook;

class ContactBookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contactbooks = ContactBook::with('categories')->get();
        return response()->json($contactbooks);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $contactbook = new ContactBook();
        $contactbook->name = $request->input('name');
        $contactbook->phone = $request->input('phone');
        $contactbook->city = $request->input('city');
        $contactbook->category_id = $request->input('category_id');
        $contactbook->observations = $request->input('observations');
        
        try {
            $contactbook->save();
            return response()->json($contactbook,200);
        
        }catch(\Exception $e) {
            return response()->json($e,401);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $contactbook = ContactBook::with('categories')->find($id);
        return response()->json($contactbook);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();
        $contactbook = ContactBook::findOrFail($id);
        try {
            $contactbook->update($data);
            return response()->json($contactbook,200);
        
        }catch(\Exception $e) {
            return response()->json($e,401);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        ContactBook::where('id', $id)->delete();
        return response()->json(['data' => ['msg' => 'Contato removido com sucesso']]);
    }
}
