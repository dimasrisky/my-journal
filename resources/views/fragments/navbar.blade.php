<nav class="w-[90%] mx-auto flex justify-between items-center">
    <h1 class="font-poetsen text-md text-white">MyJournal.</h1>
    <div class="flex items-center gap-4 text-white text-[10px] font-thin font-inter">
        <a href="{{ route('home') }}">Home</a>
        <span class="w-[0.5px] bg-white h-4 bg-opacity-75"></span>
        <a href="{{ route('article') }}">Article</a>
    </div>
    <div class="flex items-center gap-2">
        <a href="{{ route('login-form') }}" class="px-12 py-2 bg-transparent text-white border border-white rounded-md text-[10px] hover:bg-white hover:text-black transition-all duration-300">Sign In</a>
        <a href="{{ route('register-form') }}" class="px-12 py-2 bg-white text-black rounded-md text-[10px]">Register</a>
    </div>
</nav>