<?php

namespace App\Http\Controllers;

use App\Models\Todos;
use Illuminate\Http\Request;

class Todos_controller extends Controller
{
    public function index(){
        $todosList = Todos::all();
        return response()->json($todosList);
    }

    public function add(Request $request){

        $todosList = new Todos();
        $todosList->name = $request->name;
        $res = $todosList->save();

        if($res){
            return ["result"=>"data has been seved"];
        }
        else{
            return ["result"=>"Error"];
        }
    }

    public function show($id){

        $todo = Todos::find($id);
        // return $todo;
        return response()->json($todo);

    }

    public function update(Request $request, $id){

        $update = Todos::find($id);
        $update->name = $request->name;
    //     $update->id = $request->id;
    //     $res = $update->save();

        // if($res){
        //     return ["result"=>"data has been adeted"];
        // }
        // else{
        //     return ["result"=>"Error"];
        // }
        $update->save();

    }

    public function destroy($id){
        $delete_todo = Todos::find($id);
        $delete_todo->delete();
    }


}
