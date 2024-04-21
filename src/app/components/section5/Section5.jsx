import React from 'react'
import './section5.css'
import Link from 'next/link';

const Section5 = () => {
  return (
    <div className='sec5 m-5 p-5 '>
      <h1 className='font-bold text-2xl '>Our Commitment to Compliance and Your Protection</h1>
      <div className="trpp">
      <div className='triple mt-5 bg-white p-3 rounded-lg mb-3'>
        <div className="trple-top flex mb-3">
          <div className="triple-img"></div>
          <h2 className='font-bold text-lg grid place-content-center ml-3'>Triple-Layer Asset Protection</h2>
        </div>
        <p className='text-[gray]'>User funds are securely stored offline in cold wallets. <br />
          Experience Triple Fund Protection with our cold wallet storage, ensuring strong security for user assets through comprehensive protection, for a safe and reliable experience.</p>
      </div>

      <div className='triple mt-5 bg-white p-3 rounded-lg mb-3'>
        <div className="trple-top flex mb-3">
          <div className="privacy-img"></div>
          <h2 className='font-bold text-lg grid place-content-center ml-3'>Privacy Protection</h2>
        </div>
        <p className='text-[gray]'>We integrate a privacy-first approach in all our products and services. <br />
        We are transparent about the data we gather from you, clearly stating how we utilize and share it.</p>
      </div>

      <div className='triple mt-5 bg-white p-3 rounded-lg mb-3'>
        <div className="trple-top flex mb-3">
          <div className="advanced-img"></div>
          <h2 className='font-bold text-lg grid place-content-center ml-3'>Advanced Data Protection</h2>
        </div>
        <p className='text-[gray]'>Data is encrypted during storage and while in transit. Strict authorization controls are in place to ensure that only you can access your personal and private information.</p>
      </div>

      <div className='triple mt-5 bg-white p-3 rounded-lg mb-3'>
        <div className="trple-top flex mb-3">
          <div className="real-img"></div>
          <h2 className='font-bold text-lg grid place-content-center ml-3'>Real-Time Monitoring</h2>
        </div>
        <p className='text-[gray]'>bitvevo risk controls actively monitor and analyze user behavior in real-time. Upon detecting suspicious activity, withdrawals undergo enhanced authentication measures for added security.</p>
      </div>

      <div className='triple mt-5 bg-white p-3 rounded-lg mb-3'>
        <div className="trple-top flex mb-3">
          <div className="security-img"></div>
          <h2 className='font-bold text-lg grid place-content-center ml-3'>Security by Design</h2>
        </div>
        <p className='text-[gray]'>Our system prioritizes security, featuring a secure development life cycle, thorough security testing, and continuous bug bounty programs.</p>
      </div>

      <div className="triple-footer md:mt-9 lg:mt-10">
        <h1 className="font-bold text-lg">Your Trusted Crypto Exchange</h1>
        <Link href="/home">
          <div className="flex bg-[#420c8e] px-3 py-3 arr shadow-lg mt-3 w-[6rem]">
            <h1 className="grid place-content-center text-white">Wallet</h1>
            <div className="tri-footer-arrow grid place-content-center"></div>
          </div>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Section5