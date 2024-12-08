import React from 'react'
import { TbAlignCenter } from "react-icons/tb";
import { PiGridFourFill } from "react-icons/pi";
import { MdOutlineViewDay } from "react-icons/md";


function Shopbar() {
  return (
    <>
      <section className='max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 bg-[#FAF4F4]'>
        <section className=' py-5 px-4 max-w-screen-2xl flex flex-wrap justify-between items-center gap-5'>
<div className='flex items-center gap-5'>
<p className='text-[20px] flex items-center gap-5'>
<TbAlignCenter /> Filter <PiGridFourFill /> <MdOutlineViewDay /></p>
<p className='px-2 text-[20px]'>|</p>
<p className='text-[16px]'>
Showing 1–16 of 32 results
</p>
</div>
<div className='flex gap-4'>
    <p className='text-[20px]'>Show <span className='h-10 w-14 p-2 bg-white text-[20px] text-[#9F9F9F]'>16</span></p>
    <p className='text-[20px]'>Short by <span className='h-10 w-14 p-2 pr-10 bg-white text-[20px] text-[#9F9F9F]'>Default</span></p>
</div>
        </section>
      </section>

<section className='max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8'>
<section className='flex flex-wrap justify-evenly items-center pb-5'>
  <div>
    <img src="/shopcard1.png" alt="" />
    <p className='text-[16px]'>Trenton modular sofa_3</p>
    <p className='text-[24px] font-medium'>Rs. 25,000.00</p>
  </div>

  <div>
    <img src="/shopcard2.png" alt="" />
    <p className='text-[16px]'>Granite dining table with dining chair</p>
    <p className='text-[24px] font-medium'>Rs. 25,000.00</p>
  </div>

  <div>
    <img src="/shopcard3.png" alt="" />
    <p className='text-[16px]'>Outdoor bar table and stool</p>
    <p className='text-[24px] font-medium'>Rs. 25,000.00</p>
  </div>

  <div>
    <img src="/shopcard4.png" alt="" />
    <p className='text-[16px]'>Plain console with teak mirror</p>
    <p className='text-[24px] font-medium'>Rs. 25,000.00</p>
  </div>



  <div>
    <img src="/shopcard5.png" alt="" />
    <p className='text-[16px]'>Grain coffee table</p>
    <p className='text-[24px] font-medium'>Rs. 15,000.00</p>
  </div>

  <div>
    <img src="/shopcard6.png" alt="" />
    <p className='text-[16px]'>Kent coffee table</p>
    <p className='text-[24px] font-medium'>Rs. 225,000.00</p>
  </div>
  <div>
    <img src="/shopcard7.png" alt="" />
    <p className='text-[16px]'>Round coffee table_color 2</p>
    <p className='text-[24px] font-medium'>Rs. 251,000.00</p>
  </div>

  <div>
    <img src="/shopcard8.png" alt="" />
    <p className='text-[16px]'>Reclaimed teak coffee table</p>
    <p className='text-[24px] font-medium'>Rs. 25,000.00</p>
  </div>

  <div>
    <img src="/shopcard9.png" alt="" />
    <p className='text-[16px]'>Plain console_</p>
    <p className='text-[24px] font-medium'>Rs. 258,200.00</p>
  </div>
  <div>
    <img src="/shopcard10.png" alt="" />
    <p className='text-[16px]'>Reclaimed teak Sideboard</p>
    <p className='text-[24px] font-medium'>Rs. 20,000.00</p>
  </div>
  <div>
    <img src="/shopcard11.png" alt="" />
    <p className='text-[16px]'>SJP_0825</p>
    <p className='text-[24px] font-medium'>Rs. 200,000.00</p>
  </div>
  <div>
    <img src="/shopcard12.png" alt="" />
    <p className='text-[16px]'>Bella chair and table</p>
    <p className='text-[24px] font-medium'>Rs. 100,000.00</p>
  </div>


  <div>
    <img src="/shopcard13.png" alt="" />
    <p className='text-[16px]'>Granite square side table</p>
    <p className='text-[24px] font-medium'>Rs. 258,800.00</p>
  </div>
  <div>
    <img src="/shopcard14.png" alt="" />
    <p className='text-[16px]'>Asgaard sofa</p>
    <p className='text-[24px] font-medium'>Rs. 25,000.00</p>
  </div>
  <div>
    <img src="/shopcard15.png" alt="" />
    <p className='text-[16px]'>Maya sofa three seater</p>
    <p className='text-[24px] font-medium'>Rs. 115,000.00</p>
  </div>
  <div>
    <img src="/shopcard16.png" alt="" />
    <p className='text-[16px]'>Outdoor sofa set</p>
    <p className='text-[24px] font-medium'>Rs. 244,000.00</p>
  </div>





</section>
<div className=' flex flex-wrap justify-center gap-8 py-12'>
<p className='text-[20px] bg-[#FBEBB5] w-[60px] text-center content-center h-[60px] rounded'>1</p>
<p className='text-[20px] bg-[#FFF9E5] w-[60px] text-center content-center h-[60px] rounded'>2</p>
<p className='text-[20px] bg-[#FFF9E5] w-[60px] text-center content-center h-[60px] rounded'>3</p>
<p className='text-[20px] bg-[#FFF9E5] w-[98px] text-center content-center h-[60px] rounded'>Next</p>

</div>




</section>





    </>
  )
}

export default Shopbar
