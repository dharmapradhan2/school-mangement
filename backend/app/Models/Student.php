<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $table = 'students';
    protected $primaryKey = 'stud_id';
    protected $fillable = [
        'stud_name',
        'stud_email',
        'stud_class',
        'stud_ph_no',
        'father_name',
        'mother_name',
        'prin_id',
        'address'
    ];
    public function teachers()
    {
        // belongsTo for one-to-many relationship on the child model
        return $this->belongsToMany(Teacher::class, 'students_teachers', 'stud_id', 'teach_id');
    }
    public function principal()
    {
        // belongsTo for one-to-many relationship on the child model
        return $this->belongsTo(Principal::class, 'prin_id');
    }
}
