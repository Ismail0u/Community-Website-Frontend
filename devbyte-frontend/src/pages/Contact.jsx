import React from 'react'

function Contact() {
  return (
    <div className='flex flex-col items-center font-sans '>
      <div className='bg-gradient-to-r from-blue-800 w-full h-[100px] to-blue-500'>
        <h1 className='text-center mt-5 text-xl capitalize text-gray-100 text-pretty font-semi-bold'>🚀 Got feedback, a bug to report, or a cool idea for DevByte? Drop us a message—we’re listening!</h1>
      </div> 
      
      <form className='w-[600px] h-full my-5  p-5 shadow-md  flex flex-col gap-5 rounded  dark:ring-1 dark:ring-neutral-400'>
      <div className='flex flex-col gap-1'>
        <label className='font-bold capitalize text-gray-400 text-lg text-secondary-foreground '>full name</label>
        <input type='text' placeholder='Enter Your Name' className='py-3 px-2 ring-1 ring-neutral-300 rounded bg-neutral-50 '  required />
      </div>
      <div className='flex flex-col gap-1'>
        <label className='font-bold capitalize text-lg'>email address</label>
        <input type='email' placeholder='Enter Your email' className='py-3 px-2 ring-1 ring-neutral-300 rounded bg-neutral-50'  required />
      </div>
      <div className='flex flex-col gap-1'>
        <label className='font-bold capitalize text-lg'>your message</label>
        <textarea  placeholder='Enter Your  Message' className='w-full ring-1 ring-neutral-300 p-2 h-[200px] bg-neutral-50 rounded' required></textarea>
      </div>

      <button className='w-full py-4 mt-4 rounded bg-gradient-to-r from-blue-900 to-blue-600 text-white capitalize font-bold'>send message</button>

      </form></div>
  )
}

export default Contact