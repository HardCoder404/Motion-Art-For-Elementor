import React from 'react'

const SectionCard = () => {
  return (
    <div>
      <h1 className='flex justify-center items-center text-white text-4xl mr-28 text-center font-semibold line-2 mt-24 gradient-Text7'>Apply On Any Section Or Enable <br /> For Whole Page</h1>

      <div className='flex sectionCard'>
        <div className="card1 block max-w-sm p-6 border card rounded-2xl transform transition duration-300 hover:scale-101 ">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Apply On Section</h5>
        <p class="font-medium text-gray-400 dark:text-gray-400 mb-8 mt-4">Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.</p>

        <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img11.png" alt=""/>
        </div>

        <div className="card2 block max-w-sm p-6 border card2 rounded-2xl transform transition duration-300 hover:scale-101">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Apply On Page</h5>
        <p class="font-medium text-gray-400 dark:text-gray-400 mb-8 mt-4">Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>

        <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img10.png" alt=""  />
        </div>

      </div>
    </div>
  )
}

export default SectionCard