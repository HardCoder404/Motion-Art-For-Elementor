import React from 'react'

const Footer = () => {
  return (    

<footer className="bottom-0 left-0 z-20 w-full footer shadow md:flex md:items-center md:justify-between md:p-4 dark:bg-gray-800 dark:border-gray-600 mt-28">

    <span className="copyright relative top-1.5 text-sm text-gray-300 ml-[10%] ">© 2023 <span>Copywrite</span>. All rights reserved by QodeMatrix
    </span>
    <ul className="relative top-1.5 flex flex-wrap text-sm font-medium text-gray-400 dark:text-gray-300 mr-[8%]">
        <li>
            <span className=" md:me-6 hover:cursor-pointer">Documentation</span>
        </li>
        <li>
            <span className="md:me-6 hover:cursor-pointer">Support</span>
        </li>
    </ul>
</footer>
  )
}

export default Footer