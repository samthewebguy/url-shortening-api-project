import React from 'react'
import FooterLogo from '../assets/logo copy.svg'
import FacebookIcon from '../assets/icon-facebook.svg'
import PinterestIcon from '../assets/icon-pinterest.svg'
import TwitterIcon from '../assets/icon-twitter.svg'
import InstagramIcon from '../assets/icon-instagram.svg'

const Footer = () => {
  return (
    <>
        <div className='bg-[#232127] grid grid-cols-1 md:grid-cols-[30%_70%] items-center md:items-start md:justify-start justify-center py-16 md:px-24 px-8 gap-4'>
            <div className='flex items-center justify-center md:items:start md:justify-start mb-6 md:mb-0'>
                <a href="/"><img src={FooterLogo} alt="" /></a>
            </div>
            <div className='flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left gap-[40px] md:gap-4'>
                <div className='flex flex-col'>
                    <h4 className='text-lg text-white font-bold mb-4'>Features</h4>
                    <div className='flex flex-col gap-2 text-gray-500 font-md text-md'>
                        <a href="">Link Shortening</a> 
                        <a href="">Branded Links</a>
                        <a href="">Analytics</a>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h4 className='text-lg text-white font-bold mb-4'>Resources</h4>
                    <div className='flex flex-col gap-2 text-gray-500 font-md text-md'>
                        <a href="">Blog</a>
                        <a href="">Developers</a>
                        <a href="">Analytics</a>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h4 className='text-lg text-white font-bold mb-4'>Features</h4>
                    <div className='flex flex-col gap-2 text-gray-500 font-md text-md'>
                        <a href="">Link Shortening</a>
                        <a href="">Branded Links</a>
                        <a href="">Analytics</a>
                    </div>
                </div>
                <div className='flex flex-row gap-4 items-center'>
                    <a href=""><img src={FacebookIcon} alt="" /></a>
                    <a href=""><img src={TwitterIcon} alt="" /></a>
                    <a href=""><img src={InstagramIcon} alt="" /></a>
                    <a href=""><img src={PinterestIcon} alt="" /></a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer