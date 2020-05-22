<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Board extends Model
{
        protected $table = 'boards';

        protected $fillable = [
          'name',
          'description',
          'category',
          'owner',

        ];

        protected function pins() {
            return $this->hasMany(Pin::class);
        }

        protected function owner() {
            return $this->hasOne(User::class);
        }
}
