<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactBook extends Model
{
    use HasFactory;

    protected $table = 'contactbooks';

    protected $fillable = [
        'name',
        'phone',
        'city',
        'observations',
        'category_id',
    ];

    public function categories()
    {
        return $this->belongsTo(Category::class,'category_id');
    }
}
