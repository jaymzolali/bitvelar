import Link from 'next/link'
import React from 'react'
import Footer from '../footer/Footer'

const page = () => {
  return (
    <div className='mt-28'>
      <div className="bg-white rounded-3xl mx-3 px-10 py-10 mb-11 md:mx-48">
        <div className="text-center font-bold mt-5 text-3xl">Register</div>
        <form action="">
        <label htmlFor="name" className="text-gray-700 font-medium ">First Name</label>
          <input type="name" id="firstname" name="firstname" className="w-full border-2 outline-none rounded-3xl h-12 px-4" /><br/>
        <label htmlFor="name" className="text-gray-700 font-medium ">Last Name</label>
          <input type="name" id="lastname" name="lastname" className="w-full border-2 outline-none rounded-3xl h-12 px-4" /><br/>
        <label htmlFor="email" className="text-gray-700 font-medium ">Email Address</label>
          <input type="email" id="email" name="email" className="w-full border-2 outline-none rounded-3xl h-12 px-4" /><br/>
        <label htmlFor="password" className="text-gray-700 font-medium ">Password</label>
          <input type="password" id="password" name="password" className="w-full border-2 outline-none rounded-3xl h-12 px-4" /><br/>
        <label htmlFor="password" className="text-gray-700 font-medium ">Confirm Password</label>
          <input type="password" id="password" name="password" className="w-full border-2 outline-none rounded-3xl h-12 px-4" /><br/>
          <div className="checkb flex gap-3 my-4">
          <input type="checkbox" className='w-8 h-8'/><small>By signing up i agree that Im 18 years of age or older, to the <Link href='/terms' className='text-[#420c8e]'>Terms of Use,</Link> <Link href='/privacy' className='text-[#420c8e]'>Privacy Policy</Link></small>
          </div>
          <Link href='/'><button className='bg-[#420c8e] w-full mt-4 border-2 rounded-3xl h-12 text-white hover:text-[#420c8e] hover:bg-transparent'>Register</button></Link>
          <div className="text-center"><small>You Have Account? <Link href='/login' className='text-[green]'>Login</Link></small></div>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default page