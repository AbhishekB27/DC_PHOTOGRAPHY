import { faImages } from '@fortawesome/free-regular-svg-icons'
import { faCamera, faFileImage, faImagePortrait } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import gallery from './images/gallery'

const Gallery = () => {
  return (
    <div className='flex flex-col items-center md:items-start gap-3 py-4'  id='gallery'>
        <div className='text-xl sm:text-3xl md:text-4xl text-center md:text-left space-y-3 font-dancingScript'>
          <div>WELCOME TO</div>
          <div className=''>DC PHOTOGRAPHY <FontAwesomeIcon className='lg:hover:scale-110 cursor-pointer transition-all' icon={faCamera}/> GALLERY <FontAwesomeIcon className='lg:hover:scale-110 cursor-pointer transition-all' icon={faImages}/> </div>
        </div>
         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
         {
            gallery.map(item => {
                return (
                    <div className='relative w-fit h-full overflow-hidden rounded-md'>
                        <img className='w-[20rem] h-[20rem] peer object-center object-cover' src={item} alt="" />
                        <div className='lg:absolute lg:top-0 lg:peer-hover:w-0 lg:cursor-pointer lg:hover:w-[0px] transition-all lg:w-full lg:h-full lg:bg-black/50'></div>
                    </div>
                )
            })
         }
         </div>
    </div>
  )
}

export default Gallery