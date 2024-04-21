import React from 'react'
import './footer.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-white pl-5 pt-4 border'>
      <div className='fft'>
      <div className="logo-footer">
        <Link href="/"><div className="footer-img"></div></Link>
      </div>
      <div className="le-serv grid grid-cols-2">
        <div className="legal">
          <h2 className='text-[#420c8e] font-extrabold text-lg'>Legal</h2>
          <Link href="/privacy" className='text-[grey]'>Privacy Policy</Link> <br />
          <Link href="/terms" className='text-[gray]'>Terms of Use</Link> <br />
          <Link href="/" className='text-[gray]'>Security</Link> <br />
          <Link href="/" className='text-[gray]'>Risk Warning</Link> <br />
        </div>
        <div className="service">
          <h2 className='text-[#420c8e] font-extrabold text-lg'>Service</h2>
          <Link href="/fees" className='text-[gray]'>Fees</Link> <br />
          <Link href="/" className='text-[gray]'>Affiliates</Link>
        </div>
        <div className="company">
          <h2 className='text-[#420c8e] font-extrabold text-lg'>Company</h2>
          <Link href="/about" className='text-[gray]'>About Us</Link>
        </div>
        <div className="help">
          <h2 className='text-[#420c8e] font-extrabold text-lg'>Help</h2>
          <Link href="/" className='text-[gray]'>FAQ</Link></div>
      </div>
      </div>
      <hr />
      {/* <div className="socials_ grid grid-cols-4 mx-9 mt-3">
        <Link href='/'><div className="fb"></div></Link>
        <Link href='/'><div className="ig"></div></Link>
        <Link href='/'><div className="tel"></div></Link>
        <Link href='/'><div className="lin"></div></Link>
      </div> */}
      <small className="place-content-center grid mt-5 mb-12">Copyright &copy; 2024 bitvevo. All rights reserved</small>
    </div>
  )
}

export default Footer