import React, { useState } from 'react'

function Sidebar() {
  let [expand, setExpand]= useState(false);
  return (
    <div className="bg-[#282A2C] h-[100vh] flex flex-col">
      <div className="p-4 sticky top-0 bg-[#282A2C]">
        <div className="flex justify-between items-center">
          <i className="fa-solid fa-bars text-[#A8AAAA] py-4 ps-4 pe-8 rounded-xl hover:bg-[#323537] duration-300 cursor-pointer" onClick={()=>setExpand(!expand)}></i>
          {expand && (
            <i className="fa-solid fa-magnifying-glass text-[#A8AAAA] py-4 ps-4 pe-8 rounded-xl hover:bg-[#323537] duration-300 cursor-pointer"></i>
          )}
        </div>        
        <div className=" mt-3 flex items-center gap-4 rounded-2xl p-4 cursor-default">
          <i className="fa-solid fa-pen-to-square text-[#9EA9B0]"></i>
          <p className={`text-[#9EA9B0] ${expand ? '' : 'hidden'}`}>New chat</p>
        </div>
      </div>


      {expand && (
        <div className="mt-3 flex-1 overflow-y-auto px-8 text-white [&::-webkit-scrollbar]:hidden">
          <p className='text-[#9EA9B0]'>Recent</p>
        </div>
      )}


      <div className={`p-4 ${expand ? 'sticky' : 'fixed'} bottom-0 bg-[#282A2C]`}>
        <div className='flex items-center gap-4 rounded-2xl hover:bg-[#323537] p-4 duration-300 cursor-pointer'>
          <i className="fa-solid fa-gear text-[#9EA9B0]"></i>
          <p className={`text-[#9EA9B0] ${expand ? '' : 'hidden'}`}>Setting & Help</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
