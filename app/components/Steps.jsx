import Image from "next/image";
import React from "react";

const Steps = () => {
  return (
    <div>
      <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
        <h1 className="text-3xl font-bold text-white sm:text-4xl md:mx-auto text-center mb-2 mt-10 max-w-lg">
          What Are The Specialties Of this{" "}
          <span className="text-gradient bg-clip-text text-transparent">
          Javascript
          </span>{" "}
          Courses?
        </h1>
        <p className="mx-auto w-[90%] text-center text-base">
          You Will Get From Us After Enrollment The Course
        </p>
      </div>
      <section className="mx-auto max-w-5xl py-10">
        <div>
          <div className="flex flex-row">
            <div className="hidden flex-col items-center md:flex">
              <div className="mr-4 flex w-32 flex-col items-center justify-center rounded py-5 uppercase">
                <div className="text-3xl font-black">
                  <span className="text-gradient bg-clip-text text-transparent">
                    Step 1
                  </span>
                </div>
                <div className="text-sm">Learning</div>
              </div>
              <div className="h-full border-l-4 border-transparent">
                <div className="mr-4 h-full border-l-4 border-dashed border-slate-300"></div>
              </div>
            </div>
            <div className="flex-auto">
              <div className="flex flex-col items-center text-center md:flex-row">
                <div className="flex-auto">
                  <div className="pt-1 text-sm font-normal uppercase md:hidden">
                    <span className="p-2 text-primary-500">
                      Step 1: Learning
                    </span>
                  </div>
                  <div className="p-2 text-xl font-semibold capitalize sm:text-base md:text-3xl">
                    Everyday Particular Chapter
                  </div>
                  <div className="w-[100%] p-2 pb-6 sm:w-auto md:w-auto lg:w-auto">
                    Everyday We Will Give You Access Only One Chapter For Your
                    Productive Learning.There Is No Chance Of Falling Behind,
                    With A Module-Wise Structured Study Plan Packed With
                    Quizzes, Assignments & Practice Home Work For Interview
                    Preparation.
                  </div>
                </div>
                <div className="">
                  <div className="relative shadow-black/5 shadow-none rounded-large max-w-fit">
                    <Image
                      width={200}
                      height={200}
                      src="/img2.svg"
                      className="relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large pointer-events-none h-auto object-cover p-4 md:max-w-sm"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start">
            <div className="border-r-4 border-t-4 border-transparent">
              <div className="ml-16 h-16 w-16 rounded-bl-full border-b-4 border-l-4 border-dashed border-slate-300"></div>
            </div>
            <div className="flex-auto border-t-4 border-transparent">
              <div className="h-16 border-b-4 border-dashed border-slate-300"></div>
            </div>
            <div className="mr-16 mt-16 h-16 w-16 rounded-tr-full border-r-4 border-t-4 border-dashed border-slate-300"></div>
          </div>
          <div className="flex flex-row-reverse">
            <div className="hidden flex-col items-center md:flex">
              <div className="ml-4 flex w-32 flex-col items-center justify-center rounded py-5 uppercase">
                <div className="text-3xl font-black">
                  <span className="text-gradient bg-clip-text text-transparent">
                    Step 2
                  </span>
                </div>
                <div className="text-sm">Practicing</div>
              </div>
              <div className="h-full border-r-4 border-transparent">
                <div className="ml-4 h-full border-l-4 border-dashed border-slate-300"></div>
              </div>
            </div>
            <div className="flex-auto">
              <div className="flex flex-col items-center text-center md:flex-row">
                <div className="">
                  <div className="relative shadow-black/5 shadow-none rounded-large max-w-fit">
                    <Image
                      width={200}
                      height={200}
                      src="/img3.png"
                      className="relative z-10 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large pointer-events-none h-auto object-cover p-1 md:max-w-md"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex-auto">
                  <div className="pt-1 text-sm font-normal uppercase md:hidden">
                    <span className="p-2 text-primary-500">
                      Step 2: Practicing
                    </span>
                  </div>
                  <div className="p-2 text-xl font-semibold capitalize sm:text-base md:text-3xl">
                    Step By Step Project Based Teaching Method
                  </div>
                  <div className="w-[100%] p-2 pb-6 sm:w-auto md:w-auto lg:w-auto">
                    Everyday We Will Give You Particular Task. You Have To Spend
                    4-5 Hours Watching, Practicing The Tutorial. You Will Get
                    Access Assignment, Quiz & Home Work In Every Chapter And
                    Each Chapter Will Have 5-10 Pre-Recorded Videos So That You
                    Can Learn The Topics Step By Step. The Videos Are Made
                    Following Project Based Learning Process.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse items-start">
            <div className="border-l-4 border-t-4 border-transparent">
              <div className="mr-16 h-16 w-16 rounded-br-full border-b-4 border-r-4 border-dashed border-slate-300"></div>
            </div>
            <div className="flex-auto border-t-4 border-transparent">
              <div className="h-16 border-b-4 border-dashed border-slate-300"></div>
            </div>
            <div className="ml-16 mt-16 h-16 w-16 rounded-tl-full border-l-4 border-t-4 border-dashed border-slate-300"></div>
          </div>
          <div className="flex flex-row">
            <div className="hidden flex-col items-center md:flex">
              <div className="mr-4 flex w-32 flex-col items-center justify-center rounded py-5 uppercase">
                <div className="text-3xl font-black">
                  <span className="text-gradient bg-clip-text text-transparent">
                    Step 3
                  </span>
                </div>
                <div className="text-sm">Thinking</div>
              </div>
              <div className="h-full border-l-4 border-transparent">
                <div className="mr-4 h-full border-l-4 border-dashed border-slate-300"></div>
              </div>
            </div>
            <div className="flex-auto">
              <div className="flex flex-col items-center text-center md:flex-row">
                <div className="flex-auto">
                  <div className="pt-1 text-sm font-normal uppercase md:hidden">
                    <span className="p-2 text-primary-500">
                      Step 3: Thinking
                    </span>
                  </div>
                  <div className="p-2 text-xl font-semibold capitalize sm:text-base md:text-3xl">
                    Critical Thinking Ability
                  </div>
                  <div className="w-[100%] p-2 pb-6 sm:w-auto md:w-auto lg:w-auto">
                    You Will Have A Practice Day After Every 2-3 Chapter. There
                    Will Be A Conceptual Session On That Practice Day. So Not
                    Only You Are Learning Or Practicing, But You Will Also Get
                    Time To Think About How Exactly Programming Happens And You
                    Can Get Ready For Problem-Solving And Real-Life
                    Implementation.
                  </div>
                </div>
                <div className="">
                  <div className="relative shadow-black/5 shadow-none rounded-large max-w-fit ">
                    <Image
                      width={200}
                      height={200}
                      src="/img4.svg"
                      className="relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large pointer-events-none h-auto object-cover p-4 md:max-w-sm"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start">
            <div className="border-r-4 border-t-4 border-transparent">
              <div className="ml-16 h-16 w-16 rounded-bl-full border-b-4 border-l-4 border-dashed border-slate-300"></div>
            </div>
            <div className="flex-auto border-t-4 border-transparent">
              <div className="h-16 border-b-4 border-dashed border-slate-300"></div>
            </div>
            <div className="mr-16 mt-16 h-16 w-16 rounded-tr-full border-r-4 border-t-4 border-dashed border-slate-300"></div>
          </div>
          <div className="flex flex-row-reverse">
            <div className="hidden flex-col items-center md:flex">
              <div className="ml-4 flex w-32 flex-col items-center justify-center rounded py-5 uppercase">
                <div className="text-3xl font-black">
                  <span className="text-gradient bg-clip-text text-transparent">
                    Step 4
                  </span>
                </div>
                <div className="text-sm">Implementation</div>
              </div>
            </div>
            <div className="flex-auto">
              <div className="flex flex-col items-center text-center md:flex-row">
                <div className="flex-auto">
                  <div className="pt-1 text-sm font-normal uppercase md:hidden">
                    <span className="p-2 text-primary-500">
                      Step 4: Implementation
                    </span>
                  </div>
                  <div className="p-2 text-xl font-semibold capitalize sm:text-base md:text-3xl">
                    Started Journey Become a Junior developer
                  </div>
                  <div className="w-[100%] p-2 pb-6 sm:w-auto md:w-auto lg:w-auto">
                    Finally After 4-6 Month You Can Get Ready For IMPLEMENTATION
                    Your knowledge for make money by job or freelancing. it's
                    not easy but not impossible. i know you can do that. we will
                    always with you.
                  </div>
                </div>
                <div className="">
                  <div className="relative shadow-black/5 shadow-none rounded-large max-w-fit">
                    <Image
                      width={200}
                      height={200}
                      src="/img5.png"
                      className="relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large pointer-events-none h-auto object-cover p-4 md:max-w-sm"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Steps;
