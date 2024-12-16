import React from 'react'
import Image from 'next/image'
const Gear = () => {
  return (
    <>
     <h2 className="text-[23px] font-medium pl-2 mb-5">Gear Up</h2>
    <div className='flex flex-col md:flex-row justify-evenly items-center'>
        <div>
        <ul className='my-5 h-[52px] flex justify-end items-center w-[300px] md:w-[630px]'>
            <li className='flex justify-between items-center space-x-5'><p>Shop Mens</p>
            <p className='h-[48px] w-[48px] text-[#cccccc] bg-lightwhite rounded-full flex justify-center items-center'>{"<"}</p>
            <p className='h-[48px] w-[48px] text-[#111111] bg-lightwhite rounded-full flex justify-center items-center'>{">"}</p>
            </li>
        </ul>
        <ul className='flex flex-col md:flex-row justify-evenly items-center w-[300px] md:w-[650px]'>
            <li className='w-[300px] h-[393px] '>
                <Image src={'/assets/gear1.png'} width={441.36} height={441.36} alt="pic"/>
                                <div className='w-[284px] h-[72px] flex justify-between items-center'>
                                    <div>
                                    <h2 className='font-medium text-[15px]'>Nike Dri-FIT ADV TechKnit Ultra</h2>
                                    <h2 className='font-normal text-[15px] text-lightblack'>Mens Short-Sleeve Running Top</h2>
                                    </div>
                                <p>₹ 3 895</p></div>
            </li>
            <li className='w-[300px] h-[393px] '>
                <Image src={'/assets/gear2.png'} width={441.36} height={441.36} alt="pic"/>
                                <div className='w-[284px] h-[72px] flex justify-between items-center'>
                                    <div className='pt-5'>
                                    <h2 className='font-medium text-[15px]'>Nike Dri-FIT Challenger</h2>
                                    <h2 className='w-[199.78px]   font-normal text-[16px] text-lightblack'>Mens 18cm (approx.) 2-in-1 Versatile Shorts</h2>
                                    </div>
                                <p>₹ 2 495</p></div>
            </li>
        </ul>
        </div>
        
        <div className="">
        <ul className='my-5 h-[52px] flex justify-end items-center w-[300px] md:w-[630px]'>
            <li className='flex justify-between items-center space-x-5'><p>Shop Womens</p>
            <p className='h-[48px] w-[48px] text-[#cccccc] bg-lightwhite rounded-full flex justify-center items-center'>{"<"}</p>
            <p className='h-[48px] w-[48px] text-[#111111] bg-lightwhite rounded-full flex justify-center items-center'>{">"}</p>
            </li>
        </ul>
        <ul className='flex flex-col md:flex-row justify-evenly items-center w-[300px] md:w-[650px]'>
            <li className='w-[300px] h-[393px] '>
                <Image src={'/assets/gear3.png'} width={441.36} height={441.36} alt="pic"/>
                                <div className='w-[284px] h-[72px] flex justify-between items-center'>
                                    <div>
                                    <h2 className='font-medium text-[15px]'>Nike Dri-FIT ADV Run Division</h2>
                                    <h2 className='font-normal text-[15px] text-lightblack'>Womens Long-Sleeve Running Top</h2>
                                    </div>
                                <p>₹ 5 295</p></div>
            </li>
            <li className='w-[300px] h-[393px] '>
                <Image src={'/assets/gear4.png'} width={441.36} height={441.36} alt="pic"/>
                                <div className='w-[284px] h-[72px] flex justify-between items-center'>
                                    <div className='pt-5'>
                                    <h2 className='font-medium text-[15px]'>Nike Fast</h2>
                                    <h2 className='w-[224.39px]   font-normal text-[16px] text-lightblack'>Womens Mid-Rise 7/8 Running Leggings with Pockets</h2>
                                    </div>
                                <p>₹ 3 795</p></div>
            </li>
        </ul>
        </div>
    </div>
    </>
  )
}

export default Gear