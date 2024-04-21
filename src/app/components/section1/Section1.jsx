"use client"

import React, { useState } from 'react'
import './section1.css';
import Link from 'next/link';

const Section1 = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleButtonClick = () => {
    if (loggedIn) {
        console.log("Trade action executed.");
    } else {
      // setLoggedIn(false);
        console.log("Redirecting to sign up page or showing sign up modal.");
    }
};

// Ternary operator to decide the text based on loggedIn state
const link = loggedIn ? '/home' : '/create';
const buttonText = loggedIn ? "Wallet" : "Sign Up";


  return (
    <section className='seccc1'>
        <header className='px-4 pt-20 md:w-[40vw]'>
            <h1 className='head1 lg:font-bold'>Crypto Trading With A Leading Exchange</h1>
            <p className='para1'>Fast transactions, minimal commission, many different tokens, easy and intuitive functionality.</p>
            <Link href={link}><button onClick={handleButtonClick} className='btn-sec1'>{buttonText}</button></Link>
        </header>
        <div className="hero"></div>
    </section>
  )
}

export default Section1