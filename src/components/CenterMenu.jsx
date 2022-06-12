import React from 'react'

function CenterMenu() {
    const listStye = "mr-[1.5rem] hover:cursor-pointer font-bold focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"

  return (
      <div className="menu flex mr-25">
          <ul className='flex w-[100%]'>
              <li className={listStye}>Home</li>
              <li className={listStye}>About</li>
              <li className={listStye}>Services</li>
              <li className={listStye}>Support</li>
          </ul>
      </div>
    )
}

export default CenterMenu