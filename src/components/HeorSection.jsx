import React from 'react'
import DCP2 from './images/DCP2.jpg'

const HeorSection = () => {
  return (
    <div className='w-full flex justify-center items-start lg:items-center py-2 min-h-[34.3rem] lg:min-h-[35rem] cursor-pointer'>
      <div className='container flex flex-col lg:justify-center lg:flex-row gap-1'>
        <div className='h-full w-full lg:w-[50%] grid place-items-center lg:order-2'><img className='w-[35rem] h-[17.5rem] lg:h-[25rem] object-cover object-center rounded-md' src={DCP2} alt="" /></div>
        <div className='flex flex-col lg:items-star lg:text-left lg:justify-center lg:w-[50%] gap-2 lg:order-1'>
        <div className='text-2xl font-poppins'>Plan Your Wedding With Us</div>
        <div className='text-2xl font-poppins'><span className='text-4xl font-dancingScript tracking-widest'>Dc</span> Photography is an  </div>
        <div className='text-2xl font-poppins'>Indian Wedding Photography Studio </div>
      <div className='text-xl font-poppins tracking-wide'> where you can find the best wedding  Shoots and Prewedding shoots</div>
      <div className='text-xl font-poppins tracking-wide'>vedio makers and top class crew , with  best prices and reviews. </div>
      </div>
      </div>
    </div>
  )
}

export default HeorSection