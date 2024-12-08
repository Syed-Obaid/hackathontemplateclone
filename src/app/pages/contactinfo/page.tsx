import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";

function Contactinfo() {
  return (
    <>
      <section className='max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 py-10 pb-10 bg-[#FFFFFF]'>
<div className='text-center'>
  <h1 className='text-[36px] font-semibold'>Get In Touch With Us</h1>
  <p className='text-[16px] text-[#9F9F9F] max-w-xl mx-auto'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
</div>


<section className='grid grid-cols-1 md:grid-cols-2 justify-center mx-auto gap-5 md:gap-0 py-8'>
  <div className='flex flex-col items-center gap-5 justify-center'>
<div className='flex space-x-4'>
<span className='text-[24px] font-medium pt-2'><FaLocationDot /></span>
<span><h1 className='text-[24px] font-medium'>Address </h1>
<p className="text-[16px] max-w-[12rem]">236 5th SE Avenue, New York NY10000, United States</p></span>
</div>

<div className='flex space-x-4'>
<span className='text-[24px] font-medium pt-2'><BsFillTelephoneFill /></span>
<span><h1 className='text-[24px] font-medium'>Phone </h1>
<p className="text-[16px] max-w-[12rem]">Mobile: +(84) 546-6789</p>
<p className="text-[16px] max-w-[12rem]">Hotline: +(84) 546-6789</p>
</span>
</div>

<div className='flex space-x-4'>
<span className='text-[24px] font-medium pt-2'><FaClock /></span>
<span><h1 className='text-[24px] font-medium'>Working Time </h1>
<p className="text-[16px] max-w-[12rem]">Monday-Friday: 9:00 - 22:00</p>
<p className="text-[16px] max-w-[12rem]">Saturday-Sunday: 9:00 - 21:00</p>
</span>
</div>

  </div>

<div className=''>
  <div className='flex flex-col items-center gap-7'>
<div>
<p className='text-[16px] font-medium'>Your name</p>
<input type="text" placeholder='Abc' name="" id="" className='py-2 ps-2 border-2 w-[18rem] rounded' />

</div>
<div>
<p className='text-[16px] font-medium'>Email address </p>
<input type="text" placeholder='Abc@def.com' name="" id="" className='py-2 ps-2 border-2 w-[18rem] rounded' />

</div>
<div>
<p className='text-[16px] font-medium'>Subject</p>
<input type="text" placeholder='This is an optional' name="" id="" className='py-2 ps-2 border-2 w-[18rem] rounded' />

</div>

<div>
<p className='text-[16px] font-medium'>Message</p>
<textarea name="" placeholder='Hi! i’d like to ask about' rows={4} id="" className='p-2 border-2 w-[18rem] rounded'></textarea>

</div>
<div className=''>
  <button className='text-[16px] py-2 border-2 px-12 rounded'>Submit</button>
</div>
  </div>


</div>





</section>




      </section>
    </>
  )
}

export default Contactinfo
