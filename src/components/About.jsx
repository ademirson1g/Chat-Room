import React from 'react'
import OCR_white from '../images/testing.png';

const About = () => {
  return (
      
    <section className="bg-[#2e97a9] py-8">
    <div className="container max-w-5xl mx-auto m-8">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
        About OCR
      </h1>
      
      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-5/6 sm:w-1/2 p-6">
          <h3 className="text-3xl text-white font-bold leading-none mb-3">
            Online Chat Room 
          </h3>
          <br/>
          <p className="text-white mb-8">
            Online chat room is a website where users can chat , share files have a save chat and not to worry about stealing data
            <br />
            <br />
            Learn more at :
 
            <a className="underline " href="https://undraw.co/">ademirson.com</a>
          </p>
        </div>
        <div className="w-full sm:w-1/2 p-6">
            <img src={OCR_white} alt="" />
          </div>
        </div>
        </div>
        </section>
  )
}

export default About