<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PrincipalController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('getPrincipal', [PrincipalController::class, 'index']);
// Route::get('getPrincipalWithTeachers', [PrincipalController::class,'index']);
// Teacacher actions
Route::get('getTeachers', [TeacherController::class, 'getTeachers']);
Route::post('storeTeacher', [TeacherController::class, 'store']);
Route::get('showTeacher/{id}', [TeacherController::class, 'show']);
Route::get('showPrincipalByTeacher', [TeacherController::class, 'index']);
Route::get('showStudentsByTeacher', [TeacherController::class, 'getDataWithStudent']);
Route::get('showTeacherWithStudents/{id}', [TeacherController::class, 'showTeacherWithStudents']);
Route::put('updateTeacher/{id}', [TeacherController::class, 'update']);
Route::delete('deleteTeacher/{id}', [TeacherController::class, 'destroy']);

// student actions
Route::get('getStudents', [StudentController::class, 'getStudents']);
Route::post('storeStudent', [StudentController::class, 'store']);
Route::get('showStudent/{id}', [StudentController::class, 'show']);
Route::get('showStudentWithTeacher/{id}', [StudentController::class, 'showStudentWithTeacher']);
Route::get('showTeacherByStudent', [StudentController::class, 'index']);
Route::put('updateStudent/{id}', [StudentController::class, 'update']);
Route::delete('deleteStudent/{id}', [StudentController::class, 'destroy']);
