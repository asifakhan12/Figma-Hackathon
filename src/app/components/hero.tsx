import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Hero = () => {
    return (
        <>
            <div className="h-[58px] bg-lightwhite flex flex-col justify-center items-center">
                <h2 className="font-medium text-[15px]">Hello Nike App
                </h2>
                <p className='text-[11px] font-normal'>Download the app to access everything Nike.<Link href="#" className='border-b-2 border-black'>Get Your Great</Link></p>
            </div>
            <div className='flex flex-col justify-evenly h-auto items-center'>

                <Image src={'/assets/Image.png'} width={1344} height={700} alt='pic' />
            <div className=' w-[300px] md:w-[1008px] md:h-[229px] h-auto flex flex-col justify-between items-center my-8'>
                <p className='text-[15px] font-medium'>First Look</p>
                <h2 className='text-[56px] font-medium'>Nike Air Max Pulse</h2>
                <p className="text-[15px] font-normal w-[300px] md:w-[511px]">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
                    —designed to push you past your limits and help you go to the max.</p>
                <div>
                    <button className='bg-black text-white text-[15px] font-medium rounded-full w-[110.58px] h-[39px]'>Notify Me</button>
                    <button className='bg-black text-white text-[15px] font-medium rounded-full w-[110.58px] h-[39px] ml-4'>Shop Air Max</button>
                </div>
                </div>
            </div>

        </>
    )
}

export default Hero