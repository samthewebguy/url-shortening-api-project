import React from 'react'
import DesktopImage from './assets/illustration-working.svg'
import BrandRecognitionIcon from './assets/icon-brand-recognition.svg'
import DetailedRecordsIcon from './assets/icon-detailed-records.svg'
import FullyCustomizableIcon from './assets/icon-fully-customizable.svg'
import BgBoostImage from './assets/bg-boost-desktop.svg'
import BgBoostMobileImage from './assets/bg-boost-mobile.svg'
import Header from './Component/Header/Header'
import Footer from './Component/Footer'
import Shortener from './Component/Shortener'

const Home = () => {
  return (
    <>
      <Header/>
      <div className='grid grid-cols-1 md:grid-cols-2 md:flex-row py-24 md:py-40 px-8 md:pl-24 items-center justify-center gap-[40px]'>
        <div className='flex flex-col items-center text-center md:text-left md:items-start gap-4 w-full md:max-w-[480px] order-2 md:order-1'>
            <h1 className='text-[48px] md:text-[64px] font-bold leading-[1.2]'>More than just shorter links</h1>
            <p className='text-lg font-normal text-[#9e9aa7] leading-[1.5]'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
            <a className='bg-[#2acfcf] text-[#fff] font-bold decoration-none py-3 px-8 rounded-full w-fit' href="/">Get Started</a>
        </div>
        <div className='flex justify-center items-end order-1 md:order-2'>
            <img className='w-full md:max-w-[600px]' src={DesktopImage} alt="" />
        </div>
      </div>
      <Shortener/>
      <section className='bg-[#f0f1f6] flex flex-col items-center justify-center py-16 md:px-24 px-8'>
        <div className='flex flex-col text-center gap-4'>
          <h2 className='text-3xl font-bold'>Advanced Statistics</h2>
          <p className='text-md font-normal text-gray-400'>Track how your links are performing across the web with our advanced statistics dashboard</p>
        </div>
        <div className='relative grid grid-cols-1 md:grid-cols-3 mt-16 md:mt-10 gap-[48px] md:gap-[24px] items-center justify-center text-center md:text-left'>
          <div className='hidden md:flex absolute top-[50%] right-[0] left-[0] line h-1 bg-[#2acfcf] w-full'></div>
          <div className='flex md:hidden absolute left-[50%] top-[0] bottom-[0] line h-full bg-[#2acfcf] w-1'></div>
          <div className='relative flex flex-col w-[100%] max-w-[100%] md:max-w-[400px] bg-white gap-2 p-[24px] rounded-[8px] items-center md:items-start'>
            <div className='absolute top-[-20px]  bg-[#3b3054] w-fit p-4 rounded-[100%]'>
              <img className='w-[24px]' src={BrandRecognitionIcon} alt="" />
            </div>
            <div className='flex flex-col mt-8'>
              <h3 className='text-lg font-bold'>Brand Recognition</h3>
              <p className='text-sm font-normal text-gray-400'>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help install confidence in your content.</p>
            </div>
          </div>
          <div className='relative w-[100%] max-w-[100%] md:max-w-[400px] bg-white flex flex-col gap-2 p-[24px] rounded-[8px] md:mt-10 items-center md:items-start'>
            <div className='absolute top-[-20px] bg-[#3b3054] w-fit p-4 rounded-[100%]'>
              <img className='w-[24px]' src={DetailedRecordsIcon} alt="" />
            </div>
            <div className='flex flex-col mt-8'>
              <h3 className='text-lg font-bold'>Detailed Records</h3>
              <p className='text-sm font-normal text-gray-400'>Gain insights into who is clicking  your links. Knowing when and where people engage with your content helps inform better decisions</p>
            </div>
          </div>
          <div className='relative w-[100%] max-w-[100%] md:max-w-[400px] bg-white flex flex-col gap-2 p-[24px] rounded-[8px] md:mt-20 items-center md:items-start'>
            <div className='absolute top-[-20px]  bg-[#3b3054] w-fit p-4 rounded-[100%]'>
              <img className='w-[24px]' src={FullyCustomizableIcon} alt="" />
            </div>
            <div className='flex flex-col mt-8'>
              <h3 className='text-lg font-bold'>Fully Customizable</h3>
              <p className='text-sm font-normal text-gray-400'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='relative bg-[#3b3054] flex flex-col items-center justify-center h-[30vh] py-16 md:px-24 px-8 gap-6'>
        <h2 className='text-3xl text-white font-bold text-center z-[20]'>Boost your links today</h2>
        <a className='bg-[#2acfcf] text-[#fff] font-bold decoration-none py-3 px-8 rounded-full w-fit z-[20]' href="/">Get Started</a>
        <img src={BgBoostImage} alt="Bg boost background image" className='hidden md:flex absolute w-[100%] h-[100%]' />
        <img src={BgBoostMobileImage} alt="Bg boost background image" className='flex md:hidden absolute w-[100%] h-[100%] z-[0]' />
      </section>
      <Footer/>
    </>
  )
}

export default Home