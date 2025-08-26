import React, { useContext, useEffect } from 'react'
import { assets } from '../assets/assets';
import { Context } from '../context/context';
import '../index.css'

function Main({expand}) {
  const {onSent, resentPrompt, showResult, loading, resultData, setInput, input}= useContext(Context)

  return (
    <div className='bg-[#1B1C1D] w-full p-4'>
      <div className='sticky top-0 flex justify-between'>
        <h1 className='text-xl font-semibold text-[#A2A9B0] cursor-default'>Gemini</h1>
        <div className={`flex items-center gap-4 ${expand ? 'max-sm:hidden' : ''}`}>
          <button type='button' className='max-sm:hidden px-6 py-2 rounded-lg text-white bg-[#4C4E51] hover:bg-[#cccccc5d] cursor-pointer'><div className='flex gap-2 items-center'><img className='w-[1.2rem]' src={assets.geminiLogo} alt="logo" /> Upgrade</div></button>
          <div className={`p-3 h-11 w-11 bg-[#33691E] flex items-center justify-center rounded-full cursor-pointer`}><i className="fa-regular fa-user text-white text-xl"></i></div>
        </div>
      </div>
      <div className={`overflow-y-auto [&::-webkit-scrollbar]:hidden mt-[2rem] h-[65vh] sm:w-[90%] sm:ms-[5%] text-white ${expand ? 'max-sm:hidden' : ''}`}>
        {!showResult ? 
          <>
            <h1 className='text-center text-[#4286F8] text-2xl sm:text-4xl font-semibold my-[3rem]'>Hello, Prince Kumar</h1>
            <h3 className={`text-center text-[#4285f858] text-sm sm:text-2xl tracking-[.3rem] font-semibold ${expand ? 'sm:tracking-[.5rem] lg:tracking-[1rem]' : 'sm:tracking-[1rem]' }`}>How can i help you?</h3>
          </> :
          <div className=''>
            <div className='flex gap-3 w-full justify-end items-center'>
              <p>{resentPrompt}</p>
              <img className='w-[1.3rem] h-[1.3rem]' src={assets.userLogo} alt="user-logo" />
            </div>
            <div className='flex gap-3 w-full justify-start mt-5'>
              <img className='w-[1.3rem] h-[1.3rem]' src={assets.geminiLogo} alt="gemini-logo" /> 
              {loading?
                <div className='flex flex-col w-full gap-[10px]'>
                  <hr id='loader' />
                  <hr id='loader' />
                  <hr id='loader' />
                </div>
                : <p className='text-justify leading-relaxed text-[#A2A9B0]' dangerouslySetInnerHTML={{__html:resultData}}></p>
              }
            </div>
          </div>
        }
      </div>
      <div className={`sticky bottom-0 max-sm:${expand ? 'hidden' : null}`}>
        <div className='sm:w-[70%] p-4 sm:ms-[15%] border-1 rounded-3xl shadow-[0_0_7px_white]'>
          <div className='flex justify-between'>
              <textarea className="px-4 py-2 w-full sm:w-[90%] h-auto min-h-[44px] resize-none outline-0 text-[#A2A9B0] bg-transparent  overflow-x-hidden [&::-webkit-scrollbar]:w-2
              [&::-webkit-scrollbar-track]:bg-[#1B1C1D]
              [&::-webkit-scrollbar-thumb]:bg-[#282A2C]
              [&::-webkit-scrollbar-thumb]:rounded-full"
              placeholder="Ask Gemini" onChange={(e)=>setInput(e.target.value)} value={input} />
              <div className='p-4 cursor-pointer duration-300 text-[#A2A9B0] hover:text-white' onClick={()=>onSent()}><i className="fa-solid fa-paper-plane"></i></div>
          </div>
            <div className='flex justify-between'>
            <div className='flex gap-4'>
              <div className='p-4 cursor-pointer hover:bg-[#262829] rounded-full duration-300'><i className="fa-solid fa-plus text-[#A2A9B0]"></i></div>
              <div className='flex items-center gap-2 cursor-pointer p-4 hover:bg-[#262829] rounded-4xl duration-300'><i className="fa-solid fa-sliders text-[#A2A9B0]"></i><p className='text-[#A2A9B0] text-[1rem] font-semibold'>Tools</p></div>
            </div>
            <div className='p-4 cursor-pointer hover:bg-[#262829] rounded-full duration-300'><i className="fa-solid fa-microphone text-[#A2A9B0]"></i></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;