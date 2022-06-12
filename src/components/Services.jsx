import React from 'react'
import OCR from '../images/OCR2.png'

function Services(){
  return (

    <div className="bg-[#0677A1]" id="services">
    <div className="max-w-4xl mx-auto justify-center py-12" id="aboutus">
      <p className="text-2xl text-white text-center sm:text-4xl pt-4 font-bold">
        Services
      </p>
      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white text-black shadow-2xl rounded-xl sm:w-52">
          <img src={OCR} color="#2196f3" className="mx-auto text-4xl "/>
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Instant Messages</p>

        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white text-black shadow-2xl rounded-xl sm:w-52">
          <img src={OCR}  color="#2196f3" className="mx-auto text-4xl "/>
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Private Chats</p>

        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white text-black shadow-2xl rounded-xl sm:w-52">
          <img src={OCR}  color="#2196f3" className="mx-auto text-4xl "/>
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center"> Encrypted Chat</p>

        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white text-black shadow-2xl rounded-xl sm:w-52">
          <img src={OCR} color="#2196f3" className="mx-auto text-4xl "/>
          <p className="mt-6 text-base sm:text-xl font-semibold text-center">Sharing Medias</p>

        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white text-black shadow-2xl rounded-xl sm:w-52">
          <img src={OCR} color="#2196f3" className="mx-auto text-4xl "/>
          <p className="mt-6 text-xl sm:text-xl font-semibold text-center">24/7 Support</p>

        </div>

      </div>

    </div>
    </div>
  )
}

export default Services;