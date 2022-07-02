<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use Illuminate\Http\Request;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getTeachers()
    {
        $data = Teacher::all();
        if (count($data)>0) {
            return response()->json($data, 200);
        } else {
            return response()->json(['error' => 'No Data is present..'], 404);
        }
    }
    // to get principals data through teacher table foreign key
    public function index()
    {
        $data = Teacher::with('principal')->get();
        return response()->json($data, 200);
    }
     // to get student data through teacher table foreign key
     public function getDataWithStudent()
     {
         $data = Teacher::with('students')->get();
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
            'teach_name' => 'required|string',
            'teach_email' => 'required|email',
            'teach_qualification' => 'required',
            'teach_contact' => 'required',
            'teach_address' => 'required',
            'teach_city' => 'required',
            'prin_id' => 'required',
        ]);
        $search = Teacher::where('teach_name', $request->teach_name)->where('teach_email', $request->teach_email)->get();
        if (count($search) == 0) {
            $Teacher = Teacher::create([
                'teach_name' => $request['teach_name'],
                'teach_email' => $request['teach_email'],
                'teach_qualification' => $request['teach_qualification'],
                'teach_contact' => $request['teach_contact'],
                'teach_address' => $request['teach_address'],
                'teach_city' => $request['teach_city'],
                'prin_id' => $request['prin_id'],
            ]);
            return response()->json(['success' => 'Teacher data is  Sucessfully added.'], 200);
        } else {
            return response()->json(['warning' => 'Teacher data is  already present.'], 206);
        }
        // return response()->json('request');
        // here if during insertion if foreign key 'prin_id' is not avilable in parent model (principal table) then it'll through an error (500 internal server error)
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Teacher  $teacher
     * @return \Illuminate\Http\Response
     */
    public function show(Teacher $teacher, $id)
    {
        $data = $teacher::find($id);
        if ($data) {
            return response()->json($data, 200);
        } else {
            return response()->json(['warning' => 'No Such data found...'], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Teacher  $teacher
     * @return \Illuminate\Http\Response
     */
    public function edit(Teacher $teacher)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Teacher  $teacher
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Teacher $teacher, $id)
    {
        $request->validate([
            'teach_name' => 'required|string',
            'teach_email' => 'required|email',
            'teach_qualification' => 'required',
            'teach_contact' => 'required',
            'teach_address' => 'required',
            'teach_city' => 'required',
        ]);
        $update = $teacher::where('teach_id', $id)->update([
            'teach_name' => $request['teach_name'],
            'teach_email' => $request['teach_email'],
            'teach_qualification' => $request['teach_qualification'],
            'teach_contact' => $request['teach_contact'],
            'teach_address' => $request['teach_address'],
            'teach_city' => $request['teach_city'],
        ]);
        if ($update) {
            return response()->json(['success' => 'Teacher\'s data is updated Sucessfully.'], 200);
        } else {
            return response()->json(['error' => 'Teacher\'s data can\'t update'], 402);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Teacher  $teacher
     * @return \Illuminate\Http\Response
     */
    public function destroy(Teacher $teacher, $id)
    {
        $Destroy = $teacher::find($id);
        if ($Destroy) {
            $Destroy->delete();
            return response()->json(['success' => 'Data successfully deleted.'], 200);
        } else {
            return response()->json(['error' => 'No Data found.'], 404);
        }
    }
}
