<?php

use App\Http\Controllers\ProfileController;
use App\Mail\NotifMail;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('/projects/doctor');
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

Route::get('/projects/{project}', function ($project) {
    $projects = ['doctor', 'goball'];
    if (in_array($project, $projects)) {
        return inertia("Projects/" . ucfirst($project));
    };

    return redirect('/');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';