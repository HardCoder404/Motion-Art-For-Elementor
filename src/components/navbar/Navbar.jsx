import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="dark:bg-gray-900 fixed w-full z-20 top-0 start-0  dark:border-gray-600 bg-[#262626]">
    <div className="flex flex-wrap items-center justify-between mb-1 mr-5 h-[50px] ml-5">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse h-[18px] w-[152px]">
        <img src="https://public-assets.envato-static.com/assets/logos/envato_market-dde916a48af7413e54aa058fe7ae6856752fca799da4bec355f00aea904bfa19.svg" className="h-8 navLogo" alt="/"/>
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
    </a>
        <div className=""> 
            <button type="button" className="buyNowBtn text-white bg-[#82b440] font-medium rounded-md pl-[20px] pr-[20px] text-[14px] mt-1 py-[6px] text-center hover:bg-[#7dab42]" style={{ boxShadow: '0 2px 0 #6f9a37' }}>Buy now</button>
        </div>

    </div>
  </nav>
  </div>
  )
}

export default Navbar