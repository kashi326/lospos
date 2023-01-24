<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Customer extends MyModel
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'name',
        'email',
        'phone',
        'gender',
        'address',
        'city',
        'state',
        'zip',
        'country',
        'notes',
        'status',
        'comments',
        'created_by',
        'updated_by',
        'deleted_by',
    ];
}
