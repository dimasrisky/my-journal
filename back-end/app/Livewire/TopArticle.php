<?php

namespace App\Livewire;

use Livewire\Component;

class TopArticle extends Component{

    public $image;
    public $category;
    public $title;
    public $author;

    public function render()
    {
        return view('livewire.top-article', [
            'image' => $this->image,
            'category' => $this->category,
            'title' => $this->title,
            'author' => $this->author  
        ]);
    }
}
