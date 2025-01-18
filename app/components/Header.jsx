"use client";
import Image from 'next/image'
import React, { useEffect } from 'react'

const Header = () => {


    useEffect(()=>{
        const handleScroll = ()=>{
            const header = document.querySelector("nav");
            if (header) {
                header.classList.toggle("sticky", window.scrollY > 200);
            }
        }
        window.addEventListener("scroll",handleScroll);
        
        return()=>{
          window.removeEventListener("scroll",handleScroll)
        }
    },[])
  return (

    <nav className="flex w-full   h-[75px]  items-center justify-center data-[menu-open=true]:border-none sticky top-0 inset-x-0 border-b border-divider backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 z-50 bg-slate-100/10 py-1.5 dark:bg-slate-800/10" >
      <header className="z-40 flex px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between h-[var(--navbar-height)] max-w-[1536px]">
        <ul className="flex gap-4 h-full flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0" data-justify="start">
         <li className=
              "flex basis-0 flex-row flex-grow flex-nowrap justify-start bg-transparent items-center no-underline text-medium whitespace-nowrap box-border max-w-fit gap-3">
                <a className=
                "flex items-center justify-start gap-1 transition-transform hover:scale-[1.02]"
                href="/">
            Learn Tech BD

                </a>
                </li> 
        </ul>
        <ul className="flex gap-4 h-full flex-row flex-nowrap items-center  space-x-2." data-justify="end">
          <div className="hidden gap-5 md:flex lg:gap-10"></div>
          <li className="text-medium whitespace-nowrap box-border list-none  flex relative h-full items-center  font-medium text-slate-300 transition-all delay-100 hover:text-primary-500 sm:text-lg lg:text-xl">
            <a color="foreground" href="/">Home</a>
          </li>
          <li className="text-medium whitespace-nowrap box-border list-none  flex relative h-full items-center  font-medium text-slate-300 transition-all delay-100 hover:text-primary-500 sm:text-lg lg:text-xl">
            <a color="foreground" href="/">Courses</a>
          </li>
          <li className="text-medium whitespace-nowrap box-border list-none  flex relative h-full items-center  font-medium text-slate-300 transition-all delay-100 hover:text-primary-500 sm:text-lg lg:text-xl">
            <a color="foreground" href="/">Services</a>
          </li>
      
        </ul>
      </header>
    </nav>  )
}

export default Header