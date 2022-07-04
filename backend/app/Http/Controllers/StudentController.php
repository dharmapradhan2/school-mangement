<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getStudents()
    {
        $data = Student::all();
        if (count($data) > 0) {
            return response()->json($data, 200);
        } else {
            return response()->json(['error' => 'No Data is here..'], 404);
        }
    }

    // show all students with thier teachers
    public function index()
    {
        $data = Student::with('teachers')->get();
        return response()->json($data, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'stud_name' => 'required|string',
            'stud_email' => 'required|email',
            'stud_class' => 'required',
            'stud_ph_no' => 'required',
            'stud_father_name' => 'required',
            'stud_mother_name' => 'required',
            'stud_address' => 'required',
            'prin_id' => 'required',
            'gender' => 'required',
            'teach_id' => 'array',
        ]);
        $search = Student::where('stud_name', $request->stud_name)->where('stud_email', $request->stud_email)->get();
        if (count($search) == 0) {
            $Student = Student::create([
                'stud_name' => $request['stud_name'],
                'stud_email' => $request['stud_email'],
                'stud_class' => $request['stud_class'],
                'stud_ph_no' => $request['stud_ph_no'],
                'father_name' => $request['stud_father_name'],
                'mother_name' => $request['stud_mother_name'],
                'address' => $request['stud_address'],
                'prin_id' => $request['prin_id'],
                'gender' => $request['gender'],
            ]);
            $teach_id = $request->teach_id;
            $Student->teachers()->attach($teach_id);
            return response()->json(['success' => 'Student data is  Sucessfully added.'], 200);
        } else {
            return response()->json(['warning' => 'Student data is  already present.'], 206);
        }
        // return response()->json($teachers_id);
        // here if during insertion if foreign key 'prin_id' is not avilable in parent model (principal table) then it'll through an error (500 internal server error)
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Student  $Student
     * @return \Illuminate\Http\Response
     */

    // show single student data
    public function show(Student $Student, $id)
    {
        $data = $Student::find($id);
        if ($data) {
            return response()->json($data, 200);
        } else {
            return response()->json(['warning' => 'No Such data found...'], 404);
        }
    }
    // show single student data with teachers
    public function showStudentWithTeacher(Student $Student, $id)
    {
        $data = $Student::with('teachers')->find($id);
        if ($data) {
            return response()->json($data, 200);
        } else {
            return response()->json(['warning' => 'No Such data found...'], 404);
        }
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Student  $Student
     * @return \Illuminate\Http\Response
     */
    public function edit(Student $Student)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Student  $Student
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Student $Student, $id)
    {
        $request->validate([
            'stud_name' => 'required|string',
            'stud_email' => 'required|email',
            'stud_class' => 'required',
            'stud_ph_no' => 'required',
            'father_name' => 'required',
            'mother_name' => 'required',
            'address' => 'required',
            'prin_id' => 'required',
            'gender' => 'required',
            'teach_id' => 'required|array',
        ]);
        $find=$Student::find($id);
        $update = $Student::where('stud_id', $id)->update([
            'stud_name' => $request['stud_name'],
            'stud_email' => $request['stud_email'],
            'stud_class' => $request['stud_class'],
            'stud_ph_no' => $request['stud_ph_no'],
            'father_name' => $request['father_name'],
            'mother_name' => $request['mother_name'],
            'address' => $request['address'],
            'gender' => $request['gender'],
            'prin_id' => $request['prin_id'],
        ]);
        $teach_id = $request->teach_id;
        // $find->teachers()->detach();
        $find->teachers()->sync($teach_id);
        if ($update) {
            return response()->json(['success' => 'Student\'s data is updated Sucessfully.'], 200);
        } else {
            return response()->json(['error' => 'Student\'s data can\'t update'], 402);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Student  $Student
     * @return \Illuminate\Http\Response
     */
    public function destroy(Student $Student, $id)
    {
        $Destroy = $Student::find($id);
        if ($Destroy) {
            $Destroy->teachers()->detach();
            $Destroy->delete();
            return response()->json(['success' => 'Data successfully deleted.'], 200);
        } else {
            return response()->json(['error' => 'No Data found.'], 404);
        }
    }
}
