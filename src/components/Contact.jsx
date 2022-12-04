import React from 'react'
import CustomerSupport from './images/CustomerS.png'

const Contact = () => {
  return (
    <form style={{
    }} className='w-full relative grid place-items-center py-1 bg-no-repeat bg-center bg-contain'>
            <img className='absolute right-[3rem] w-[20rem] md:h-auto h-[20rem] md:w-auto bottom-[1rem] lg:bottom-0 z-0 lg:z-10 camera' src={CustomerSupport} alt="" />
        <div className='relative container grid place-items-center gap-1'>
            <div className='font-ubuntu font-semibold mt-3'>Contact Us</div>
            <div className='md:font-semibold font-normal font-poppins lg:text-4xl md:text-3xl sm:text-2xl text-lg'>Get in Touch - We'd Love to Hear From You!</div>
           <div className='md:text-base text-xs font-poppins font-medium'>You Can Reach Us With Anytime via <span className='underline underline-offset-2'> photographydcam@gmail.com </span></div>
            <div className='grid gap-3 md:grid-cols-2 grid-cols-1 lg:w-[65%] md:w-[90%] sm:w-[90%] w-full'>
                <div className=' flex flex-col justify-center items-start gap-1'>
                    <label className='md:text-base text-sm font-poppins' htmlFor="firstName">FirstName</label>
                    <input placeholder='FirstName' className='placeholder:text-sm md:placeholder:text-base placeholder:text-[#e2fdff]/70 outline-none w-full bg-black/20 px-2 py-1 rounded-md' type="text" name="firstName" id="firstName" />
                </div>
                <div className=' flex flex-col justify-center items-start gap-1'>
                    <label className='md:text-base text-sm font-poppins' htmlFor="lastName">LastName</label>
                    <input placeholder='LastName' className='placeholder:text-sm md:placeholder:text-base placeholder:text-[#e2fdff]/70 outline-none w-full bg-black/20 px-2 py-1 rounded-md' type="text" name="lastName" id="lastName" />
                </div>
                <div className='md:col-span-2 flex flex-col justify-center items-start gap-1'>
                    <label className='md:text-base text-sm font-poppins' htmlFor="email">Email</label>
                    <input placeholder='Email' className='placeholder:text-sm md:placeholder:text-base placeholder:text-[#e2fdff]/70 outline-none w-full bg-black/20 px-2 py-1 rounded-md' type="text" name="email" id="email" />
                </div>
                <div className='md:col-span-2 flex flex-col justify-center items-start gap-1'>
                    <label className='md:text-base text-sm font-poppins' htmlFor="message">Message</label>
                    <textarea placeholder='Write your query here' className='placeholder:text-sm md:placeholder:text-base placeholder:text-[#e2fdff]/70 outline-none w-full bg-black/20 px-2 py-1 rounded-md resize-none h-[10rem]' name="message" id="message"></textarea>
                </div>
                <button className='md:col-span-2 bg-[#e2fdff] text-[#002733] rounded-md font-semibold py-2 md:font-normal text-base md:text-xl' name='submitButton'>SUBMIT</button>
            </div>
            {/* <img className='absolute' src={CustomerSupport} alt="" /> */}

        </div>
    </form>
  )
}

export default Contact