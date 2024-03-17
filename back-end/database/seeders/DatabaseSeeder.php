<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\User;
use App\Models\Article;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $categories = [
            'All',
            'Teknologi',
            'Kesehatan',
            'Olahraga',
            'Bisnis',
            'Pendidikan',
            'Wisata',
            'Mode',
            'Hiburan',
            'Sains',
            'Seni',
            'Makanan',
            'Lifestyle',
            'Politik',
            'Travel',
            'Musik',
            'Film',
            'Keuangan',
            'Otomotif',
            'Keluarga',
            'Karier'
        ];

        foreach($categories as $category){
            Category::create([
                'nama' => $category
            ]);
        }

        User::factory(10)->create();
        Article::factory(70)->create();
    }
}
