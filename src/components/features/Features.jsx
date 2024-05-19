import React from 'react'

const Features = () => {
  return (
    <div>
     <h1 className='flex justify-center items-center text-white text-4xl mr-28 text-center font-semibold line-2 mt-24 gradient-Text8'>An All-Round Plugin With<br /> Powerful Features</h1>

     <p className='text-center text-gray-400  mt-5 text-lg gradient-Text9'>Whether you're a seasoned web designer or just starting out, Motion Art for <br /> Elementor seamlessly integrates with the Elementor platform, providing you <br /> with a seamless and intuitive experience.</p>



     <div className='grid grid-cols-3 ml-[10%] mr-[10%] mt-12 features'>

     <div className=" bg-white border shadow-sm rounded-2xl card4 transform transition duration-300 hover:scale-101 featureCard featureCard1 ">
        <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img9.png" alt="" className='relative right-6' />
        <div className="p-4 md:p-5">
            <h3 className="text-2xl font-bold text-white">
            Light Weight
            </h3>
            <p className="mt-4 text-gray-400">
            Motion Art for Elementor is designed to be lightweight.
            </p>

        </div>
    </div>
     <div className=" bg-white border shadow-sm rounded-2xl card4 transform transition duration-300 hover:scale-101 featureCard featureCard2">
        <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img6.png" alt="" className='relative right-6' />
        <div className="p-4 md:p-5">
            <h3 className="text-2xl font-bold text-white">
            100% Responsive
            </h3>
            <p className="mt-4 text-gray-400">
            Create a consistent visual experience across all devices.
            </p>

        </div>
    </div>
     <div className=" bg-white border shadow-sm rounded-2xl card4 transform transition duration-300 hover:scale-101 featureCard featureCard3">
        <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img7.png" alt="" className='relative right-6' />
        <div className="p-4 md:p-5">
            <h3 className="text-2xl font-bold text-white">
            User Friendly Interface
            </h3>
            <p className="mt-4 text-gray-400">
            Ensure a smooth experience for both applicants and administrators.
            </p>

        </div>
    </div>


     </div>
    </div>
  )
}

export default Features