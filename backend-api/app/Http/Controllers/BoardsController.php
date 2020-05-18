<?php


namespace App\Http\Controllers;


use App\Models\Pin;
use Illuminate\Http\Request;

class PinsController extends Controller
{
    public function create(Request $request) {
        $data = $request->all();

        $pins = Pin::create([
            'name' => $data['name'],
            'description' => $data['description'],
            'img_url' => $data['img_url']
        ]);

        return response()->json($pins);
    }

    public function findAll() {
        $pins = Pin::all();
        return response()->json($pins);
    }

    public function findById($id) {
        $pins = Pin::where('id', $id)->first();
        return response()->json($pins);
    }
}
