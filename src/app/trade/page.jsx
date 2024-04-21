'use client';
import Markett from '../components/market/Markett';
import Footer from '../footer/Footer'
import React from 'react'
import HistoryChart from './../components/historychart/HistoryChart';

const Page = () => {
  return (
    <>
    <div className='mt-20'>
      <div className="price grid grid-cols-2">
        <div className="price-box border-2 bg-[white] mx-3 px-3 py-3 rounded-xl">
          <h6 className='text-sm font-bold'>BTC/USDT</h6>
          <p className="text-green-500 font-bold">68620.08</p>
        </div>
        <div className="border-2 bg-[white] mx-3 px-3 py-3 rounded-xl">
          <h6 className=''>24h Change</h6>
          <p className="font-bold">68620.08</p>
        </div>
        <div className="border-2 bg-[white] mx-3 px-3 py-3 rounded-xl">
          <h6 className=''>24 High</h6>
          <p className="font-bold">-2.35%</p>
        </div>
        <div className="border-2 bg-[white] mx-3 px-3 py-3 rounded-xl">
          <h6 className=''>24 Low</h6>
          <p className="font-bold">71769.54</p>
        </div>
        <div className="border-2 bg-[white] mx-3 px-3 py-3 rounded-xl">
          <h6 className=''>24h Volume</h6>
          <p className="font-bold">3367077438.11</p>
        </div>
      </div>
      <HistoryChart/>
      <Markett/>
      <div className="font-bold"></div>
    </div>
    <Footer />
    </>
  )
}

export default Page


