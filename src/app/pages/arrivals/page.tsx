import Link from 'next/link'
import React from 'react'

function NewArrivals() {
  return (
    <>
      <section className='max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 bg-[#FFF9E5]'>
<div className='flex justify-evenly items-center'>
<div>
    <img src="/arrival1.png" alt="" />
</div>
<div className='text-center'>
    <p className='text-[24px] font-medium'>New Arrivals</p>
    <h1 className='text-[48px] font-bold pb-8'>Asgaard sofa</h1>
   <Link href="../pages/asgardsofa"> <button className='text-[20px] border-2 border-black py-2 px-10'>Order Now</button></Link>
</div>

</div>
      </section>
    </>
  )
}

export default NewArrivals
