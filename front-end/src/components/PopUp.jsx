import React from 'react'

export function PopUp({ setShowPopUp }) {
  return (
    <div className='min-w-[100%] min-h-screen fixed z-30 bg-black bg-opacity-30  flex justify-center items-center'>
        <div className="group select-none w-[400px] flex flex-col p-4 relative items-center justify-center bg-white border shadow-lg rounded-2xl">
            <div className="text-center p-3 flex-auto justify-center">
                <h2 className="text-xl font-bold py-4 text-black">Are you sure?</h2>
                <p className="font-bold text-sm text-gray-500 px-2">Do you really want to continue? This process cannot be undone</p>
            </div>
            <div className="p-2 mt-2 text-center space-x-1 md:block">
                <button onClick={() => setShowPopUp(false)} className="mb-2 md:mb-0 bg-red-600 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border-2 text-gray-300 rounded-full hover:shadow-lg hover:bg-red-800 transition ease-in duration-300">Cancel</button>
                <button className="bg-blue-400 hover:bg-blue-600 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 text-white rounded-full transition ease-in duration-300">Confirm</button>
            </div>
        </div>
    </div>
  )
}
