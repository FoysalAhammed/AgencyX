import Image from 'next/image'
import React from 'react'

const Instructor = () => {
  return (
  <div>
        <div className= "mx-auto mb-20 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className=
      "mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
        <h1 className=
        "text-3xl font-bold text-white sm:text-4xl md:mx-auto text-center mb-6">
        Lead <span className=
        "text-gradient bg-clip-text text-transparent">
        Instructor</span></h1>
      </div>
      <div className=
      "grid max-w-screen-lg sm:mx-auto lg:grid-cols-2">

                <div className=
                "relative shadow-black/5 shadow-none rounded-large max-w-fit "
                ><Image width={450} height={400} src=
                "/profile1.png" className=
                "relative z-10 w-full shadow-black/5  shadow-none   rounded-large FounderImg h-auto max-w-md object-cover md:max-w-sm"
                alt=""/>
                </div>

      
      
        <div className=
        "instructorDetailsBorder flex flex-col justify-center border-l-2 border-indigo-500 ps-[50px] text-white">
          <div>
            <div className=
            "text-sm capitalize tracking-wide text-gray-400">
              <p>MD FOYSAL AHAMMED is a full stack web developer.
              He has been involved in web development and
              software profession for 4+ years.</p><br/>
              <p>At the time of className 9, Out of love for
              programming and passion for teaching people,
              Foysal founded Programmer Platform in
              February 2021 which has around 200+
              programming related video tutorials.</p><br/>
              <p>More than 250,00 people are learning free
              programming from Programming Community
              channel and public Facebook group.</p>
            </div>
            <div className="mt-5">
              <p className="font-semibold">Md Foysal Ahammed</p>
              <p className="font-semibold">JAVASCRIPT INSTRUCTOR -
              LEARN TECH </p>
            
              <p className="mt-3 text-[15px] text-gray-400">
              Trade License:<span className=
              "font-sans">TRAD/6NOGUPN/00034450/2023</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Instructor