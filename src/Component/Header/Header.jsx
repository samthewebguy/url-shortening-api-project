import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [openMobileNav, setOpenMobileNav] = useState(false);

    const showMobileNav =() => {
        setOpenMobileNav (true);
    }

    const closeMobileNav =() => {
        setOpenMobileNav (false);
    }

  return (
    <>
        <nav className='bg-white flex items-center justify-between h-[64px] py-4 px-8 md:px-24 md:fixed top-0 left-0 right-0 z-10'>
            <div className='flex flex-row items-center'>
                <Link to="/"><img src={Logo} alt="" /></Link>
                <div className='hidden md:flex flex-row gap-4 ml-16 font-semibold text-sm text-gray-400'>
                    <Link to="/">Features</Link>
                    <Link to="/">Pricing</Link>
                    <Link to="/">Resources</Link>
                </div>
            </div>
            <div className='hidden md:flex flex-row gap-8 items-center justify-center font-semibold text-md'>
                <Link to="/">Login</Link>
                <Link className='bg-[#2acfcf] py-2 px-6 text-white rounded-full' to="/">Sign Up</Link>
            </div>
            <div onClick={showMobileNav} className='md:hidden cursor-pointer'>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </nav>
        <div onMouseLeave={closeMobileNav} className={`md:hidden flex-col items-center justify-center bg-[#3b3054] mx-8 px-8 py-10 rounded-2xl ${openMobileNav ? 'flex' : 'hidden'} `}>
            <div className='flex flex-col gap-6 text-white font-semibold text-md text-center border-b border-b-[#9e9aa7] pb-8 w-full'>
                <Link to="/" onClick={closeMobileNav}>Features</Link>
                <Link to="/" onClick={closeMobileNav}>Pricing</Link>
                <Link to="/" onClick={closeMobileNav}>Resources</Link>
            </div>
            <div className='flex flex-col gap-6 items-center justify-center text-white font-semibold text-lg text-center mt-8 w-full'>
                <Link to="/" onClick={closeMobileNav}>Login</Link>
                <Link className='bg-[#2acfcf] py-2 px-6 text-white rounded-full w-full' to="/" onClick={closeMobileNav}>Sign Up</Link>
            </div>
        </div>
    </>
  )
}

export default Header