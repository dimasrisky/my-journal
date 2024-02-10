 <div class="w-[504px] flex justify-center gap-[20px]">
    <img src="/assets/img/main/{{ $image }}" class="w-[140px] rounded-md">
    <div class="flex flex-col justify-between">
        <div>
            <h4 class="font-semibold text-primaryBlue text-xs font-inter">{{ $category }}</h4>
            <a href="#" class="font-inter font-bold text-base hover:text-blue-500">{{ $title }}</a>
        </div>
        <p class="text-xs opacity-60 font-medium">Created By {{ $author }}</p>
    </div>
</div>