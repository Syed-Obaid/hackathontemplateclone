"use client"
import React, { useState } from 'react'
import { FaAngleRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Footer from '../footer/page';
import Navbar2 from '../navbar2/page';
import Sidebar from '../sidebarrr/page';

const Asgardsofa: React.FC = ()=> {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const handleAddToCart = () => {
      setSidebarOpen(true);
    };
  
    const handleCloseSidebar = () => {
      setSidebarOpen(false);
    };

  return (
    <>
    <Navbar2/>
     <section className='max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 '>

     <div className='text-[16px] px-4 flex flex-grap gap-4 md:gap-0 items-center space-x-2 text-[#9f9f9f] py-2  my-3 font-medium '>Home <FaAngleRight className='pl-2'/>
     <span className='font-light'>Shop </span> <span><FaAngleRight className=''/></span>  <span className='text-[20px] px-2'>|</span> <span className='text-black'>Asgaard sofa</span> </div>


<section className='flex flex-wrap justify-evenly items-center py-12 my-5'>

    <div>
        <div className='flex gap-5'>
            <div className='flex flex-col space-y-5'>
               <div className='bg-[#FFF9E5]'>
               <img src="/sofaa2.png" alt="" />
               </div>
               <div className='bg-[#FFF9E5]'>
               <img src="/sofaa1.png" alt="" />
               </div>
               <div className='bg-[#FFF9E5]'>
               <img src="/sofaa4.png" alt="" />
               </div>
                <div className='bg-[#FFF9E5]'>
                <img src="/sofaa3.png" alt="" />
                </div>
            </div>
           <div className='bg-[#FFF9E5]'>
           <img src="/bigasgard.png" alt="" />
           </div>
        </div>
    </div>
    <div>   
        <div>
            <h1 className='text-[42px]'>Asgaard sofa</h1>
            <p className='text-[24px] text-[#9F9F9F]'>Rs. 250,000.00</p>
            <p className='flex space-x-2 text-[#FFDA5B] text-[20px]'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
            <p className='text-[13px] text-[#9F9F9F] max-w-sm py-2'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
            </p>
            <p className='text-[14px] text-[#9F9F9F]'>Size</p>
            <div className='flex space-x-5'>
                <p className='text-[13px] bg-[#FFF9E5] w-10 p-2 text-center rounded'>L</p>
                <p className='text-[13px] bg-[#e9e7e7] w-10 p-2 text-center rounded'>XL</p>
                <p className='text-[13px] bg-[#e9e7e7] w-10 p-2 text-center rounded'>XS</p>
            </div>
            <p className='text-[14px] text-[#9F9F9F]'>Color</p>
            <div className='flex space-x-3'>
                <p className='text-[13px] bg-[#CDBA7B] w-5 p-3 text-center rounded-full'></p>
                <p className='text-[13px] bg-[#000000] w-5 p-3 text-center rounded-full'></p>
                <p className='text-[13px] bg-[#816DFA] w-5 p-3 text-center rounded-full'></p>
            </div>
            <div className='flex space-x-5 py-5'>
                <div className='flex justify-evenly items-center space-x-4 text-[16px] border-2 border-[#9F9F9F] max-w-[90px] px-2 content-center rounded'>
                    <p>-</p>
                <p>1</p>
                <p>+</p>
                </div>
                <button  onClick={handleAddToCart} className='py-2 px-8 border-2 border-black rounded'>Add To Cart</button>
                <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
            </div>
        </div>
    </div>

</section>

<section className=' flex flex-wrap justify-evenly max-w-4xl mx-auto'>
    <div className='text-[24px] text-black'>Description</div>
    <div className='text-[24px] text-[#9F9F9F]'>Additional Information</div>
    <div className='text-[24px] text-[#9F9F9F]'>Reviews [5]</div>
</section>
<section className='max-w-5xl mx-auto py-10'>
    <p className='text-[16px] text-[#9F9F9F] pb-10'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
    <p className='text-[16px] text-[#9F9F9F]'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
</section>

<section className='flex flex-wrap justify-evenly items-center'>
    <div className='bg-[#FFF9E5]'>
        <img src="/whitesofa1.png" alt="" />
    </div>
    <div className='bg-[#FFF9E5]'>
        <img src="/whitwsofa2.png" alt="" />
    </div>
</section>


<section className='py-10'>
<div className='text-center pt-4'>
<h1 className='text-[36px] font-medium'>Related Products</h1>


        </div>
<section className='flex flex-wrap justify-evenly items-center'>
  <div>
    <img src="/toppick1.png" alt="" />
    <p className='text-[16px]'>Trenton modular sofa_3</p>
    <p className='text-[24px] font-medium'>Rs. 25,000.00</p>
  </div>

  <div>
    <img src="/toppick2.png" alt="" />
    <p className='text-[16px]'>Granite dining table with dining chair</p>
    <p className='text-[24px] font-medium'>Rs. 25,000.00</p>
  </div>

  <div>
    <img src="/toppick3.png" alt="" />
    <p className='text-[16px]'>Outdoor bar table and stool</p>
    <p className='text-[24px] font-medium'>Rs. 25,000.00</p>
  </div>

  <div>
    <img src="/toppick4.png" alt="" />
    <p className='text-[16px]'>Plain console with teak mirror</p>
    <p className='text-[24px] font-medium'>Rs. 25,000.00</p>
  </div>
</section>
<div className='text-center py-10'>
<button className='text-[20px] border-b-2 border-black font-medium'>Shop Now</button>
</div>
</section>




        </section> 
     <Footer/>
    </>
  )
}

export default Asgardsofa
