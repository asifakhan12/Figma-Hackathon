import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <>
    <div className='flex justify-center items-center'>
    <div className='w-[300px] md:w-[880px] h-[192px] text-lightblack text-[15px] font-medium flex justify-between items-center
    '>
        <ul><h2 className="text-black">Icons</h2>
            <li >Air Force 1</li>
            <li>Huarache</li>
            <li>Air Max 90</li>
            <li>Air Max 95</li>
        </ul>
        <ul><h2 className="text-black">Shoes</h2>
            <li>All Shoes</li>
            <li>Custom Shoes</li>
            <li>Jordan Shoes</li>
            <li>Running Shoes</li>
        </ul>
        <ul><h2 className="text-black">Clothing</h2>
            <li>All Clothing</li>
            <li>Modest Wear</li>
            <li>Hoodies & Pullovers</li>
            <li>Shirts & Tops</li>
        </ul>
        <ul><h2 className="text-black">Kids</h2>
            <li>Infant & Toddler Shoes</li>
            <li>Kids Shoes</li>
            <li>Kids Jordan Shoes</li>
            <li>Kids Basketball Shoes</li>
        </ul>
    </div>
    </div>
    <div className='flex flex-col md:flex-row justify-evenly items-start bg-black py-10'>
    <div className='text-darkblack text-[15px] space-x-5 md:space-x-28 font-medium flex justify-between items-start'>
    <ul className='text-white'><h2 className="text-white">FIND A STORE</h2>
            <li >BECOME A MEMBER</li>
            <li>SIGN</li>
            <li>SEND US FEEDBACK</li>
            <li>STUDENT DISCOUNTS</li>
        </ul>
        <ul><h2 className="text-white">GET HELP</h2>
            <li >Order Status</li>
            <li>Delivery</li>
            <li>Returns</li>
            <li>Payments Options</li>
            <li>Contact Us on nike.com Inquiries</li>
            <li>Contact Us on All Other Inquiries</li>
        </ul>
        <ul><h2 className="text-white">ABOUT NIKE</h2>
            <li >News</li>
            <li>Career</li>
            <li>Investor</li>
            <li>Sustainability</li>
        </ul>
    </div>
    <div>
        <ul className='flex space-x-5 items-start '>
            <li>
                <Image src={'/assets/vector1.png'} width={30} height={30} alt='pic' />
            </li>
            <li>
                <Image src={'/assets/vector2.png'} width={30} height={30} alt='pic' />
            </li>
            <li>
                <Image src={'/assets/vector3.png'} width={30} height={30} alt='pic' />
            </li>
            <li>
                <Image src={'/assets/vector4.png'} width={30} height={30} alt='pic' />
            </li>
        </ul>
    </div>
    </div>
    <ul className='flex justify-start pl-5 md:pl-24 items-center py-8 bg-black text-white'>
        <li className="flex">
        <Image src={'/assets/map.png'} width={9.38} height={13.12} alt='map'/>
            <h2 className='text-[12px] font-normal mx-5'>India</h2>
        </li>
        <li><p className="text-darkblack ">© 2023 Nike, Inc. All Rights Reserved</p></li>
    </ul>
    </>
  )
}

export default Footer