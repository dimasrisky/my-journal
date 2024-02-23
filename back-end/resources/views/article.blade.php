@extends('fragments.initial')
@section('content')
{{-- Headline --}}
<div class="w-screen h-screen bg-[url('/assets/img/articles/bg-article.png')] bg-cover bg-center bg-no-repeat py-5 relative">
    @include('fragments.navbar')
    <div class="w-[90%] h-[90%] mx-auto flex flex-col justify-center items-center">
        <div>
            <h1 class="font-poetsen text-white text-[64px] text-center">Explore Every Knowledge In</h1>
            <h1 class="font-poetsen text-white text-[64px] text-center">The World</h1>
        </div>
        <form action="" method="get" class="w-[532px] bg-white rounded-xl flex justify-between items-center py-4 px-6 mt-[44px]">
            <div class="flex gap-4 items-center w-full">
                <img src="/assets/icons/search.svg" alt="search" class="w-[2rem] hover:scale-110 hover:rotate-12 transition-all duration-200">
                <input type="text" name="search" placeholder="Type Something..." class="outline-none w-full">
            </div>
            <button type="submit">
                <img src="/assets/icons/arrow-right.svg" alt="submit" class="w-[2rem]">
            </button>
        </form>
    </div>
</div>


{{-- Popular Topic --}}
<div class="max-w-[90vw] mx-auto mt-[74px]">
    <div class="flex justify-between items-center">
        <h1 class="font-poetsen text-[32px]">Popular Topic.</h1>
        <div class="flex gap-4 items-center">
            <button class="p-2 bg-[#D9D9D9] rounded-full hover:scale-125 transition-all duration-300" type="button" id="prev-button-article">
                <img src="/assets/icons/arrow-right-black.svg" alt="arrow-left" class="rotate-180 w-[1rem]">
            </button>
            <button class="p-2 bg-[#D9D9D9] rounded-full hover:scale-125 transition-all duration-300" type="button" id="next-button-article">
                <img src="/assets/icons/arrow-right-black.svg" alt="arrow-right" class="w-[1rem]">
            </button>
        </div>
    </div>
    {{-- wrapper card --}}
    <div class="min-w-[100vw] mx-auto flex gap-5 mt-[29px] overflow-x-scroll scroll-smooth" id="wrapper-popular-article" style="scrollbar-width: none">
        @for ($i = 0; $i < 10; $i++)
        @livewire('popular-article', key($i))
        @endfor
    </div>
</div>

{{-- Article Section --}}
<div class="max-w-[90vw] mx-auto mt-[74px]">
    <div class="flex justify-between items-center">
        <h1 class="font-poetsen text-[32px]">Recomended For You.</h1>
        <div class="flex gap-4 items-center">
            <button class="p-2 bg-[#D9D9D9] rounded-full hover:scale-125 transition-all duration-300" type="button" id="prev-button-category">
                <img src="/assets/icons/arrow-right-black.svg" alt="arrow-left" class="rotate-180 w-[1rem]">
            </button>
            <button class="p-2 bg-[#D9D9D9] rounded-full hover:scale-125 transition-all duration-300" type="button" id="next-button-category">
                <img src="/assets/icons/arrow-right-black.svg" alt="arrow-right" class="w-[1rem]">
            </button>
        </div>
    </div>

    {{-- wrapper category card --}}
    <div class="min-w-[100vw] mx-auto flex gap-5 mt-[29px] overflow-x-scroll scroll-smooth" id="wrapper-popular-category" style="scrollbar-width: none">
        @for($i = 0; $i < 20; $i++)
        <a href="#" class="px-5 py-3 text-xs font-inter font-semibold bg-[#D9D9D9] hover:bg-slate-300 transition-all rounded-[25px]">Category</a>
        @endfor
    </div>

    {{-- Article wrapper --}}
    <div class="flex flex-col gap-4">
    {{-- article  --}}
    @livewire('article-component')
    {{-- article  --}}
    @livewire('article-component')
    {{-- article  --}}
    @livewire('article-component')
    {{-- article  --}}
    @livewire('article-component')
    {{-- article  --}}
    @livewire('article-component')
    </div>

    <div class="text-center mt-6">
        <h1>Pagination</h1>
    </div>
</div>

@include('fragments.footer')
@endsection