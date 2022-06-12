import React from 'react'

const Support = () => {
  return (
    <section className="text-center py-6  bg-[#2e97a9]" id="support">
    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
      Call to Action
    </h1>
    <div className="w-full mb-4">
      <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
    </div>
    <h3 className="my-4 text-3xl leading-tight">
      Have some issues?
    </h3>
    <a href='/supportbot'>
    <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
      Contact Us !
    </button>
    </a>
  </section>

  )
}

export default Support