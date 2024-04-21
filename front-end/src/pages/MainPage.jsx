import React from 'react'
import { Navbar, CardExperience, NewestArticle, Footer } from '../components/Components'
import { Link } from 'react-router-dom'

export const MainPage = () => {
  return (
    <>
    {/* Headline */}
    <div className="w-screen h-screen bg-[url('./src/assets/img/main/bg-main.jpg')] bg-center bg-cover bg-no-repeat py-5">
        <Navbar theme={'dark'} />
        <div className="w-[90%] h-[90vh] mx-auto flex flex-col justify-center">
            <h1 className="font-poetsen text-white text-[80px] leading-[6rem]">Practicing Your <span className="text-[70px] block">Writing Skills</span></h1>
            <p className="font-inter text-lg text-white max-w-[580px] mt-[48px]">Your Source for Fresh Inspiration and Up-to-Date Knowledge! Explore vibrant stories, practical guides, and creative ideas that will immerse every aspect of your life.</p>
        </div>
        <a href="#about">
            <img src={'./src/assets/icons/down-button.svg'} alt="down-button" className="absolute bottom-[3rem] left-[50%] w-[4rem] animate-bounce" />
        </a>
    </div>

    {/* About */}
    <div className="w-screen h-[70vh] flex justify-center items-center" id="about">
        <div className="flex gap-[5rem]">
            <div className="relative">
                <img src={'./src/assets/img/main/about.png'} alt="about" className="absolute z-10 left-5 top-5" />
                <img src={'./src/assets/img/main/bg-about.png'} alt="bg-about" className="" />
            </div>
            <div className="flex flex-col justify-between">
                <div>
                    <h1 className="font-poetsen text-3xl text-[#404040]">Every Letters Carries Value</h1>
                    <div className="h-1 w-14 rounded-md bg-[#404040]"></div>
                    <p className="font-inter max-w-[490px] text-lg mt-4">With a passion for words and design aesthetics, we strive to deliver content that is not only informative but also captivates the eyes and hearts of our readers</p>
                </div>
                <Link to={'login'} className="w-[180px] py-3 bg-black text-white text-xs text-center rounded-[5px]">Get Started</Link>
            </div>
        </div>
    </div>

    {/* Experience Section */}
    <div className="w-[90%] flex flex-col gap-[49px] justify-center items-center mx-auto">
        <div className="flex items-center gap-8 justify-center">
            <div className="w-7 h-[0.8px] bg-black"></div>
            <h1 className="font-inria text-3xl font-bold">Share Your Knowledge With Everyone</h1>
            <div className="w-7 h-[0.8px] bg-black"></div>
        </div>
        <div className="flex flex-wrap gap-10 justify-center">
            {/* Card */}
            <CardExperience image={'exp1.png'} title={'Improving Your Skills'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Duis aute irure dolor in '}/>
            {/* Card */}
            <CardExperience image={'exp2.png'} title={'Large Scale Community'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Duis aute irure dolor in '}/>
            {/* Card */}
            <CardExperience image={'exp3.png'} title={'New Creations Everyday'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Duis aute irure dolor in '}/>
        </div>
    </div>

    {/* Newest Article */}
    <NewestArticle />
    <Footer />
    </>
  )
}
