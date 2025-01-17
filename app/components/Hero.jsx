import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="img-mask flex min-h-[90svh] w-full items-center justify-center bg-opacity-50 bg-pattern p-2.5 px-0 sm:p-5">
      <div className="container mx-auto max-w-screen-2xl px-3 sm:px-6">
        <div className="relative flex w-full flex-col-reverse items-center justify-center gap-5 lg:flex-row lg:justify-evenly lg:gap-10">
      
          <div className="absolute left-0 top-0 z-0 h-[450px] w-[430px] rotate-45 bg-gradient-to-l from-primary-500 to-cyan-500/50 opacity-30 blur-[150px] filter dark:opacity-50"></div>
          <div className="absolute -bottom-[18%] right-0 z-0 h-[400px] w-[400px] -rotate-90 bg-gradient-to-l from-primary-500 to-success-100 opacity-50 blur-[150px] filter dark:opacity-50"></div>
          <div className="relative z-10 space-y-5 lg:w-full">
            <h1 className="text-3xl font-extrabold !leading-tight text-slate-50 sm:text-5xl lg:text-4xl xl:text-4xl 2xl:text-4xl">
              Learn Limitless To
              <br />
              Build Your
              <span className="text-gradient bg-clip-text text-transparent">
                &nbsp;Self-Esteem
              </span>
            </h1>
            <p className="pb-2.5 text-sm text-slate-300/95 sm:pb-5 md:max-w-full md:text-base lg:text-sm xl:max-w-lg xl:text-base">
              We Strongly believe In Personalized Learning & Empower Individuals
              To Kick-Start their careers. There Is No Chance Of Falling Behind,
              With A Module-Wise Structured & Project Based Study Plan Packed
              With Quizzes, Assignments, Practice Homework For Interview
              Preparation & Special Guidance For Freelancing In Just One Course.
            </p>
            <a
              className="z-0 btn-grad group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent  min-w-20 h-10 text-small gap-2 rounded-small  shadow-lg shadow-primary/40 bg-primary text-primary-foreground  px-5"
              role="button"
              tabIndex="0"
              href="/courses"
            >
              View Courses
            </a>
          </div>
          <div className="relative z-10 w-[90%] lg:w-full">
            <Image
              alt="hero"
              loading="lazy"
              width="750"
              height="400"
              decoding="async"
              data-nimg="1"
              className="mx-auto h-auto w-full md:w-[90%] 2xl:w-full bg-transparent "
              src="/hero-img.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
