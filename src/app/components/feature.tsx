import React from 'react'
import Image from 'next/image'

const Feature = () => {
  return (
    <div>
        <h2 className="text-[23px] font-medium pl-2 mb-5">Featured</h2>
        <div className='flex flex-col justify-evenly h-auto items-center'>
        
                        <Image src={'/assets/feature.png'} width={1344} height={700} alt='pic' />
                    <div className=' w-[300px] md:w-[1008px] md:h-[177px] h-auto flex flex-col justify-between items-center my-8'>
                        <h2 className='text-[25px] md:text-[54px] font-medium'>STEP INTO WHAT FEELS GOOD</h2>
                        <p className="text-[15px] font-normal w-[300px] md:w-[511px]">Cause everyone should know the feeling of running in that perfect pair.</p>
                            <button className='bg-black text-white text-[15px] font-medium rounded-full w-[152.42px] h-[39px]'>Find Your Shoe</button>
                        </div>
                    </div>
    </div>
  )
}

export default Feature
