import Image  from 'next/image'
import React from 'react'

const WhatWillLearn = () => {
  return (
   
         <section className=
            "row-gap-8 relative mx-auto grid w-full gap-12 lg:grid-cols-2">
              <div className="mb-10 flex items-start justify-center">
                <div className=
                "sticky left-0 top-[100px] z-10 mb-6 w-full max-w-xl text-center md:text-start">
                  <h1 className=
                  "text-3xl font-bold text-white sm:text-4xl text-center mx-auto max-w-md md:mx-0 md:text-start">
                  What You Will Learn In <span className=
                  "bg-gradient-to-r from-primary-500 to-success-500 bg-clip-text text-transparent">
                  This Course!</span></h1>
                  <p className=
                  "whitespace-pre-line text-wrap pt-2.5 text-base text-slate-300/90">
                  In this comprehensive course, you’ll develop all
                  the skills needed to become a Junior Full Stack
                  Web Developer. You’ll start with essential web
                  foundations, learning HTML, CSS, Chrome DevTools,
                  VS Code, Git & GitHub, and popular deployment
                  tools like Vercel and Render. Tailwind CSS will
                  help you create responsive designs quickly, while
                  JavaScript and TypeScript will provide a strong
                  understanding of programming fundamentals. The
                  course progresses into advanced frontend and
                  backend topics. You’ll explore React, Redux, ES6,
                  DOM manipulation, JSON, API integration, complete
                  authentication workflows, debugging practices,
                  and popular UI libraries such as DaisyUI, Next
                  UI, and shadcn UI. You’ll also gain backend
                  expertise with Node.js and Express.js, covering
                  RESTful APIs, middleware, routing, and MongoDB
                  with Mongoose for database management.
                  Additionally, you’ll implement JWT-based
                  authentication for secure login systems, set up
                  role-based access control, integrate Firebase,
                  handle CORS, manage state with Axios or Fetch,
                  and use global state tools. Finally, this course
                  concludes with job interview preparation and
                  freelancing guidance, providing the confidence
                  and skills you need to start your career
                  successfully.</p>
                  <div className=
                  "flex justify-center md:justify-normal">
                    <a className="z-10 font-semibold text-white"
                    target="_blank" href=
                    "#"><button className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap btn-grad font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 min-w-24 h-12 text-medium gap-3 rounded-small [&amp;&gt;svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none shadow-lg shadow-primary/40 bg-primary text-primary-foreground data-[hover=true]:opacity-hover mt-10 px-10"
                    type="button">Interested</button></a>
                  </div>
                </div>
              </div>
              <div className=
              "WhatYouWillLearn mb-8 grid gap-5 lg:grid-cols-2">
                <div className=
                "h-auto transform cursor-pointer rounded-[20px] border border-[#f8fafc14] bg-[#ffffff14] p-2.5 text-center transition duration-200 ease-out hover:scale-x-110 hover:scale-y-105">
                  <div className="mx-auto mt-5 w-[20%]">
                    <div className=
                    "relative shadow-black/5 shadow-none rounded-large max-w-fit "
                    ><Image width={50} height={50} src=
                    "/html.png" className=
                    "relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                    alt=""/></div>
                  </div>
                  <h3 className=
                  "mb-3 mt-3 text-[17px] font-semibold text-gray-200">
                  HTML 5</h3>
                  <p className="mx-auto mb-2 max-w-xs text-gray-400">
                  The standard markup language for structuring and
                  presenting content on the web, compatible across
                  all browsers.</p>
                </div>
                <div className=
                "h-auto transform cursor-pointer rounded-[20px] border border-[#f8fafc14] bg-[#ffffff14] p-2.5 text-center transition duration-200 ease-out hover:scale-x-110 hover:scale-y-105">
                  <div className="mx-auto mt-5 w-[20%]">
                    <div className=
                    "relative shadow-black/5 shadow-none rounded-large max-w-fit"
                    ><Image width={50} height={50} src=
                    "/css.png" className=
                    "relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                    alt=""/></div>
                  </div>
                  <h3 className=
                  "mb-3 mt-3 text-[17px] font-semibold text-gray-200">
                  CSS 3</h3>
                  <p className="mx-auto mb-2 max-w-xs text-gray-400">A
                  style sheet language that defines the look and
                  layout of web documents, enhancing HTML with
                  design and layout features.</p>
                </div>
                <div className=
                "h-auto transform cursor-pointer rounded-[20px] border border-[#f8fafc14] bg-[#ffffff14] p-2.5 text-center transition duration-200 ease-out hover:scale-x-110 hover:scale-y-105">
                  <div className="mx-auto mt-5 w-[20%]">
                    <div className=
                    "relative shadow-black/5 shadow-none rounded-large max-w-fit"
                    ><Image width={50} height={50} src=
                    "/git-icon.png" className=
                    "relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                    alt=""/></div>
                  </div>
                  <h3 className=
                  "mb-3 mt-3 text-[17px] font-semibold text-gray-200">
                  Git</h3>
                  <p className="mx-auto mb-2 max-w-xs text-gray-400">A
                  free and open-source version control system
                  focused on speed, data integrity, and support for
                  distributed, non-linear workflows.</p>
                </div>
                <div className=
                "h-auto transform cursor-pointer rounded-[20px] border border-[#f8fafc14] bg-[#ffffff14] p-2.5 text-center transition duration-200 ease-out hover:scale-x-110 hover:scale-y-105">
                  <div className="mx-auto mt-5 w-[20%]">
                    <div className=
                    "relative shadow-black/5 shadow-none rounded-large max-w-fit"
                    ><Image width={50} height={50} src=
                    "/github.png" className=
                    "relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                    alt=""/></div>
                  </div>
                  <h3 className=
                  "mb-3 mt-3 text-[17px] font-semibold text-gray-200">
                  GitHub</h3>
                  <p className="mx-auto mb-2 max-w-xs text-gray-400">A
                  developer platform for storing, managing, and
                  sharing code, combining Git's distributed version
                  control with access control features.</p>
                </div>
                <div className=
                "h-auto transform cursor-pointer rounded-[20px] border border-[#f8fafc14] bg-[#ffffff14] p-2.5 text-center transition duration-200 ease-out hover:scale-x-110 hover:scale-y-105">
                  <div className="mx-auto mt-5 w-[20%]">
                    <div className=
                    "relative shadow-black/5 shadow-none rounded-large max-w-fit"
                    ><Image width={50} height={50} src=
                    "/chrome-dev-logo-icon.png" className=
                    "relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                    alt=""/></div>
                  </div>
                  <h3 className=
                  "mb-3 mt-3 text-[17px] font-semibold text-gray-200">
                  Chrome Devtools</h3>
                  <p className="mx-auto mb-2 max-w-xs text-gray-400">A
                  built-in suite of web development tools in Google
                  Chrome that allows you to inspect HTML, monitor
                  network activity, and troubleshoot issues.</p>
                </div>
                <div className=
                "h-auto transform cursor-pointer rounded-[20px] border border-[#f8fafc14] bg-[#ffffff14] p-2.5 text-center transition duration-200 ease-out hover:scale-x-110 hover:scale-y-105">
                  <div className="mx-auto mt-5 w-[20%]">
                    <div className=
                    "relative shadow-black/5 shadow-none rounded-large max-w-fit"
                    ><Image width={50} height={50} src=
                    "/tailwindcss.png" className=
                    "relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                    alt=""/></div>
                  </div>
                  <h3 className=
                  "mb-3 mt-3 text-[17px] font-semibold text-gray-200">
                  Tailwind CSS</h3>
                  <p className="mx-auto mb-2 max-w-xs text-gray-400">A
                  utility-first CSS framework packed with classes.
                  Tailwind CSS is an open source CSS framework. The
                  main feature of this library is that, unlike
                  other CSS frameworks like Bootstrap.</p>
                </div>
                <div className=
                "h-auto transform cursor-pointer rounded-[20px] border border-[#f8fafc14] bg-[#ffffff14] p-2.5 text-center transition duration-200 ease-out hover:scale-x-110 hover:scale-y-105">
                  <div className="mx-auto mt-5 w-[20%]">
                    <div className=
                    "relative shadow-black/5 shadow-none rounded-large max-w-fit"
                    ><Image width={50} height={50} src=
                    "/JavaScript-logo.png" className=
                    "relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                    alt=""/></div>
                  </div>
                  <h3 className=
                  "mb-3 mt-3 text-[17px] font-semibold text-gray-200">
                  JavaScript</h3>
                  <p className="mx-auto mb-2 max-w-xs text-gray-400">A
                  scripting language that allows for dynamic
                  content creation, multimedia control, image
                  animation, and a wide range of interactive web
                  functionalities.</p>
                </div>
                <div className=
                "h-auto transform cursor-pointer rounded-[20px] border border-[#f8fafc14] bg-[#ffffff14] p-2.5 text-center transition duration-200 ease-out hover:scale-x-110 hover:scale-y-105">
                  <div className="mx-auto mt-5 w-[20%]">
                    <div className=
                    "relative shadow-black/5 shadow-none rounded-large max-w-fit"
                    ><Image width={50} height={50} src=
                    "/ES6.jpg" className=
                    "relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                    alt=""/></div>
                  </div>
                  <h3 className=
                  "mb-3 mt-3 text-[17px] font-semibold text-gray-200">
                  ECMAScript</h3>
                  <p className="mx-auto mb-2 max-w-xs text-gray-400">
                  ECMAScript 6 (ES6) standardizes JavaScript, and
                  this course covers features from ES6 to the
                  latest version, enhancing your understanding of
                  the language.</p>
                </div>
                <div className=
                "h-auto transform cursor-pointer rounded-[20px] border border-[#f8fafc14] bg-[#ffffff14] p-2.5 text-center transition duration-200 ease-out hover:scale-x-110 hover:scale-y-105">
                  <div className="mx-auto mt-5 w-[20%]">
                    <div className=
                    "relative shadow-black/5 shadow-none rounded-large max-w-fit"
                    ><Image width={50} height={50} src=
                    "/json.png" className=
                    "relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                    alt=""/></div>
                  </div>
                  <h3 className=
                  "mb-3 mt-3 text-[17px] font-semibold text-gray-200">
                  JSON</h3>
                  <p className="mx-auto mb-2 max-w-xs text-gray-400">
                  JavaScript Object Notation (JSON) is a
                  lightweight data format commonly used for storing
                  and transporting data, especially when
                  transmitting information from a server to a web
                  page.</p>
                </div>
                <div className=
                "h-auto transform cursor-pointer rounded-[20px] border border-[#f8fafc14] bg-[#ffffff14] p-2.5 text-center transition duration-200 ease-out hover:scale-x-110 hover:scale-y-105">
                  <div className="mx-auto mt-5 w-[20%]">
                    <div className=
                    "relative shadow-black/5 shadow-none rounded-large max-w-fit"
                    ><Image width={50} height={50} src=
                    "/jsdom.png" className=
                    "relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                    alt=""/></div>
                  </div>
                  <h3 className=
                  "mb-3 mt-3 text-[17px] font-semibold text-gray-200">
                  DOM</h3>
                  <p className="mx-auto mb-2 max-w-xs text-gray-400">
                  The Document Object Model (DOM) is a programming
                  interface that represents web documents as nodes
                  and objects, enabling programs to modify the
                  document's structure, style, and content.</p>
                </div>
                <div className=
                "h-auto transform cursor-pointer rounded-[20px] border border-[#f8fafc14] bg-[#ffffff14] p-2.5 text-center transition duration-200 ease-out hover:scale-x-110 hover:scale-y-105">
                  <div className="mx-auto mt-5 w-[20%]">
                    <div className=
                    "relative shadow-black/5 shadow-none rounded-large max-w-fit"
                    ><Image width={50} height={50} src=
                    "/api.png" className=
                    "relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                    alt=""/></div>
                  </div>
                  <h3 className=
                  "mb-3 mt-3 text-[17px] font-semibold text-gray-200">
                  API Integration</h3>
                  <p className="mx-auto mb-2 max-w-xs text-gray-400">
                  The process of connecting different software
                  applications via their APIs to enable data
                  exchange and functionality sharing, enhancing
                  overall system interoperability.</p>
                </div>
                <div className=
                "h-auto transform cursor-pointer rounded-[20px] border border-[#f8fafc14] bg-[#ffffff14] p-2.5 text-center transition duration-200 ease-out hover:scale-x-110 hover:scale-y-105">
                  <div className="mx-auto mt-5 w-[20%]">
                    <div className=
                    "relative shadow-black/5 shadow-none rounded-large max-w-fit"
                    ><Image width={50} height={50} src=
                    "/ts.png" className=
                    "relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                    alt=""/></div>
                  </div>
                  <h3 className=
                  "mb-3 mt-3 text-[17px] font-semibold text-gray-200">
                  TypeScript</h3>
                  <p className="mx-auto mb-2 max-w-xs text-gray-400">A
                  superset of JavaScript that adds static types,
                  enabling better tooling and error checking for
                  developing robust applications, while remaining
                  fully compatible with JavaScript.</p>
                </div>
                <div className=
                "h-auto transform cursor-pointer rounded-[20px] border border-[#f8fafc14] bg-[#ffffff14] p-2.5 text-center transition duration-200 ease-out hover:scale-x-110 hover:scale-y-105">
                  <div className="mx-auto mt-5 w-[20%]">
                    <div className=
                    "relative shadow-black/5 shadow-none rounded-large max-w-fit"
                    ><Image width={50} height={50} src=
                    "/react.png" className=
                    "relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                    alt=""/></div>
                  </div>
                  <h3 className=
                  "mb-3 mt-3 text-[17px] font-semibold text-gray-200">
                  React JS</h3>
                  <p className="mx-auto mb-2 max-w-xs text-gray-400">A
                  free, open-source JavaScript library for building
                  user interfaces with a component-based
                  architecture, maintained by Meta and a community
                  of developers.</p>
                </div>
                <div className=
                "h-auto transform cursor-pointer rounded-[20px] border border-[#f8fafc14] bg-[#ffffff14] p-2.5 text-center transition duration-200 ease-out hover:scale-x-110 hover:scale-y-105">
                  <div className="mx-auto mt-5 w-[20%]">
                    <div className=
                    "relative shadow-black/5 shadow-none rounded-large max-w-fit"
                    ><Image width={50} height={50} src=
                    "/redux.png" className=
                    "relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                    alt=""/></div>
                  </div>
                  <h3 className=
                  "mb-3 mt-3 text-[17px] font-semibold text-gray-200">
                  Redux</h3>
                  <p className="mx-auto mb-2 max-w-xs text-gray-400">A
                  predictable state management library for
                  JavaScript applications, often used with React,
                  that helps manage application state in a
                  consistent and centralized manner.</p>
                </div>
                <div className=
                "h-auto transform cursor-pointer rounded-[20px] border border-[#f8fafc14] bg-[#ffffff14] p-2.5 text-center transition duration-200 ease-out hover:scale-x-110 hover:scale-y-105">
                  <div className="mx-auto mt-5 w-[20%]">
                    <div className=
                    "relative shadow-black/5 shadow-none rounded-large max-w-fit"
                    ><Image width={50} height={50} src=
                    "/nextjs.png" className=
                    "relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                    alt=""/></div>
                  </div>
                  <h3 className=
                  "mb-3 mt-3 text-[17px] font-semibold text-gray-200">
                  Next.js</h3>
                  <p className="mx-auto mb-2 max-w-xs text-gray-400">A
                  React framework for developing full-stack web
                  applications, combining React components for user
                  interfaces with built-in optimizations and
                  tooling for bundling and compiling.</p>
                </div>
                <div className=
                "h-auto transform cursor-pointer rounded-[20px] border border-[#f8fafc14] bg-[#ffffff14] p-2.5 text-center transition duration-200 ease-out hover:scale-x-110 hover:scale-y-105">
                  <div className="mx-auto mt-5 w-[20%]">
                    <div className=
                    "relative shadow-black/5 shadow-none rounded-large max-w-fit"
                    ><Image width={50} height={50} src=
                    "/firebase.png" className=
                    "relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                    alt=""/></div>
                  </div>
                  <h3 className=
                  "mb-3 mt-3 text-[17px] font-semibold text-gray-200">
                  Firebase</h3>
                  <p className="mx-auto mb-2 max-w-xs text-gray-400">A
                  platform developed by Google that provides
                  backend services for web and mobile applications,
                  including real-time databases, authentication,
                  hosting, and cloud functions to streamline app
                  development.</p>
                </div>
                <div className=
                "h-auto transform cursor-pointer rounded-[20px] border border-[#f8fafc14] bg-[#ffffff14] p-2.5 text-center transition duration-200 ease-out hover:scale-x-110 hover:scale-y-105">
                  <div className="mx-auto mt-5 w-[20%]">
                    <div className=
                    "relative shadow-black/5 shadow-none rounded-large max-w-fit"
                    ><Image width={50} height={50} src=
                    "/node-js.png" className=
                    "relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                    alt=""/></div>
                  </div>
                  <h3 className=
                  "mb-3 mt-3 text-[17px] font-semibold text-gray-200">
                  Node.js</h3>
                  <p className="mx-auto mb-2 max-w-xs text-gray-400">A
                  JavaScript runtime built on Chrome's V8 engine
                  that allows for server-side scripting, enabling
                  the development of scalable network applications
                  and real-time web services.</p>
                </div>
                <div className=
                "h-auto transform cursor-pointer rounded-[20px] border border-[#f8fafc14] bg-[#ffffff14] p-2.5 text-center transition duration-200 ease-out hover:scale-x-110 hover:scale-y-105">
                  <div className="mx-auto mt-5 w-[20%]">
                    <div className=
                    "relative shadow-black/5 shadow-none rounded-large max-w-fit"
                    ><Image width={50} height={50} src=
                    "/express-js.png" className=
                    "relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                    alt=""/></div>
                  </div>
                  <h3 className=
                  "mb-3 mt-3 text-[17px] font-semibold text-gray-200">
                  Express.js</h3>
                  <p className="mx-auto mb-2 max-w-xs text-gray-400">A
                  minimal and flexible Node.js web application
                  framework that provides a robust set of features
                  for building web and mobile applications,
                  including routing, middleware support, and
                  simplified server management.</p>
                </div>
                <div className=
                "h-auto transform cursor-pointer rounded-[20px] border border-[#f8fafc14] bg-[#ffffff14] p-2.5 text-center transition duration-200 ease-out hover:scale-x-110 hover:scale-y-105">
                  <div className="mx-auto mt-5 w-[20%]">
                    <div className=
                    "relative shadow-black/5 shadow-none rounded-large max-w-fit"
                    ><Image width={50} height={50} src=
                    "/mongodb.png" className=
                    "relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                    alt=""/></div>
                  </div>
                  <h3 className=
                  "mb-3 mt-3 text-[17px] font-semibold text-gray-200">
                  MongoDB</h3>
                  <p className="mx-auto mb-2 max-w-xs text-gray-400">A
                  NoSQL database that stores data in flexible,
                  JSON-like documents, allowing for scalable and
                  efficient data storage, retrieval, and processing
                  in applications.</p>
                </div>
                <div className=
                "h-auto transform cursor-pointer rounded-[20px] border border-[#f8fafc14] bg-[#ffffff14] p-2.5 text-center transition duration-200 ease-out hover:scale-x-110 hover:scale-y-105">
                  <div className="mx-auto mt-5 w-[20%]">
                    <div className=
                    "relative shadow-black/5 shadow-none rounded-large max-w-fit"
                    ><Image width={50} height={50} src=
                    "/mongoose.png" className=
                    "relative z-10  shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                    alt=""/></div>
                  </div>
                  <h3 className=
                  "mb-3 mt-3 text-[17px] font-semibold text-gray-200">
                  Mongoose</h3>
                  <p className="mx-auto mb-2 max-w-xs text-gray-400">An
                  ODM (Object Data Modeling) library for MongoDB
                  and Node.js that provides a straightforward way
                  to model and manage data with schemas, enabling
                  easy data validation and querying.</p>
                </div>
              </div>
            </section>


  )
}

export default WhatWillLearn