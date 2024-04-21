import React from 'react'
import './section7.css'
// import Link from 'next/Link'
import Link from 'next/link';

const Section7 = () => {
  return (
    <div className=' section7 mt-5 m-3 p-3'>
      <div className="names m-3 bg-white rounded-2xl p-3">
        <h1 className="font-bold">“Name” Card</h1>
        <div className="p-name flex">
          <p className="text-[gray]">Seamlessly convert and pay with crypto worldwide</p>
          <div className="p-img1"></div>
        </div>
        <Link href='/'><div className="p-arrow"></div></Link>
      </div>

      <div className="names m-3 bg-white rounded-2xl p-3">
        <h1 className="font-bold">Unified Trading Account</h1>
        <div className="p-name flex">
          <p className="text-[gray]">Trade Spot, Derivatives and Options from one account</p>
          <div className="p-img2"></div>
        </div>
        <Link href='/'><div className="p-arrow"></div></Link>
      </div>

      <div className="names m-3 bg-white rounded-2xl p-3">
        <h1 className="font-bold">Bybit Web3</h1>
        <div className="p-name flex">
          <p className="text-[gray]">Next-level reliability, innovation, and opportunities in Web3.</p>
          <div className="p-img3"></div>
        </div>
        <Link href='/'><div className="p-arrow"></div></Link>
      </div>

      <div className="join-gift text-center">
        <h1 className='font-bold text-xl'>Join us</h1>
        <Link href='/home'><div className="gift text-white py-2 mx-20"><h1>Gifts for registration</h1><div className="gift-arrow"></div></div></Link>
      </div>
    </div>
  )
}

export default Section7