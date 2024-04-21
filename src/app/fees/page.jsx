import React from 'react'
import './fees.css'
import Footer from '../footer/Footer'



const page = () => {
  return (
    <div className='mt-20'>
        <h1 className='font-bold text-2xl text-center mb-3'>Fees</h1>
        <div className='fees_plan mx-3 p-5'>
            <div>
                <div className='fees-para'>
                <p className="text-gray-600">Every time a customer makes a transaction (buying/selling cryptocurrency) at bitvevo exchange, they are charged a commission depending on the turnover for the month. Its diversification depends on the type of order placement on the exchange:</p>
                <p>MAKER: commission for setting a new buy/sell offer to the offer table;
                TAKER: comission for fulfilling an existing offer from another user.</p>
                <p>Maker and Taker fees on bitvevo are the same: 0.20% for regular users and 0.14% for Premium users.</p>
                <p>There is a Commission for withdrawal, as well as a minimum amount of withdrawal of tokens/coins. The maximum amount cannot exceed the amount that is available on your account.</p>
                <p>This data may change without notifying users, so pay attention to the automatic calculation of the Commission when withdrawing. Also, for the safety of your funds, we strongly recommend that you pass KYC verification, which will allow us to better protect you from adverse situations.</p>
                </div>
                <div className='fees-img'></div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default page