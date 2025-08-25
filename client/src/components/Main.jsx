import React from 'react'
import { assets } from '../assets/assets';

function Main({expand}) {
  return (
    <div className='bg-[#1B1C1D] w-full p-4'>
      <div className='sticky top-0 flex justify-between'>
        <h1 className='text-xl font-semibold text-[#A2A9B0] '>Gemini</h1>
        <div className={`flex items-center gap-2 max-sm:${expand ? 'hidden' : ''}`}>
          <button type='button' className='max-sm:hidden px-6 py-2 rounded-lg text-white bg-[#4C4E51] hover:bg-[#cccccc5d]'><div className='flex gap-2 items-center'><img className='w-[1.2rem]' src={assets.geminiLogo} alt="logo" /> Upgrade</div></button>
          <div className={`p-3 h-11 w-11 bg-[#33691E] flex items-center justify-center rounded-full `}><i class="fa-regular fa-user text-white text-xl"></i></div>
        </div>
      </div>
      <div className='overflow-y-auto [&::-webkit-scrollbar]:hidden mt-[2rem] h-[70vh] sm:w-[90%] sm:ms-[5%] text-white'>
        <h1 className='text-center text-[#4286F8] text-4xl font-semibold'>Hello, Prince</h1>
      </div>
      <div className='sticky bottom-0'>
        <div className='w-[70%] ms-[15%] border-1 rounded-xl border-white'>
          <input type="text" className='px-4 py-2 w-full overflow-y-auto overflow-x-none outline-0 text-[#A2A9B0]' placeholder='Ask Gemini' />
          <div className='flex'></div>
        </div>
      </div>
    </div>
  )
}

export default Main;