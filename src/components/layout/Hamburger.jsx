import React from 'react'

const Hamburger = ({setMenu, menu}) => {
    const handleMenu = () => {
        console.log(menu)
        setMenu(!menu)
    }
  return (
    <div onClick={handleMenu} className='relative lg:hidden flex gap-2 flex-col justify-between items-center w-[3rem] border-2 border-[#e2fdff] rounded-md p-1 cursor-pointer'>
        <div className={`${menu ? 'origin-top-left rotate-45 w-full translate-x-[20%]' : 'w-full'} transition-all bg-[#e2fdff] h-[4px] rounded-md`}></div>
        <div className={`${menu ? 'w-0' : 'w-full'} transition-all bg-[#e2fdff] h-[4px] rounded-md`}></div>
        <div className={`${menu ? 'origin-bottom-left rotate-[-45deg] w-full translate-x-[20%]' : 'w-full'} transition-all bg-[#e2fdff] h-[4px] rounded-md`}></div>
    </div>
  )
}

export default Hamburger