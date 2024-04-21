"use client"


import React, {useState} from 'react'
import './navbar.css';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [bgColor, setBgColor] = useState('');

  const link = loggedIn ? '/home' : '/create';
  const buttonText = loggedIn ? "Wallet" : "Sign Up";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsUser(false);
  }
  const noLogin = () => {
    setIsOpen(!isOpen);
    // setIsOpen(false);
  }

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleUser = () => {
    setIsUser(!isUser);
    setIsOpen(false);
  }
  const refresh = () => {
    setIsUser(false);
    setIsOpen(false);
    // window.location.reload();
  }

  const closeUser = () => {
    setIsUser(false);
  };

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className='grid grid-cols-2 pt-3 pl-3 pr-3 fixed top-0 w-full gap-[30%] bg-white h-[8vh]'>
        <div className="logo gap-[5%] md:gap-0 md:hidden" onClick={refresh}>
            <Link href='/' className='flex'><div className="logo-img"></div><span className='font-bold text-2xl text-blue-900'>BITVELAR</span></Link>
            {/* <Link href='/'><h1 className='font-bold text-xl text-[purple]'>bitnex</h1></Link> */}
        </div>

        {/* mobile screen */}
        <div className="nav-aside  gap-[10%] md:hidden">
            {/* <div className={ isDarkMode ? 'dark-mode' : 'light-mode'}>
              <div className="nav-bg-color">
                <div className="bg-light" onClick={toggleMode}></div>
                <div className="bg-dark" onClick={toggleMode}></div>
              </div>
            </div> */}
            {loggedIn && (
            <div className="nav-profile" onClick={toggleUser}></div>
            )}
            <div className="nav-menue" onClick={loggedIn ? toggleMenu : noLogin}></div>
        </div>
        
        {/* laptop screen */}
        <nav className='lrge hidden '>
          <div className="logo mr-20" onClick={refresh}>
              <Link href='/' className='flex'><div className="logo-img"></div><span className='font-bold text-2xl text-blue-900'>BITVELAR</span></Link>
              {/* <Link href='/'><h1 className='font-bold text-xl text-[purple]'>bitnex</h1></Link> */}
          </div>
          <div className="hidden laptop mr-20">
            <div className="nav-area lg:flex md:flex">
              <Link href='/trade' className='linkss'><small>Trade</small></Link>
              {!loggedIn ? '' : <Link href='/buy' className='linkss'><small>Buy Crypto</small></Link>}
              <Link href='/terms' className='linkss'><small>Terms of Use</small></Link>
              <Link href='/privacy' className='linkss mx-5'><small>Privacy</small></Link>
              <Link href='/risk' className='linkss'><small>Risk Warnings</small></Link>
              {!loggedIn ? '' : <Link href='/' className='linkss mx-5'><small>Support</small></Link>}
            </div>
          </div>
          <div className="tbwall flex gap-5">
            {/* <div className={ isDarkMode ? 'dark-mode' : 'light-mode'}>
                <div className="nav-bg-color">
                  <div className="bg-light" onClick={toggleMode}></div>
                  <div className="bg-dark" onClick={toggleMode}></div>
                </div>
              </div> */}
              {!loggedIn ? (
                <Link href='/login'><div className="btn-log text-center">Login</div></Link>
              ) : (
              <div className="nav-profile" onClick={toggleUser}></div>
              )}
              <Link href={link}><div className="btn-se w-[5rem] text-center pt-2">{buttonText}</div></Link>
          </div>
      </nav>


        {/* user profile */}
        {isUser && (
          <div className={`menue-user ${isUser ? 'slide-in' : ''}`}>
        <div className="menuu">
        <div className="close-icon" onClick={toggleMenu}>
            <span></span> {/* "X" icon for closing the menu */}
          </div>
        {/* Menu items go here */}
        <h1 className='font-bold mb-1'>Overview</h1> 
        <hr/>
        <Link href="/profile" onClick={closeUser} className="mt-4">
          <div className="pro1_ flex gap-2">
            <div className="pro1_img"></div>
            <h1 className='font-bold text-sm'>Profile -</h1><span className='text-[red] text-sm font-bold'>Not verified</span>
          </div>
          <p className='mb-1'>Account details</p>
        </Link>
        <hr/>
        <Link href="/promo" onClick={closeUser} className="mt-4">
          <div className="pro1_ flex gap-2">
            <div className="pro2_img"></div>
            <h1 className='font-bold text-sm'>Promo code</h1>
          </div>
          <p className='mb-1'>Increase your income</p>
        </Link>
        <hr/>
        <Link href="/2fa" onClick={closeUser} className="mt-4">
          <div className="pro1_ flex gap-2">
            <div className="pro3_img"></div>
            <h1 className='font-bold text-sm'>2FA</h1>
          </div>
          <p className='mb-1'>Enable 2FA verification</p>
        </Link>
        <hr/>
        <Link href="/kyc" onClick={closeUser} className="mt-4">
          <div className="pro1_ flex gap-2">
            <div className="pro4_img"></div>
            <h1 className='font-bold text-sm'>KYC</h1>
          </div>
          <p className='mb-1'>KYC verification</p>
        </Link>
        <hr/>
        <Link href="/transactions" onClick={closeUser} className="mt-4">
          <div className="pro1_ flex gap-2">
            <div className="pro5_img"></div>
            <h1 className='font-bold text-sm'>Transactions</h1>
          </div>
          <p className='mb-1'>Transactions history</p>
        </Link>
        <hr/>
        <Link href="/logout" onClick={closeUser} className="mt-4">
          <div className="pro1_ flex gap-2">
            <div className="pro6_img"></div>
            <h1 className='font-bold text-sm'>Log out</h1>
          </div>
        </Link>
      </div>
      </div>
      )}

      {/* menue drop bdown */}
      {!loggedIn && isOpen ? (
          <div className="no-login bg-white w-[100vw] text-center h-[43dvh]">
            <div className="close-icon" onClick={toggleMenu}>
            <span></span> {/* "X" icon for closing the menu */}
          </div>
            <div>
              <Link href='/trade' onClick={closeMenu}><div className='h-12'>Trade</div></Link> <hr/>
              <Link href='/terms' onClick={closeMenu}><div className='h-12'>Terms of Use</div></Link> <hr/>
              <Link href='/privacy' onClick={closeMenu}><div className='h-12'>Private Policy</div></Link> <hr/>
              <Link href='/risk' onClick={closeMenu}><div className='h-12'>Risk Warnings</div></Link> <hr/>
            </div>
            <div className=" grid grid-cols-2 gap-5 mt-8 text-xl">
              <Link href='/login'><div className="deposit py-3 px-10 rounded-[20px] text-white bg-purple-900" onClick={closeMenu}>Login</div></Link>
              <Link href='/create'><div className="withdraw py-3 px-10 rounded-[20px] border border-purple-900 text-purple-900 bg-white" onClick={closeMenu}>Sign up</div></Link>
            </div>
          </div>
        ) : 
        (isOpen && (
          <div className={`menue ${isOpen ? 'open' : ''}`}>
        <div className="menu">
        <div className="close-icon" onClick={toggleMenu}>
            <span></span> {/* "X" icon for closing the menu */}
          </div>
        {/* Menu items go here */}
        <Link href="/trade" onClick={closeMenu} className="">
          <h2 className="text-xl mb-6">Trade</h2>
        </Link>
        <Link href="/buy" onClick={closeMenu} className="">
          <h2 className="text-xl mb-6">Buy Crypto</h2>
        </Link>
        <Link href="/home" onClick={closeMenu} className="my-7 flex gap-5">
          <div className="overview-img"></div>
          <h2 className="text-xl">Overview</h2>
        </Link>
        <Link href="/" onClick={closeMenu} className="my-7 flex gap-5">
          <div className="convert-img"></div>
          <h2 className="text-xl">Convert</h2>
        </Link>
        <Link href="/staking" onClick={closeMenu} className="my-7 flex gap-5">
          <div className="staking-img"></div>
          <h2 className="text-xl">Staking</h2>
        </Link>
        <Link href="/transactions" onClick={closeMenu} className="my-7 flex gap-5">
          <div className="transactions-img"></div>
          <h2 className="text-xl">Transactions</h2>
        </Link>
        <Link href="/" onClick={closeMenu} className="my-7 flex gap-5">
          <div className="transfer-img"></div>
          <h2 className="text-xl">Transfer</h2>
        </Link>
        <Link href="/" onClick={closeMenu} className=" rounded-lg py-4 bg-purple-50 flex gap-5">
          <div className="reward-img"></div>
          <h2 className="text-xl">Reward</h2>
        </Link>

        <div className=" grid grid-cols-2 gap-5 mt-8 text-xl">
          <Link href='/'><div className="deposit py-3 px-10 rounded-[20px] text-white bg-purple-900" onClick={closeMenu}>Deposit</div></Link>
          <Link href='/'><div className="withdraw py-3 px-10 rounded-[20px] border border-purple-900 text-purple-900 bg-white" onClick={closeMenu}>Withdraw</div></Link>
        </div>
      </div>
      </div>
      )
      )}
    </nav>
  )
}

export default Navbar