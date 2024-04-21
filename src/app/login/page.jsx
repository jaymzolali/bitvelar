import React from 'react'
import Footer from '../footer/Footer'
import Link from 'next/link'
import './login.css';



const page = () => {
  return (
    <div className='mt-24'>
      <div className="login mx-3 bg-white rounded-2xl py-3 px-5 mb-9">
        <h6 className='text-center text-sm'>Already Have An Account? <span className='text-[green]'><Link href='/create'> Register</Link></span></h6>
        <h1 className="font-bold text-3xl text-center mt-9">Login</h1>
        <form action="" className='mx-5'>
          <label htmlFor="email" className="text-gray-700 font-medium ">Email address </label>
          <input type="email" id="email" name="email" placeholder="Your Email" className="w-full border-2 bg-slate-300 outline-none rounded-3xl h-12 px-4" /><br/>
          <label htmlFor="email" className=" text-gray-700 font-medium">Password </label>
          <input type="password" id='password' name='password' placeholder='Your Password' className='w-full border-2 bg-slate-300 outline-none rounded-3xl h-12 px-4' />
          <br/>
          <Link href='/'><button className='bg-[#420c8e] w-full mt-4 border-2 rounded-3xl h-12 text-white hover:text-[#420c8e] hover:bg-transparent'>Login</button></Link>
        </form>
        <Link href='/forget'>Forgot Your Password?</Link>
      </div>
      <Footer/>
    </div>
  )
}

export default page