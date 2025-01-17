<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'email' => 'admin_default@gmail.com',
            'name' => 'Adminstrator',
            'role' => 'Admin',
            'status' => 'Active',
            'password' => bcrypt('stmarkph'),
        ]);
    }
}
