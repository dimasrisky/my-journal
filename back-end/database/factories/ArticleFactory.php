<?php

namespace Database\Factories;

use App\Models\Article;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Article::class;

    public function definition(): array
    {
        return [
            'user_id' => rand(1, 10),
            'title' => $this->faker->sentence(14),
            'description' => $this->faker->paragraph(10),
            'category_id' => rand(1, 20),
            'image' => 'img-article.jpg'
        ];
    }
}