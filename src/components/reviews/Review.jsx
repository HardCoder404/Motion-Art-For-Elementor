import React from 'react'

const Review = () => {
  return (
    <div className=''>
        <div className='w-full flex justify-center'>  
            <h1 className='text-white font-medium text-xl gradient-Text4'>Trusted by thousands of users around the world</h1>
        </div>

        <div className='grid grid-cols-3 gap-64 ml-32 mr-36 mt-20 review'>
            <div className='flex gap-3 review1'>
                <div>
                    <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img2.png" alt="" className='transform transition duration-300 hover:scale-101' />
                </div>
                <div className='flex flex-col justify-center'>
                    <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img4.png" alt="" />
                    <h1 className='mt-3 font-medium text-gray-400'>4.5 Score, 9 Reviews</h1>
                </div>
            </div>

            <div className='flex gap-3 review1'>
                <div>
                    <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img1.png" alt="" className='transform transition duration-300 hover:scale-101'/>
                </div>
                <div className='flex flex-col justify-center'>
                    <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img4.png" alt="" />
                    <h1 className='mt-3 font-medium text-gray-400'>4.5 Score, 9 Reviews</h1>
                </div>
            </div>

            <div className='flex gap-3 review1 review3'>
                <div>
                    <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img3.png" alt="" className='transform transition duration-300 hover:scale-101'/>
                </div>
                <div className='flex flex-col justify-center'>
                    <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img4.png" alt="" />
                    <h1 className='mt-3 font-medium text-gray-400'>4.5 Score, 9 Reviews</h1>
                </div>
            </div>
        </div>



        <div className='flex ml-36 mt-28 justify-between mr-36 gradientFlex'>
            <div className='flex flex-col'>
                <h3 className='text-white text-4xl w-[590px] font-semibold gradient-Text5'>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h3>
                <p className='text-lg text-gray-400 mt-5 w-[47rem] gradient-Text6'>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>

        <button className="purchaseButton flex items-center justify-center text-white purchasebtn rounded-2xl text-xl text-center me-2 mb-2 w-80 h-14 gap-3 mt-10">
                
                Purchase From Envato 
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
        </button>

            </div>

            <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img5.png" alt="" />
        </div>
        
    </div>
  )
}

export default Review