import React from 'react'
import Footer from '../footer/Footer'

const page = () => {
  return (
    <div className='mt-20'>
      <div className='bg-white rounded-2xl mx-3 p-3 mb-8'>
          <h1 className="font-bold text-3xl text-center mt-9 border-b">Promo code</h1>
              <form action="" className='mx-5'>
                <h1 className='font-bold text-lg'>Type promo code below</h1>
                <label htmlFor="email" className="text-gray-700 font-medium ">Your promo code </label>
                <input type="email" id="text" name="text" placeholder="Enter a promo code..." className="w-full border-2 bg-slate-300 outline-none rounded-3xl h-12 px-4" /><br/>
                <button className='bg-[#420c8e] w-full mt-4 border-2  rounded-3xl h-12 text-white hover:text-[#420c8e] hover:bg-transparent'>Activate a promo code</button>
              </form>
            </div>
            <Footer />
    </div>
  )
}

export default page