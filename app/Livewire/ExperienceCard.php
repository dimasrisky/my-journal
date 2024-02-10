<?php

namespace App\Livewire;

use Livewire\Component;

class ExperienceCard extends Component
{
    public $image;
    public $title;
    public $description;

    public function mount($image, $title, $description){
        $this->image = $image;
        $this->title = $title;
        $this->description = $description;
    }

    public function render()
    {
        return view('livewire.experience-card', [
            'image' => $this->image,
            'title' => $this->title,
            'description' => $this->description,
        ]);
    }
}
