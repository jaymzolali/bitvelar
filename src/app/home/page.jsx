"use client"
import React, { useState } from 'react'
import './home.css'
import Footer from '../footer/Footer'
import Link from 'next/link'
import AddressShortener from './AddressShortener'

const page = () => {
  const [deposit, setDeposit] = useState(false);
  const [withdraw, setWithdraw] = useState(false);
  const [textToCopy, setTextToCopy] = useState('jhgfddfgt4567yujgvfdtytuyg5645erxdgchvhjkgdur67e5edtyd6567e56cvhj');
  const [copied, setCopied] = useState(false);


  const toggleDeposit = () => {
    setDeposit(!deposit);
  };

  const closeDeposit = () => {
    toggleDeposit(false);
  }

  const toggleWithdraw = () => {
    setWithdraw(!withdraw);
  };
  const closeWithdraw = () => {
    toggleWithdraw(false);
  };

  const copyClip = () => {
    navigator.clipboard.writeText(textToCopy)
    .then(() => {
      setCopied(true);
    })
    .catch((error) => {
      console.error('Error copying text: ', error);
    });
  };



  return (
    <>
    <div className='cont sm:hidden lg:grid'>
    <div className="container-left sm:hidden lg:flex mt-15 pt-[8rem]">
      <div className="sider">
      <div className="overview flex gap-4">
        <div className="overview-img"></div>
        <Link href='/home'><h1>Overview</h1></Link>
      </div>
      {/* <div className="overview flex gap-4">
        <div className="convert-img"></div>
        <Link href='/convert'><h1>Convert</h1></Link>
      </div> */}
      <div className="overview flex gap-4">
        <div className="staking-img"></div>
        <Link href='/staking'><h1>Staking</h1></Link>
      </div>
      <div className="overview flex gap-4">
        <div className="transactions-img"></div>
        <Link href='/transactions'><h1>Transactions</h1></Link>
      </div>
      <div className="overview flex gap-4">
        <div className="transfer-img"></div>
        <Link href='/home'><h1>Transfer</h1></Link>
      </div>
      <div className="overview flex gap-4">
        <div className="reward-img"></div>
        <Link href='/home'><h1>Voucher</h1></Link>
      </div>
      </div>
    </div>
      <div className='my-20 mx-3'>
      <div className="bg-slate-50 rounded-2xl border px-3 py-4">
      <div className="overview grid grid-cols-2 gap-2 ">
        <div className="over1">
          <div className="over1-head font-bold text-2xl">Overview</div>
          <div className="over1-para">Total Balance</div>
        </div>
        <div className="over1-search grid grid-cols-2 gap-2 border rounded-2xl bg-white px-3">
          <input 
          type="text" 
          placeholder="Search coin"
          className='outline-none w-[100%] my-3'
           />
          <div className="os-icon"></div>
        </div>
      </div>
      <div className="coinlist">
        <h1 className='font-bold my-3 text-2xl'>0 <span className="btc text-white font-bold ml-3 bg-[#35bc35] text-xl p-1 rounded-lg">BTC</span></h1>
        <h1>$0.00</h1>
      </div>
      </div>

      <div className="avail-bal">
        <h1 className='font-bold text-xl mt-2 mb-2'>Account Balances</h1>
        <div className="ab- bg-slate-50 rounded-2xl border px-3 py-4">
          <div className="ab-1 grid grid-cols-2 gap-[60%] mb-3">
            <div className="ab1-wallet grid grid-cols-2">
              <div className="ab1-wallet-img"></div>
              <p className="font-bold">Spot</p>
            </div>
            <div>
              <h1 className="wall-btc font-bold text-xl">0 BTC</h1>
              <p className='text-lg'>$0.00</p>
            </div>
          </div> 
          <hr />
          <div className="ab-2 grid grid-cols-2 gap[20%] my-4">
            <div className="ab-dep border-2 text-center py-3 hover:bg-purple-950 hover:text-white w-[40vw] border-purple-900 rounded-3xl bg-white cursor-pointer text-purple-900" onClick={toggleDeposit}>Deposit</div>
            <div className="ab-witdrw border-2 text-center py-3 hover:bg-purple-950 hover:text-white w-[40vw border-purple-900 rounded-3xl bg-white cursor-pointer text-purple-900" onClick={toggleWithdraw}>Withdraw</div>
          </div>
          <div>
            {
              deposit && (
                <div className='deppo'>
                  <div className="depp1">
                    <div className="cursor-pointer" onClick={closeDeposit}>X</div>
                    <h1 className="text-center text-2xl font-bold">Deposit BTC</h1>
                    <p className="text-grey text-center">on BTC</p>
                    <div className=' my-3'>
                      <div className="wittz-img"></div>
                      <p className='text-center'>Only send Btc to this address.</p>
                      <p className='text-[red] text-center'>Minimal deposit amount: 0.005 BTC</p>
                    </div>
                    <div onClick={copyClip} className='my-3 border rounded-2xl px-3'>sdgWTERDYS45YSRehgdtERS45YRTXwesrfhxd45dstfhxdREZTHXRYETerzdfxhgfsrtzrERXFDRT</div>
                    <Link href='/buy'><button className='bg-[#420c8e] w-full mt-4 border-2  rounded-3xl h-12 text-white hover:text-[#420c8e] hover:bg-transparent'>Buy btc fiat credit/debit card</button></Link>
                  </div>
                </div>
              )
            }
          </div>
          <div>
            {
              withdraw && (
                <div className="wittd">
                  <div className="wittd2">
                    <div className="cursor-pointer" onClick={closeWithdraw}>X</div>
                    <h1 className="font-bold text-center text-xl">Withdraw BTC</h1>
                    <p>BTC wallet address</p>
                    <input type="text" className='border outline-none p-2 rounded-2xl w-full' /> <br />
                    <small className="text sm">Do not send BTC unless you are certain the destination supports BTC transactions.</small> <br/>
                    <input type='checkbox' /> <span>Save address for next time</span>
                    <div>
                      <div className='flex gap-4 bg-green-200 rounded-2xl p-3'>
                        <p>Available Balance</p>
                        <p>0 BTC</p>
                      </div>
                      <h1>Amount to withdraw</h1>
                      <input type='text' className='border outline-none p-2 rounded-2xl w-full' /> <br/>
                      <h1>Withdraw fee</h1>
                      <div className='border rounded-2xl p-5'>0.0005</div>
                      <h1>Total</h1>
                      <div className='border rounded-2xl p-5'></div>
                    </div>
                    <button className='bg-[#420c8e] w-full my-4 border-2  rounded-3xl h-12 text-white hover:text-[#420c8e] hover:bg-transparent'>Withdraw</button>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
      <div className="wllt my-2">
        <h1 className="font-bold">Wallets</h1>
        <div className='bg-slate-50 rounded-2xl border px-3 py-4'>
          <div className='crrncy flex gap-[14rem] border-b'>
            <h1 className='text-slate-400'>Currency</h1>
            <div className='balnc'>
              <h1 className='text-slate-400'>Balances</h1>
            </div>
          </div>
              {/* btc */}
            <div className="flex gap-[15rem] border-b">
              <div className='flex'>
                <div className='iimmg1'></div>
                <h1>Bitcoin</h1>
              </div>
              <div className="">
                <p className=''>0 BTC</p>
                <p>= 0 USD</p>
              </div>
            </div>
              {/* eth */}
            <div className="flex gap-[14rem] border-b">
              <div className='flex'>
                <div className='iimmg1'></div>
                <h1>Etherium</h1>
              </div>
              <div className="">
                <p className=''>0 ETH</p>
                <p>= 0 USD</p>
              </div>
            </div>
              {/* tether */}
            <div className="flex gap-[13rem] border-b">
              <div className='flex'>
                <div className='iimmg1'></div>
                <h1>Tether USD</h1>
              </div>
              <div className="">
                <p className=''>0 USDT</p>
                <p>= 0 USD</p>
              </div>
            </div>
              {/* usd coin */}
            <div className="flex gap-[14rem] border-b">
              <div className='flex'>
                <div className='iimmg1'></div>
                <h1>USD coin</h1>
              </div>
              <div className="">
                <p className=''>0 USDC</p>
                <p>= 0 USD</p>
              </div>
            </div>
              {/* covesting */}
            <div className="flex gap-[14rem] border-b">
              <div className='flex'>
                <div className='iimmg1'></div>
                <h1>Covesting</h1>
              </div>
              <div className="">
                <p className=''>0 COV</p>
                <p>= 0 USD</p>
              </div>
            </div>
              {/* usd */}
            <div className="flex gap-[14rem] border-b">
              <div className='flex'>
                <div className='iimmg1'></div>
                <h1>US dollar</h1>
              </div>
              <div className="">
                <p className=''>0 USD</p>
                <p>= 0 USD</p>
              </div>
            </div>

        </div>
            <div className='bg-slate-50 rounded-2xl border mt-3 px-3 py-4'>
              <div>
                <div className='reff-im'></div>
                <h1>Referral link</h1>
              </div>
            </div>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default page