<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\UserRequest;

class UserController extends Controller {
    public function index() {
        return response()->json(User::all());
    }

    public function save(UserRequest $request) {
        $user = $request->except($request->password);
        $user['password'] = Hash::make($request->password);
        User::create($user);
    }

    public function edit(UserRequest $request) {
        $user = $request->except($request->password);
        $user['password'] = Hash::make($request->password);

        User::where('id', $request->id)->update($user);
    }

    public function delete(Request $request) {
        User::destroy($request->id);
    }
}
