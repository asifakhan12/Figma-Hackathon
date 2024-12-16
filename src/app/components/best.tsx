import React from 'react'
import Image from "next/image"
const Best = () => {
  return (
    <div>
        <ul className='h-auto md:h-[52px] flex flex-col md:flex-row md:justify-between justify-evenly items-center md:px-10'>
            <li>
                <h2 className='font-medium text-[22px]'>Best of Air Max</h2>
            </li>
            <li className='flex justify-between items-center space-x-5'><p>Shop</p>
            <p className='h-[48px] w-[48px] text-[#cccccc] bg-lightwhite rounded-full flex justify-center items-center'>{"<"}</p>
            <p className='h-[48px] w-[48px] text-[#111111] bg-lightwhite rounded-full flex justify-center items-center'>{">"}</p>
            </li>
        </ul>
        <ul className='flex flex-col md:flex-row justify-evenly items-center'>
            <li className='h-auto md:h-[510.36px] w-[300px] md:w-[440.36px]'>
                <Image src={'/assets/best1.png'} width={441.36} height={441.36} alt="pic"/>
                <div className='w-[300px] md:w-[425.36px] h-[48px] flex justify-between items-center'>
                    <div>
                    <h2 className='font-medium text-[15px]'>Nike Air Max Pulse</h2>
                    <h2 className='font-normal text-[15px] text-lightblack'>Womens Shoes</h2>
                    </div>
                <p>₹ 13 995</p></div>
            </li>
            <li className='h-auto md:h-[510.36px] w-[300px] md:w-[440.36px] '>
                <Image src={'/assets/best2.png'} width={441.36} height={441.36} alt="pic"/>
                <div className='w-[300px] md:w-[425.36px] h-[48px] flex justify-between items-center'>
                    <div>
                    <h2 className='font-medium text-[15px]'>Nike Air Max Pulse</h2>
                    <h2 className='font-normal text-[15px] text-lightblack'>Mens Shoes</h2>
                    </div>
                <p>₹ 13 995</p></div>
            </li>
            <li className='h-auto md:h-[510.36px] w-[300px] md:w-[440.36px]'>
                <Image src={'/assets/best3.png'} width={441.36} height={441.36} alt="pic"/>
                <div className='w-[300px] md:w-[425.36px] h-[48px] flex justify-between items-center'>
                    <div>
                    <h2 className='font-medium text-[15px]'>Nike Air Max 97 SE</h2>
                    <h2 className='font-normal text-[15px] text-lightblack'>Mens Shoes</h2>
                    </div>
                <p>₹ 16 995</p></div>
            </li>
        </ul>
    </div>
  )
}
export default Best