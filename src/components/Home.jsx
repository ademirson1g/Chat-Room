import React from 'react'
import OCR_white from "../images/OCR_white.png"


function Home() {

  return (
      <section className="bg-[#9793c6] py-8">
    <div className="container max-w-5xl mx-auto m-8">

      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-5/6 sm:w-1/2 p-6 ">
          <h3 className="text-[3rem]  text-white font-bold leading-none mb-3">
          Imagine a place 
          </h3>
          <span className='text-[14px]'> <b>...where you can </b>
          </span>
          <span className="text-[14px]">
            create chat rooms,gaming groups,community and meetings
            without the needs of downloading anything.
            <br />
            <br />
            <a href='/registration'>
            <button className="border-[2px] rounded-[10px] bg-[#2E97A9] px-[25px] py-[7px] hover:cursor-pointer font-bold focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">Get Started</button>
            </a>
        </span>
        </div>
        <div className="w-full sm:w-1/2 p-6">
            <img src={OCR_white} alt="" />
          </div>
        </div>
        </div>
        </section>

      
       
  )
}

export default Home