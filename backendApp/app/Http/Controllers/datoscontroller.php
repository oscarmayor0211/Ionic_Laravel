<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Categoria;

class datoscontroller extends Controller
{
    //GET http://localhost:8000/api/categoria
    public function index(){
        $categorias= Categoria::select('id','name','valor')->orderBy('id')->get();

        return $categorias;
    }

    // POST http //localhost:8000/api/categoria
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'string',
            'valor' => 'numeric'
        ]);
        $categorias = Categoria::create($request->all());

        return response()->json($categorias, 201);
    }
}
 