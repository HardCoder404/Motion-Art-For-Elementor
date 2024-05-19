import React from 'react';

const AboutHome = () => {
  return (
    <div className='p-[85px] pl-[140px] aboutHome'>
        <div className='w-full flex justify-between items-center'>
            <img src="https://qodematrix.com/wp-content/uploads/2023/10/MotionArtEffect-logo.png" alt="" className='hover:cursor-pointer logo' />
            <button type="button" className="purchaseBtn px-10 h-[53px] border-2 mb-2 text-md font-medium text-gray-900 bg-white rounded-md mr-12 hover:bg-transparent hover:text-white hover:border-2 z-10 ">
           Purchase Now
        </button>
        </div>


        <div className='w-full flex text1'>
        <div className='w-[25%] text1'>
            <h1 className="gradient-Text mt-24 text-xl font-medium ">Transform <br />Your Website</h1>
            <h3 className='gradient-Text1 text-white text-lg mt-3'>With Motion Art <br />  Effect</h3>
        </div>
        <div className='w-[50%] '>
           <h3 className='text-white text-7xl font-semibold mt-24 line gradient-Text2'>Attract Your <br /> Visitors Attention With Colorful 
           <p className='gradient-text transform transition duration-300 hover:scale-x-101'>Motion Art Effect</p></h3>
           <p className='mt-5 text-gray-400 text-lg font-semibold gradient-Text3'>Unleash the power of creativity with Motion Art for Elementor - your <br /> ultimate solution for seamlessly integrating captivating animations into <br /> your website.</p>

        </div>
        </div>
    </div>
  )
}   

export default AboutHome