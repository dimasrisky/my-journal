import React from 'react'

export const Loading = () => {
  return (
    <div className='w-screen h-screen flex flex-col gap-3 justify-center items-center'>
        <div className="flex flex-row gap-4">
            <div className="w-8 h-8 rounded-full bg-black animate-bounce [animation-delay:.7s]"></div>
            <div className="w-8 h-8 rounded-full bg-black animate-bounce [animation-delay:.3s]"></div>
            <div className="w-8 h-8 rounded-full bg-black animate-bounce [animation-delay:.7s]"></div>
        </div>
        <h1 className='font-poetsen text-[30px] tracking-[3px]'>Loading . . .</h1>
    </div>
  )
}
