import React from "react";
import Image from "next/image";
const CustomerSupport = () => {
  return (
    <section class="row-gap-8 mx-auto grid gap-5 py-5 md:py-16 lg:mt-5 lg:grid-cols-2 lg:gap-12 lg:py-20">
      <div class="mx-auto flex max-w-xl flex-col justify-center text-center md:text-start lg:mb-6">
        <h1 class="text-3xl font-bold sm:text-4xl md:mx-auto text-center mb-6 text-current md:text-start">
          Please Contact With Our{" "}
          <span class="bg-gradient-to-r from-primary-500 to-success-500 bg-clip-text text-transparent">
            Support Team
          </span>
        </h1>
        <p class="text-base text-gray-400 md:text-lg">
          <span class="mb-5">
            We Have Created A Strong Support Team To Help You 16 Hours Everyday.
            For This Course We Have a Private Discord Server, Private Facebook
            Group And Live Support Team.
          </span>
          <span>
            Where Course Instructor Eshan Ahmed Ahad And 4-5 Others Software
            Engineer Waiting For To Support You. We promise to answer your
            questions within 6 hours maximum.
          </span>{" "}
          <span>
            But in most cases you will get the answer in less time than that.
            Besides, every week there will be live session on the discussed
            module where you can directly ask questions and get answers.
          </span>
        </p>
        <div class="flex justify-center md:mb-0 md:justify-normal lg:mb-[70px]">
          <a
            class="btn-grad z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 min-w-24 h-12 text-medium gap-3 rounded-small [&amp;&gt;svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none shadow-lg shadow-primary/40 bg-primary text-primary-foreground data-[hover=true]:opacity-hover mt-8 px-10"
            role="button"
            tabindex="0"
            href="tel:+880%201816986263"
          >
            Call Us
          </a>
        </div>
      </div>
      <div
        class="relative shadow-black/5 max-w-fit shadow-none rounded-large"
        
      >
        <Image
          width={640}
          height={500}
          src="/contact.png"
          class="relative z-10   shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large mt-5"
          alt=""
        />
      </div>
    </section>
  );
};

export default CustomerSupport;
