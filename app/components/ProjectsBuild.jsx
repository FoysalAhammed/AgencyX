import React from 'react'
import Image from 'next/image'
const ProjectsBuild = () => {
  return (

         <section className="pt-10 md:pt-16 xl:pt-20">
              <h1 className=
              "text-3xl font-bold text-white sm:text-4xl md:mx-auto text-center">
              Projects that you  <span className=
              "text-gradient bg-clip-text text-transparent">
              build with us</span></h1>
              <div className=
              "overflow-y-auto data-[top-scroll=true]:[mask-image:linear-gradient(0deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] data-[bottom-scroll=true]:[mask-image:linear-gradient(180deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] data-[top-bottom-scroll=true]:[mask-image:linear-gradient(#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] scrollbar-hide my-20 h-[520px]"
              data-orientation="vertical" >
                <div className=
                "grid grid-cols-1 gap-2.5 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
                  <div className=
                  "flex flex-col relative overflow-hidden text-foreground box-border bg-content1 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none h-[500px] w-full"
                  tabIndex="-1">
                    <div className=
                    "relative shadow-black/5 shadow-none rounded-large max-w-fit"
                    ><Image width={500} height={500} src=
                    "/my-feedback.png" className=
                    "relative  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large z-0 h-full w-full -translate-y-0 object-cover"
                    alt="My feedback"/></div>
                    <div className=
                    "p-3 h-auto flex w-full items-center overflow-hidden color-inherit subpixel-antialiased rounded-b-large backdrop-blur backdrop-saturate-150 absolute bottom-0 z-10 justify-between border-t-1 border-slate-500/50 bg-slate-950/70">
                      <h1>My feedback</h1><button className=
                      "z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-3 min-w-16 h-8 gap-2 rounded-full [&amp;&gt;svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none shadow-lg  !clr-blue data-[hover=true]:opacity-hover text-tiny"
                      type="button">View</button>
                    </div>
                  </div>
                  <div className=
                  "flex flex-col relative overflow-hidden text-foreground box-border bg-content1 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none h-[500px] w-full"
                  tabIndex="-1">
                    <div className=
                    "relative shadow-black/5 shadow-none rounded-large max-w-fit"
                   ><Image width={500} height={500} src=
                    "/yoursong.png" className=
                    "relative  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large z-0 h-full w-full -translate-y-0 object-cover"
                    alt="Your Song"/></div>
                    <div className=
                    "p-3 h-auto flex w-full items-center overflow-hidden color-inherit subpixel-antialiased rounded-b-large backdrop-blur backdrop-saturate-150 absolute bottom-0 z-10 justify-between border-t-1 border-slate-500/50 bg-slate-950/70">
                      <h1>Your Song</h1><button className=
                      "z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-3 min-w-16 h-8 gap-2 rounded-full [&amp;&gt;svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none shadow-lg  !clr-blue data-[hover=true]:opacity-hover text-tiny"
                      type="button">View</button>
                    </div>
                  </div>
                  <div className=
                  "flex flex-col relative overflow-hidden text-foreground box-border bg-content1 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none h-[500px] w-full"
                  tabIndex="-1">
                    <div className=
                    "relative shadow-black/5 shadow-none max-w-fit rounded-large"
                    ><Image width={500} height={500} src=
                    "/creatives-full.png" className=
                    "relative  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large z-0 h-full w-full -translate-y-0 object-cover"
                    alt="Creatives"/></div>
                    <div className=
                    "p-3 h-auto flex w-full items-center overflow-hidden color-inherit subpixel-antialiased rounded-b-large backdrop-blur backdrop-saturate-150 absolute bottom-0 z-10 justify-between border-t-1 border-slate-500/50 bg-slate-950/70">
                      <h1>Creatives</h1><button className=
                      "z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-3 min-w-16 h-8 gap-2 rounded-full [&amp;&gt;svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none shadow-lg  !clr-blue data-[hover=true]:opacity-hover text-tiny"
                      type="button">View</button>
                    </div>
                  </div>
                  <div className=
                  "flex flex-col relative overflow-hidden text-foreground box-border bg-content1 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none h-[500px] w-full"
                  tabIndex="-1">
                    <div className=
                    "relative shadow-black/5 shadow-none max-w-fit rounded-large"
                    ><Image width={500} height={500} src=
                    "/mypay.png" className=
                    "relative  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large z-0 h-full w-full -translate-y-0 object-cover"
                    alt="My Pay"/></div>
                    <div className=
                    "p-3 h-auto flex w-full items-center overflow-hidden color-inherit subpixel-antialiased rounded-b-large backdrop-blur backdrop-saturate-150 absolute bottom-0 z-10 justify-between border-t-1 border-slate-500/50 bg-slate-950/70">
                      <h1>My Pay</h1><button className=
                      "z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-3 min-w-16 h-8 gap-2 rounded-full [&amp;&gt;svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none shadow-lg  !clr-blue data-[hover=true]:opacity-hover text-tiny"
                      type="button">View</button>
                    </div>
                  </div>
                  <div className=
                  "flex flex-col relative overflow-hidden text-foreground box-border bg-content1 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none h-[500px] w-full"
                  tabIndex="-1">
                    <div className=
                    "relative shadow-black/5 shadow-none max-w-fit rounded-large"
                    ><Image width={500} height={500} src=
                    "/chills-bay.png" className=
                    "relative  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large z-0 h-full w-full -translate-y-0 object-cover"
                    alt="Chills Bay"/></div>
                    <div className=
                    "p-3 h-auto flex w-full items-center overflow-hidden color-inherit subpixel-antialiased rounded-b-large backdrop-blur backdrop-saturate-150 absolute bottom-0 z-10 justify-between border-t-1 border-slate-500/50 bg-slate-950/70">
                      <h1>Chills Bay</h1><button className=
                      "z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-3 min-w-16 h-8 gap-2 rounded-full [&amp;&gt;svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none shadow-lg  !clr-blue data-[hover=true]:opacity-hover text-tiny"
                      type="button">View</button>
                    </div>
                  </div>
                  <div className=
                  "flex flex-col relative overflow-hidden text-foreground box-border bg-content1 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none h-[500px] w-full"
                  tabIndex="-1">
                    <div className=
                    "relative shadow-black/5 shadow-none rounded-large max-w-fit"
                ><Image width={500} height={500} src=
                    "/disastersi.png" className=
                    "relative  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large z-0 h-full w-full -translate-y-0 object-cover"
                    alt="Disastersi"/></div>
                    <div className=
                    "p-3 h-auto flex w-full items-center overflow-hidden color-inherit subpixel-antialiased rounded-b-large backdrop-blur backdrop-saturate-150 absolute bottom-0 z-10 justify-between border-t-1 border-slate-500/50 bg-slate-950/70">
                      <h1>Disastersi</h1><button className=
                      "z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-3 min-w-16 h-8 gap-2 rounded-full [&amp;&gt;svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none shadow-lg  !clr-blue data-[hover=true]:opacity-hover text-tiny"
                      type="button">View</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  
  )
}

export default ProjectsBuild