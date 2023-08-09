<?php

use App\Mail\NotifMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::any('/webhook-callback', function (Request $request) {
    $paramsHtml = '<ul>';

        foreach ($request->all() as $key => $value) {
            $paramsHtml .= '<li><strong>' . htmlspecialchars($key) . ':</strong> ' . htmlspecialchars($value) . '</li>';
        }

        $paramsHtml .= '</ul>';

    Mail::to('favescsskr@gmail.com')->send(new NotifMail($paramsHtml));

    return response()->json(['message' => 'Email sent successfully']);
});
