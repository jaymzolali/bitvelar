import Link from 'next/link'
import React from 'react'
import './buy.css';
import Footer from '../footer/Footer';

const page = () => {
  return (
    <div className='mt-20'>
      <h1 className="text-center font-bold text-2xl lg:text-3xl">Buy Crypto</h1>
      <div className="buy-space py-4 bg-white rounded-3xl lg:m-20 m-4 px-3">

        <div className="changelly mb-3">
          <div className="chngly-img"></div>
          <div className="chgly-para text-gray-500 text-sm mb-2">Changelly is an ecosystem of products that allows you to exchange, buy, trade, and sell cryptocurrencies and also earn free crypto with our affiliate program.</div>
          <Link href='https://changelly.com/' target='_blank'><div className="chngly-btn w-[10rem] h-[3rem] pt-[10px] pl-[17px] text-white bg-[#420c8e] rounded-3xl hover:text-[#420c8e] hover:bg-transparent border hover:border-[#420c8e]">Go to Changelly</div></Link>
        </div>
        <div className="changelly mb-3">
          <div className="bitpay-img"></div>
          <div className="chgly-para text-gray-500 text-sm mb-2">Buy crypto with a credit card, debit card, Apple Pay or Google Pay. Delivered quickly to any wallet, no hidden fees or third-party custody. Buy online or in the BitPay app.</div>
          <Link href='https://bitpay.com/' target='_blank'><div className="chngly-btn w-[10rem] h-[3rem] pt-[10px] pl-[17px] text-white bg-[#420c8e] rounded-3xl hover:text-[#420c8e] hover:bg-transparent border hover:border-[#420c8e]">Go to Bitpay</div></Link>
        </div>
        <div className="changelly mb-3">
          <div className="ramp-img"></div>
          <div className="chgly-para text-gray-500 text-sm mb-2">Ramp is a global financial technology company building solutions that connect the crypto economy with today’s financial infrastructure.</div>
          <Link href='https://ramp.network/' target='_blank'><div className="chngly-btn w-[10rem] h-[3rem] pt-[10px] pl-[17px] text-white bg-[#420c8e] rounded-3xl hover:text-[#420c8e] hover:bg-transparent border hover:border-[#420c8e]">Go to Ramp</div></Link>
        </div>
        <div className="changelly mb-3">
          <div className="moonpay-img"></div>
          <div className="chgly-para text-gray-500 text-sm mb-2">MoonPay offers a fast and simple way to buy and sell cryptocurrencies. Buy crypto with credit card, bank transfers or Apple Pay today.</div>
          <Link href='https://moonpay.com/' target='_blank'><div className="chngly-btn w-[10rem] h-[3rem] pt-[10px] pl-[17px] text-white bg-[#420c8e] rounded-3xl hover:text-[#420c8e] hover:bg-transparent border hover:border-[#420c8e]">Go to Moonpay</div></Link>
        </div>
        <div className="changelly mb-3">
          <div className="transak-img"></div>
          <div className="chgly-para text-gray-500 text-sm mb-2">Transak is a leading Web3 onboarding infrastructure provider. Its API-driven solutions enable web3 platforms to onboard users to 130+ crypto assets from 150+ countries, abstracting away the complexity of user KYC, risk monitoring & compliance, payment methods and customer support.</div>
          <Link href='https://transak.com/' target='_blank'><div className="chngly-btn w-[10rem] h-[3rem] pt-[10px] pl-[17px] text-white bg-[#420c8e] rounded-3xl hover:text-[#420c8e] hover:bg-transparent border hover:border-[#420c8e]">Go to Transak</div></Link>
        </div>
        <div className="changelly mb-3">
          <div className="simplex-img"></div>
          <div className="chgly-para text-gray-500 text-sm mb-2">Simplex by Nuvei is empowering the crypto industry with a full fiat infrastructure. We process crypto-to-credit card payments with a 100% guarantee – in case of a fraud chargeback, the merchant gets paid by us.</div>
          <Link href='https://simplex.com/' target='_blank'><div className="chngly-btn w-[10rem] h-[3rem] pt-[10px] pl-[17px] text-white bg-[#420c8e] rounded-3xl hover:text-[#420c8e] hover:bg-transparent border hover:border-[#420c8e]">Go to Simplex</div></Link>
        </div>
        <div className="changelly mb-3">
          <div className="mercury-img"></div>
          <div className="chgly-para text-gray-500 text-sm mb-2">A custodial wallet with built-in crypto on-ramp functionality. Designed to manage your crypto just like you do with fiat: buy, sell, hold, and spend a wide range of coins.</div>
          <Link href='https://mercuryo.io/' target='_blank'><div className="chngly-btn w-[10rem] h-[3rem] pt-[10px] pl-[17px] text-white bg-[#420c8e] rounded-3xl hover:text-[#420c8e] hover:bg-transparent border hover:border-[#420c8e]">Go to Mercuryo</div></Link>
        </div>
        <div className="changelly mb-3">
          <div className="coing-img"></div>
          <div className="chgly-para text-gray-500 text-sm mb-2">CoinGate is a Lithuanian-based fintech company founded in 2014. The payment gateway offers cryptocurrency payment processing services for businesses of any sizes.</div>
          <Link href='https://coingate.com/' target='_blank'><div className="chngly-btn w-[10rem] h-[3rem] pt-[10px] pl-[17px] text-white bg-[#420c8e] rounded-3xl hover:text-[#420c8e] hover:bg-transparent border hover:border-[#420c8e]">Go to Coingate</div></Link>
        </div>
        <div className="changelly mb-3">
          <div className="banxa-img"></div>
          <div className="chgly-para text-gray-500 text-sm mb-2">Banxa is the leading global Web3 on and off-ramp solution Crypto Buy. Our mission is to accelerate the world to Web3 and beyond.</div>
          <Link href='https://banxa.com/' target='_blank'><div className="chngly-btn w-[10rem] h-[3rem] pt-[10px] pl-[17px] text-white bg-[#420c8e] rounded-3xl hover:text-[#420c8e] hover:bg-transparent border hover:border-[#420c8e]">Go to Banxa</div></Link>
        </div>
        <div className="changelly mb-3">
          <div className="phemex-img"></div>
          <div className="chgly-para text-gray-500 text-sm mb-2">Phemex operates as a crypto derivatives trading platform. Phemex is a professional and trustworthy global cryptocurrency derivatives exchange. We offer Bitcoin, Ethereum, Ripple, and Chainlink perpetual contracts, with up to 100x leverage.</div>
          <Link href='https://phemex.com/' target='_blank'><div className="chngly-btn w-[10rem] h-[3rem] pt-[10px] pl-[17px] text-white bg-[#420c8e] rounded-3xl hover:text-[#420c8e] hover:bg-transparent border hover:border-[#420c8e]">Go to Phemex</div></Link>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default page