import React from 'react'
import Image from 'next/image'
import { FaRegHeart } from "react-icons/fa";
import { PiBagSimpleBold } from "react-icons/pi";
const Nav = () => {
  return (
    <div className='h-auto md:h-[96px]'>
        <div className='h-auto md:h-[36px] bg-lightwhite flex justify-between px-10 items-center'>
            <div><Image src={'/assets/vector.png'} alt='pic' width={19.2} height={17.97}/></div>
            <ul className='w-[272.81px] text-[11px] font-medium flex justify-evenly'>
                <li >Find a Store</li>
                <li className='border-l-2 border-black pl-5'>Help</li>
                <li className='border-l-2 border-black pl-5'>Join Us</li>
                <li className='border-l-2 border-black pl-5'>Sign In</li>
            </ul>
        </div>
        <div className='h-[100px] md:h-[60px] bg-white flex flex-col md:flex-row justify-evenly md:justify-between items-center my-5 md:px-10'>
            <Image src={"/assets/nike.png"} width={58.85} height={20.54} alt='logo' />
            <ul className=' text-[15px] font-medium flex items-center space-x-3 md:space-x-10'>
                <li>New & Featured</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Sale</li>
                <li>SNKRS</li>
            </ul>
            <ul className='flex items-center space-x-3 md:space-x-8'>
                <li><input type="text" placeholder='Search' className='w-[180px] h-[40px] bg-lightwhite text-center rounded-full'/></li>
                <li><FaRegHeart className='w-[24px] h-[24px]'/>
                </li>
                <li><PiBagSimpleBold className='w-[24px] h-[24px]' /></li>
            </ul>
        </div>
    </div>
  )
}

export default Nav