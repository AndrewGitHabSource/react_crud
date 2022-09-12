<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\UserRequest;
use Illuminate\Http\JsonResponse;

class UserController extends Controller {
    public function index(): JsonResponse {
        return response()->json(User::all());
    }

    public function getUser(Request $request): JsonResponse {
        return response()->json(User::where('id', '=', $request->id)->first());
    }

    public function save(UserRequest $request): void {
        $user = $request->except($request->password);
        $user['password'] = Hash::make($request->password);
        User::create($user);
    }

    public function edit(UserRequest $request): void {
        $user = $request->except($request->password);
        $user['password'] = Hash::make($request->password);

        User::where('id', $request->id)->update($user);
    }

    public function delete(Request $request): void {
        User::destroy($request->id);
    }
}
