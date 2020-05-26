<?php


namespace App\Http\Controllers;


use App\Models\Board;
use App\Models\Pin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Response;

class PinsController extends Controller
{
    public function create(Request $request) {
        $data = $request->all();

        $pinValidator = Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string','max:255'],
            'board_id' => ['required'],
            'img_url' => ['required', 'url'],
        ]);

        if(!$pinValidator->validate()) {
            $errors = $pinValidator->errors()->getMessages();
            $code = Response::HTTP_UNPROCESSABLE_ENTITY; // 406
            return response()->json(['error' => $errors, 'code' => $code], $code);
        }


        $pins = Pin::create([
            'name' => $data['name'],
            'description' => $data['description'],
            'img_url' => $data['img_url'],
            'board_id' => $data['board_id']
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
    public function delete($id) {
        $pin = Pin::where('id', $id)->first();
        $pin->delete();

        return  response()->json("Pin deleted");
    }

    public function update(Request $request, $id)
    {
        $pin = Pin::where('id', $id)->first();
        $dataFromThePinToUpdate = $request->all();
        $pin->update($dataFromThePinToUpdate);
    }
}
