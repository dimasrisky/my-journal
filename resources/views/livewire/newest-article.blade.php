<div class="w-[1247px] mx-auto mt-[116px]">
    <div>
        <h1 class="font-poetsen font-bold text-4xl">Newest Articles.</h1>
        <div class="h-1 w-14 rounded-md bg-black"></div>
    </div>
    <div class="w-full flex justify-between mt-[47px] gap-5">
        {{-- left article --}}
        <div class="w-[685px]">
            <img src="/assets/img/main/article.png" alt="article">
            <div class="h-[122px] flex flex-col justify-between mt-3">
                <div>
                    <h4 class="font-semibold text-primaryBlue text-xs font-inter">Programming</h4>
                    <a href="#" class="font-inter font-bold text-2xl hover:text-blue-500">Lorem ipsum dolor, sit amet consectetur adipisicing Lorem ipsum dolor sit.</a>
                </div>
                <p class="text-xs opacity-60 font-medium">Created By Dimz</p>
            </div>
        </div>

        {{-- right article --}}
        <div class="w-[50%]">
            <h1 class="font-inria text-[#B40000] text-3xl text-center">Top Article</h1>
            <div class="flex flex-col mt-4 gap-[28px]">
                @livewire('top-article', ['image' => 'article.png', 'category' => 'Technology', 'title' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', 'author' => 'Dimz'])
                @livewire('top-article', ['image' => 'article.png', 'category' => 'Technology', 'title' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', 'author' => 'Dimz'])
                @livewire('top-article', ['image' => 'article.png', 'category' => 'Technology', 'title' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', 'author' => 'Dimz'])
                @livewire('top-article', ['image' => 'article.png', 'category' => 'Technology', 'title' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', 'author' => 'Dimz'])
            </div>
        </div>
    </div>

    {{-- More Button --}}
    <a href="#" class="inline-block w-full mt-[35px] bg-transparent border border-[#D9D9D9] text-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-white transition-all duration-300 font-inria text-center py-2 rounded-[5px]">
        More
    </a>
</div>