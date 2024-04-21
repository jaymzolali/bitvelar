"use client"


import Footer from '../footer/Footer';
import './staking.css';
import { useState } from 'react';


const page = () => {
  const [count, setCount] = useState(3);

  const add = () => {
    setCount(count + 1);
  }
  const sub = () => {
    setCount(count - 1);
  }




  return (
    <div className='mt-20'>
      <div>
        <div className='border bg-[#fcfcfc] p-3 mx-3 rounded-xl'>
          <h1 className='font-bold text-2xl'>Staking</h1>
          <small>Total Earning</small>
          <div className='font-bold'>0 <span className='text-white bg-green-600 rounded-sm px-[5px] py-[2px]'>BTC</span></div>
          <p>$0</p>
        </div>
        <h1 className='font-bold text-xl mx-4 my-2'>Stake</h1>
        <div className="start-plan border bg-[#fcfcfc] p-3 mx-3 rounded-xl">
          <div>
            <div className='flex gap-[14rem]'>
              <h1>Input</h1>
              <p>Balance: 0.00</p>
            </div>
            <div className='flex gap-[16rem]'>
              <h1 className='font-bold'>0.00</h1>
              <select name="" id="">
                <option value="">1INCH</option>
                <option value="">ADA</option>
                <option value="">AVAX</option>
                <option value="">BCH</option>
                <option value="">BNB</option>
                <option value="">BTC</option>
                <option value="">BTCB</option>
                <option value="">BUSD</option>
                <option value="">CAKE</option>
                <option value="">DOGE</option>
                <option value="">ETH</option>
                <option value="">LTC</option>
                <option value="">TRX</option>
                <option value="">USDC</option>
                <option value="">SHIB</option>
                <option value="">USDT</option>
                <option value="">XRP</option>
              </select>
            </div>
          </div>
        </div>
        <div className="start-plan border bg-[#fcfcfc] p-3 mx-3 mt-3 rounded-xl">
          <div className='flex gap-[16.5rem]'>
            <h1 className='font-bold'>Sent</h1>
            <p>Received</p>
          </div>
          <div className='flex gap-[18rem]'>
            <p className='font-bold'>0</p>
            <p className='font-bold'>=0.0000</p>
          </div>
        </div>
        <div className="start-plan border bg-[#fcfcfc] p-3 mx-3 mt-3 rounded-xl">
          <div className="flex mx-11 gap-2">
            <div className='span-img'></div>
            <h1>You can stake from 3 to 28 days.</h1>
          </div>
          <div className='flex gap-[10rem] my-3'>
            <div className='flex gap-3'>
            <span onClick={sub}><button>-</button></span>
            <span><h1 className='font-bold'>{count}</h1></span>
            <span onClick={add}><button>+</button></span>
            <span>Days</span>
            </div>
            <div className="stbtn bg-[#420c8e] text-white px-4 py-1 rounded-2xl">Go stake</div>
          </div>
        </div>
        <h1 className='font-bold text-xl my-3 mx-3'>Locked Staking</h1>
        <h2 className='font-bold text-center mb-7'>No Stakes</h2>
      </div>
      <Footer />
    </div>
  )
}

export default page