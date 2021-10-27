<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BestDresserController extends Controller
{
    public function checkPassCode(Request $request)
    {
        $user_id = $request['userid'];
        $input_codepass = $request['input_codepass'];
        $checkResult = DB::table('tour_info')->where('passcode', $input_codepass)->exists();

        return response()->json($checkResult);
    }
}
