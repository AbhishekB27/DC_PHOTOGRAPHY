import React from 'react'
import ExhibitionI from './images/ExhibitionI.png'

const Exhibition = () => {
  return (
    <div className='w-full grid place-items-center'>
      <div className='container flex flex-col justify-center items-center'>
        <img className='' src={ExhibitionI} alt="" />
        <div className='lg:text-3xl text-xl bg-clip-text text-transparent runningGradient bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-poppins'>"Work In Progress"</div>
        <div className='lg:text-3xl text-xl bg-clip-text text-transparent runningGradient bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-poppins'>We'll Meet Soon.</div>
      </div>
    </div>
  )
}

export default Exhibition