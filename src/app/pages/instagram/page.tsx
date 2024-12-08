import React from 'react'

function Instagram() {
  return (
    <>
      <section className='max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 '>
        <div className=''  style={{
        backgroundImage: "url('/instagram.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // height: "100vh",
        // width: "100%",

      }}>
            {/* <img src="/instagram.png" alt="" /> */}
            <div className='text-center py-32'>
                <h1 className='text-[60px] font-bold'>Our Instagram</h1>
                <p className='text-[20px]'>Follow our store on Instagram</p>
                <button className='text-[20px] bg-white shadow-md shadow-slate-400 py-2 px-12 rounded-3xl my-3'>Follow Us</button>
            </div>
        </div>
      </section>
    </>
  )
}

export default Instagram
