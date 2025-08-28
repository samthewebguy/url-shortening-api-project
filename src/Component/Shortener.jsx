import React from 'react'
import BgShortenImage from '../assets/bg-shorten-desktop.svg'
import BgShortenMobileImage from '../assets/bg-shorten-mobile.svg'

const Shortener = () => {
  return (
    <>
        <section className='pt-10 bg-[#f0f1f6] mt-10 md:px-24 px-8'>
            <div className='mx-auto w-full space-y-10 py-10 relative'>
                <div className='p-8 Boostinputs bg-[hsl(257,27%,26%)] w-full rounded-lg absolute top-[-100%] left-[50%] -translate-x-1/2'>
                    <form className='flex flex-col md:flex-row gap-3'>
                        <div className='flex-1'>
                            <input className='pl-4 py-3 outline-none bg-white rounded-md w-full' type="url" placeholder='Shorten a link here...'/>
                        </div>
                        <button className='bg-[#2acfcf] py-3 px-8 rounded-md text-white font-bold'  type='submit'>Shorten It!</button>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}

export default Shortener