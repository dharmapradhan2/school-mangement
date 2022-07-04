<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Principal extends Model
{
    use HasFactory;
    protected $table = 'principal';
    protected $primaryKey = 'prin_id';
    protected $fillable = [
        'prin_name',
        'prin_qulification',
        'prin_contact', 'gender'
    ];

    public function teachersData()
    {
        // hasMany for one-to-many relationship
        return $this->hasMany(Teacher::class, 'prin_id', 'prin_id');
    }
}
