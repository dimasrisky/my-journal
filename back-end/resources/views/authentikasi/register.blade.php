@extends('fragments.initial')
@section('content')
    <div class="w-screen h-screen flex">
        <div class="w-[50%] bg-[url('/assets/img/auth/bg-register.jpg')] bg-cover bg-no-repeat"></div>
        <div class="w-[50%] flex justify-center items-center">
            <form action="" method="post" class="w-[450px] border border-black rounded-lg px-[50px]">
                <h1 class="font-poetsen text-[36px] text-center my-[68px]">MyJournal.</h1>
                <div class="flex flex-col gap-[4px]">
                    <label for="username" class="font-inter font-semibold text-[16px]">Username :</label>
                    <input type="username" id="username" name="username" placeholder="Type your username..." class="border-b border-[#9C9595] font-semibold text-black text-[11px] px-1 py-1 outline-none">
                </div>
                <div class="flex flex-col gap-[4px] mt-[30px]">
                    <label for="email" class="font-inter font-semibold text-[16px]">Email :</label>
                    <input type="email" id="email" name="email" placeholder="Type your username..." class="border-b border-[#9C9595] font-semibold text-black text-[11px] px-1 py-1 outline-none">
                </div>
                <div class="flex flex-col gap-[4px] mt-[30px]">
                    <label for="password" class="font-inter font-semibold text-[16px]">Password :</label>
                    <input type="password" id="password" name="password" placeholder="Type your username..." class="border-b border-[#9C9595] font-semibold text-black text-[11px] px-1 py-1 outline-none">
                </div>
                <h4 class="mt-[57px] my-[30px] text-center font-inter text-[11px]">Already Have Account ? <a href="{{ route('login-form') }}" class="font-semibold">Login</a></h4>
                <div class="text-center flex justify-center gap-[20px] items-center mb-[37px]">
                    <button type="submit" class="px-[60px] py-2 bg-transparent text-black font-inter font-semibold text-[13px] border border-black rounded-md">Register</button>
                    <button type="reset" class="px-[60px] py-2 bg-black text-white font-inter font-semibold text-[13px] rounded-md">Clear</button>
                </div>
            </form>
        </div>
    </div>
@endsection