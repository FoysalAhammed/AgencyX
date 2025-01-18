import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Instructor from "./components/Instructor";
import Process from "./components/Process";
import Steps from "./components/Steps";
import CourseSpeciality from "./components/CourseSpeciality";
import WhatWillLearn from "./components/WhatWillLearn";
import ProjectsBuild from "./components/ProjectsBuild";
import CustomerSupport from "./components/CustomerSupport";
import ScrollProvider from "./components/ScrollContext";

export default function Home() {
  return (
     <div className="relative flex min-h-screen flex-col bg-slate-100 dark:bg-slate-950 dark:text-slate-300 ">
            <Header/>
            <ScrollProvider>
      <div className="pb-20 container mx-auto max-w-7xl px-3 sm:px-6">
      <Hero/>
      <Process/>
      <Steps/>
      <Instructor/>
      <CourseSpeciality/>
      <WhatWillLearn/>
      <ProjectsBuild/>
      <CustomerSupport/>
      </div>
      <Footer/>
      </ScrollProvider>
     </div>
  );
}
