import React from 'react'
import OCR_white from "../images/OCR_white.png"
import CenterMenu from './CenterMenu'

const Header = () => {
    const buttonStyle = 'border-[2px] rounded-[10px] border-[#2e97a9] px-[25px] py-[7px]'
    
  return (

    <>
    <div className="header bg-[#9793c6] flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]">
        <a href='/'>
        <img src={OCR_white} alt="" className='logo w-[42px] h-[42px]'/>
        </a>
        {/* <div className="buttons flex">
            <a href='/login'>
            <button className={`mr-[25px] hover:bg-[#2e97a9] ` + buttonStyle}>Login</button>
            </a>
            <a href='/registration'>
            <button className={buttonStyle+` bg-[#2e97a9]`}>Sign Up</button>
            </a> */}
                    <CenterMenu/> 

        {/* </div> */}
        
    </div>
    </>
    )
}


export default Header