import { faImages } from '@fortawesome/free-regular-svg-icons'
import { faCamera, faFileImage, faImagePortrait } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import gallery from './images/gallery'

const Gallery = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='container flex gap-3 lg:gap-5 flex-col items-center md:items-start border-t-2 border-[#e2fdff]'  id='gallery'>
        <div className='lg:relative flex flex-col justify-center items-center lg:justify-start lg:items-start lg:flex-row font-poppins lg:h-[19rem] w-full'>
          <div className='lg:text-6xl flex lg:h-fit text-4xl lg:font-medium'>My
          <div className='self-end text-2xl lg:text-3xl tracking-widest'>Gallery</div>
          </div>
          <div className='text-sm bg-transparent lg:absolute lg:top-[1.5rem] lg:hover:rotate-0 lg:transition-all cursor-pointer lg:rotate-6 lg:left-[14.5rem] lg:rounded-md lg:z-10 lg:w-[17.5rem] lg:grid lg:place-items-center lg:h-[17.5rem] lg:bg-clip-padding lg:backdrop-filter lg:backdrop-blur-sm lg:bg-gray-400 lg:border-gray-100 lg:bg-opacity-30'>
          The Photography Gallery is a space dedicated to showcasing the work of talented photographers. Featuring a wide range of styles, from portraiture to landscapes, the gallery offers a chance to appreciate the beauty of the world around us through the lens of some of the best photographers
          </div>
        </div>
         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
         {
            gallery.map(item => {
                return (
                    <div className='relative w-fit h-full overflow-hidden rounded-md md:ring-4 md:ring-[#e2fdff]/30 md:dark:ring-[#e2fdff]/50'>
                        <img className='w-[20rem] h-[20rem] peer object-center object-cover' src={item} alt="" />
                        <div className='lg:absolute lg:top-0 lg:peer-hover:w-0 lg:cursor-pointer lg:hover:w-[0px] transition-all lg:w-full lg:h-full lg:bg-black/50'></div>
                    </div>
                )
            })
         }
         </div>
    </div>
    </div>
  )
}

export default Gallery