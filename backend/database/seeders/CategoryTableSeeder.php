<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            'name' => 'CLIENTE',
            'status' => 'Ativo',
        ]);

        DB::table('categories')->insert([
            'name' => 'FORNECEDOR',
            'status' => 'Ativo',
        ]);

        DB::table('categories')->insert([
            'name' => 'FUNCIONARIO',
            'status' => 'Ativo',
        ]);
    }    
}
