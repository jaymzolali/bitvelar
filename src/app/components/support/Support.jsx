"use client"

import React, {useState} from 'react'
import './support.css'
import Link from 'next/link'


const Support = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
    <div className='support bg-[#420c8e]' onClick={toggleMenu}>
        <div className="headphone"></div>
        <h1 className='text-white cursor-pointer'>Live Support</h1>
        <div className="green"></div>
    </div>
    {isOpen && (
        <div className='supp'>
          <div className="supp1 flex gap-[6rem]">
            <h1 className="font-bold text-2xl text-[#0000ff]">Customer Support</h1>
            <div className="close-icon cursor-pointer" onClick={closeMenu}>X</div>
          </div>
          <div className='custom-inp'></div>
        </div>
    )}
    </>
  )
}

export default Support