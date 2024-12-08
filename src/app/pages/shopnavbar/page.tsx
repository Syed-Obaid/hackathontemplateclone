'use client'
import React, { useState } from 'react'
import { FaRegUser , FaRegHeart } from "react-icons/fa";

import { IoCartOutline , IoSearch } from "react-icons/io5";

function ShopNavbar() {
    const [isClick , setIsClick] = useState(false)
    const toggleNavbar = () =>{
        setIsClick(!isClick)
    }
  return (
    <>
      <nav>
        <div className='max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 '>
            <div className='flex justify-between items-center h-16'>
                <div>
                   {/* <img src="/Logo.png" alt="" /> */}
      
        </div>   
      <div className=' hidden md:block'>
<div className='flex items-center  space-x-14 text-base'>

        <a href="" className='hover:underline'>Home</a>
        <a href="" className='hover:underline'>Shop</a>
        <a href="" className='hover:underline'>About</a>
        <a href="" className='hover:underline'>Contact</a>

</div>
               </div>

<section className='hidden md:block '>


               <div className='flex items-center space-x-8 relative text-lg'>
              
      
               <FaRegUser />
               <IoSearch />
               <FaRegHeart />
               <IoCartOutline />


  

               </div>
</section>

<div className='md:hidden flex items-center'>
    <button className='inline-flex items-center justify-center p-2 rounded-md text-black  hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black' onClick={toggleNavbar}>
    {
        isClick ? (  <svg className='h-6 w-6' xmlns="http://www.w3.org/2000/svg"
            fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6112 12'/>
            </svg> ) : (  <svg className='h-6 w-6' xmlns="http://www.w3.org/2000/svg"
                fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7'/>
                </svg> )
    }
    </button>
</div>


            </div>

        </div>
{isClick && (       <div className=' md:hidden'>
<div className='space-y-4 flex flex-col justify-center items-center'>

        <a className='block' href="">Home</a>
        <a className='block' href="">Shop</a>
        <a className='block' href="">About</a>
        <a className='block' href="">Contact</a>
        <div className='flex  justify-center items-center space-x-6 relative'>
              
        <FaRegUser />
               <IoSearch />
               <FaRegHeart />
               <IoCartOutline />


               </div>

</div>
               </div> )}


      </nav>
    </>
  )
}

export default ShopNavbar

