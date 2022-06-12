import React, { useRef } from 'react';
import {Link} from 'react-scroll'

function CenterMenu() {
    const listStye = "mr-[1.5rem] hover:cursor-pointer font-bold focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out  "
    const myRef = useRef(null)
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
    const executeScroll = () => scrollToRef(myRef)

  return (
      <div className="menu flex mr-24  " ref={myRef}>
          <ul className='flex w-[100%] '>
              <li className={listStye}><Link to='' spy={true} smooth={true}  onClick={executeScroll}>Home</Link></li>
              <li className={listStye}><Link to='about' spy={true} smooth={true}  onClick={executeScroll}>About</Link></li>
              <li className={listStye}><Link to='services' spy={true} smooth={true}  onClick={executeScroll}>Services</Link></li>
              <li className={listStye}><Link to='support' spy={true} smooth={true}  onClick={executeScroll}>Support</Link></li>
          </ul>
      </div>
    )
}

export default CenterMenu