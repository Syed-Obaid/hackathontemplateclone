import React from 'react'

function Accountregister() {
  return (
    <>
      <section className='max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 bg-[#FFFFFF]'>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-evenly mx-auto py-10  gap-5 md:gap-0'>
            <div className=' mx-auto'>
                <div className='flex flex-col justify-center  gap-5 p-5'>
                    <h1 className='text-[36px] font-semibold'>Log In</h1>

                    <div>
<p className='text-[16px] font-medium'>Username or email address</p>
<input type="text" placeholder='Abc' name="" id="" className='py-2 ps-2 border-2 w-[18rem] rounded' />

</div>

<div>
<p className='text-[16px] font-medium'>Password</p>
<input type="text" placeholder='Abc' name="" id="" className='py-2 ps-2 border-2 w-[18rem] rounded' />

</div>

<div className=''>
    <input type="checkbox" name="" id="" className='w-5 h-4'/> <span>Remember me</span>
</div>
<div>
    <button className='text-[20px] border-2 border-black rounded py-1 px-8'>Log In</button> <span className='text-[16px]'>Lost Your Password?</span>
</div>


                </div>
            </div>

            <div className=' mx-auto max-w-sm'>
                <div className='flex flex-col justify-center  gap-5 p-5'>
                    <h1 className='text-[36px] font-semibold'>Register</h1>

                    <div>
<p className='text-[16px] font-medium'>Email address</p>
<input type="text" placeholder='Abc' name="" id="" className='py-2 ps-2 border-2 w-[18rem] rounded' />

</div>

<div>
    <p className='text-[16px]'>A link to set a new password will be sent to your email address.</p>
</div>
<div>
    <p className='text-[16px]'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-bold'> privacy policy.</span></p>
</div>
<div>
    <button className='text-[20px] border-2 border-black rounded py-1 px-8'>Register</button> <span className='text-[16px]'>Lost Your Password?</span>
</div>


                </div>
            </div>


        </div>

      </section>
    </>
  )
}

export default Accountregister
