import Image from "next/image";
import React from "react";

const CourseSpeciality = () => {
  return (
    <div>
      <section className="mx-auto flex w-full flex-col items-center justify-center py-16 sm:max-w-xl md:max-w-full lg:py-20">
        <div className="mb-10 max-w-md space-y-2.5 text-center md:mx-auto md:mb-12">
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:mx-auto text-center">
            What Is The Specialty Of{" "}
            <span className="text-gradient bg-clip-text text-transparent">
              This Course?
            </span>
          </h1>
          <p className="font-semibold text-slate-300/90">Let's Take A Look</p>
        </div>
        <div className="mb-8 grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="transform cursor-pointer rounded-[20px] border border-slate-500/50 bg-slate-800/50 px-5 py-10 text-center transition duration-200 ease-out hover:scale-x-110 hover:scale-y-105 lg:px-5 lg:py-5">
            <div className="mx-auto w-[20%]">
              <div
                className="relative shadow-black/5 shadow-none rounded-large mx-w-fit-content"
           
              >
                <Image
                 width={50}
                 height={50}
                  src="/freelancing-Job-placement-guide.png"
                  className="relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                  alt="Freelancing &amp; Job Placement Guide"
                />
              </div>
            </div>
            <p className="mb-3 mt-3 text-[17px] font-semibold text-gray-200">
              Freelancing & Job Placement Guide
            </p>
            <p className="mx-auto mb-2 max-w-xs text-gray-400">
              Only Serious Course Completers Will Get A Freelancing Guide And
              Job Placement Support From Zero To Until Success Your Career.
            </p>
          </div>
          <div className="transform cursor-pointer rounded-[20px] border border-slate-500/50 bg-slate-800/50 px-5 py-10 text-center transition duration-200 ease-out hover:scale-x-110 hover:scale-y-105 lg:px-5 lg:py-5">
            <div className="mx-auto w-[20%]">
              <div
                className="relative shadow-black/5 shadow-none rounded-large max-w-fit-content"
                
              >
                <Image
                 width={50}
                 height={50}
                  src="/contents-modules.png"
                  className="relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                  alt="600+ Contents &amp; 180+ Modules"
                />
              </div>
            </div>
            <p className="mb-3 mt-3 text-[17px] font-semibold text-gray-200">
              600+ Contents & 180+ Modules
            </p>
            <p className="mx-auto mb-2 max-w-xs text-gray-400">
              In This Course You Will Learn Everything It Takes To Become A
              Junior Frontend Web Developer. The Course Is Divided Into 120
              Modules & 400+ Recorded Contents For Step-By-Step Project Based
              Learning.
            </p>
          </div>
          <div className="transform cursor-pointer rounded-[20px] border border-slate-500/50 bg-slate-800/50 px-5 py-10 text-center transition duration-200 ease-out hover:scale-x-110 hover:scale-y-105 lg:px-5 lg:py-5">
            <div className="mx-auto w-[20%]">
              <div
                className="relative shadow-black/5 shadow-none rounded-large max-w-fit-content"
              
              >
                <Image
                 width={50}
                 height={50}
                  src="/recorded-live-session.png"
                  className="relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                  alt="Recorded &amp; Live Session"
                />
              </div>
            </div>
            <p className="mb-3 mt-3 text-[17px] font-semibold text-gray-200">
              Recorded & Live Session
            </p>
            <p className="mx-auto mb-2 max-w-xs text-gray-400">
              Learn Something New Everyday By Watching Recorded Conceptual
              Classes And Join Live Classes For Clearing Your Doubts.
            </p>
          </div>
          <div className="transform cursor-pointer rounded-[20px] border border-slate-500/50 bg-slate-800/50 px-5 py-10 text-center transition duration-200 ease-out hover:scale-x-110 hover:scale-y-105 lg:px-5 lg:py-5">
            <div className="mx-auto w-[20%]">
              <div
                className="relative shadow-black/5 shadow-none rounded-large max-w-fit-content"
        
              >
                <Image
                 width={50}
                 height={50}
                  src="/conceptual-crash-course.png"
                  className="relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                  alt="Conceptual Crash Course"
                />
              </div>
            </div>
            <p className="mb-3 mt-3 text-[17px] font-semibold text-gray-200">
              Conceptual Crash Course
            </p>
            <p className="mx-auto mb-2 max-w-xs text-gray-400">
              You Are Not Just Enrolling In One Course. It's A Mission To Learn
              Lifelong Programming Journey With Mentorship of Foysal Ahammed.
            </p>
          </div>
          <div className="transform cursor-pointer rounded-[20px] border border-slate-500/50 bg-slate-800/50 px-5 py-10 text-center transition duration-200 ease-out hover:scale-x-110 hover:scale-y-105 lg:px-5 lg:py-5">
            <div className="mx-auto w-[20%]">
              <div
                className="relative shadow-black/5 shadow-none rounded-large max-w-fit-content"
               
              >
                <Image
                 width={50}
                 height={50}
                  src="/projects.png"
                  className="relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                  alt="20+ Projects"
                />
              </div>
            </div>
            <p className="mb-3 mt-3 text-[17px] font-semibold text-gray-200">
              20+ Projects
            </p>
            <p className="mx-auto mb-2 max-w-xs text-gray-400">
              Everyday We Will Give You Particular Task. You Have To Spend 4-5
              Hours Watching, Practicing The Tutorial.The Videos Are Made
              Following Project Based Learning Process. You Will Do 20+ Projects
              In This Course.
            </p>
          </div>
          <div className="transform cursor-pointer rounded-[20px] border border-slate-500/50 bg-slate-800/50 px-5 py-10 text-center transition duration-200 ease-out hover:scale-x-110 hover:scale-y-105 lg:px-5 lg:py-5">
            <div className="mx-auto w-[20%]">
              <div
                className="relative shadow-black/5 shadow-none rounded-large max-w-fit-content"
         
              >
                <Image
                 width={50}
                 height={50}
                  src="/assignments.png"
                  className="relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                  alt="15+ Assignments"
                />
              </div>
            </div>
            <p className="mb-3 mt-3 text-[17px] font-semibold text-gray-200">
              15+ Assignments
            </p>
            <p className="mx-auto mb-2 max-w-xs text-gray-400">
              There Is No Chance Of Falling Behind, With A Module-Wise
              Structured Study Plan And Each Module There Will Be Assignments
              That You Will Do Yourself.
            </p>
          </div>
          <div className="transform cursor-pointer rounded-[20px] border border-slate-500/50 bg-slate-800/50 px-5 py-10 text-center transition duration-200 ease-out hover:scale-x-110 hover:scale-y-105 lg:px-5 lg:py-5">
            <div className="mx-auto w-[20%]">
              <div
                className="relative shadow-black/5 shadow-none rounded-large max-w-fit-content"
       
              >
                <Image
                 width={50}
                 height={50}
                  src="/unlimited-support.png"
                  className="relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                  alt="Unlimited Support"
                />
              </div>
            </div>
            <p className="mb-3 mt-3 text-[17px] font-semibold text-gray-200">
              Unlimited Support
            </p>
            <p className="mx-auto mb-2 max-w-xs text-gray-400">
              Everyday 12 Hours Special Team Will Waiting For Support To You In
              Live Video Conference Via Zoom Or Meet.
            </p>
          </div>
          <div className="transform cursor-pointer rounded-[20px] border border-slate-500/50 bg-slate-800/50 px-5 py-10 text-center transition duration-200 ease-out hover:scale-x-110 hover:scale-y-105 lg:px-5 lg:py-5">
            <div className="mx-auto w-[20%]">
              <div
                className="relative shadow-black/5 shadow-none rounded-large max-w-fit-content"
           
              >
                <Image
                width={50}
                height={50}
                  src="/rewards-and-recognition.png"
                  className="relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                  alt="Rewards And Recognition"
                />
              </div>
            </div>
            <p className="mb-3 mt-3 text-[17px] font-semibold text-gray-200">
              Rewards And Recognition
            </p>
            <p className="mx-auto mb-2 max-w-xs text-gray-400">
              You Are Not Just Enrolling In One Course. After Finishing The
              Course You Will Get Rewards Modules For Learning Advance And
              Latest Technology Crash Courses For Free Life Time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseSpeciality;
