import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative min-h-40 w-full overflow-hidden border-t border-slate-600/50 pb-5 pt-10">
      <div className="absolute -top-[100px] w-full md:-top-[150px] lg:-top-[250px]">
        <div className="mx-auto size-[200px] rounded-full bg-violet-500/80 opacity-20 blur-3xl filter md:size-[300] lg:size-[500px]"></div>
      </div>
      <section className="relative z-10 mx-auto w-full max-w-screen-2xl px-2.5 md:px-5">
        <div className="grid w-full grid-cols-2 place-items-start gap-x-5 gap-y-5 sm:place-items-center sm:gap-x-0 lg:grid-cols-3">
          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-base font-semibold text-slate-50 md:text-lg">
              Contact Info
            </h2>
            <div className="space-y-2 pt-3.5">
              <p className="text-xs sm:text-base">
                <span className="block transition-all delay-150 hover:text-primary-500">
                  Call Us: +8801778821588
                </span>
              </p>
              <p className="text-xs sm:text-base">
                <span className="block transition-all delay-150 hover:text-primary-500">
                  Address: Gulshan Dhaka, Bangladesh
                </span>
              </p>
              <p className="text-xs sm:text-base">
                <span className="block transition-all delay-150 hover:text-primary-500">
                  Mail Us: hanif.mia2233@gmail.com
                </span>
              </p>
            </div>
          </div>
          <div className="">
            <h2 className="text-base font-semibold text-slate-50 md:text-lg">
              Important Links
            </h2>
            <div className="space-y-2 pt-3.5">
              <span className="block transition-all delay-150 hover:text-primary-500">
                <a target="_self" href="/about">
                  <p className="text-xs sm:text-base">
                    <span className="block transition-all delay-150 hover:text-primary-500">
                      About
                    </span>
                  </p>
                </a>
              </span>
              <span className="block transition-all delay-150 hover:text-primary-500">
                <a target="_self" href="/">
                  <p className="text-xs sm:text-base">
                    <span className="block transition-all delay-150 hover:text-primary-500">
                      Privacy Policy
                    </span>
                  </p>
                </a>
              </span>
              <span className="block transition-all delay-150 hover:text-primary-500">
                <a target="_self" href="/">
                  <p className="text-xs sm:text-base">
                    <span className="block transition-all delay-150 hover:text-primary-500">
                      Terms & Conditions
                    </span>
                  </p>
                </a>
              </span>
              <span className="block transition-all delay-150 hover:text-primary-500">
                <a target="_self" href="/">
                  <p className="text-xs sm:text-base">
                    <span className="block transition-all delay-150 hover:text-primary-500">
                      Refund Policy
                    </span>
                  </p>
                </a>
              </span>
            </div>
          </div>
          <div className="">
            <h2 className="text-base font-semibold text-slate-50 md:text-lg">
              Follow Us
            </h2>
            <div className="space-y-2 pt-3.5">
              <span className="block transition-all delay-150 hover:text-primary-500">
                <a
                  target="_blank"
                  href="#"
                >
                  <p className="text-xs sm:text-base">
                    <span className="block transition-all delay-150 hover:text-primary-500">
                      Youtube
                    </span>
                  </p>
                </a>
              </span>
              <span className="block transition-all delay-150 hover:text-primary-500">
                <a
                  target="_blank"
                  href="#"
                >
                  <p className="text-xs sm:text-base">
                    <span className="block transition-all delay-150 hover:text-primary-500">
                      Linkedin
                    </span>
                  </p>
                </a>
              </span>
              <span className="block transition-all delay-150 hover:text-primary-500">
                <a target="_blank" href="#">
                  <p className="text-xs sm:text-base">
                    <span className="block transition-all delay-150 hover:text-primary-500">
                      GitHub
                    </span>
                  </p>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="mb-5 mt-10 border border-slate-600/50"></div>
        <Image
          alt=""
          loading="lazy"
          width="1200"
          height="150"
          decoding="async"
          data-nimg="1"
          className="mx-auto h-auto min-h-[150] w-full max-w-[1280px] pb-5"
          src="/sslcommerz-banner.webp"
        />
        <p className="text-center text-xs sm:text-sm">
          Copyright © <span className="font-sans">2025 </span>
          Foysal Ahammed | All Rights Reserved
        </p>
      </section>
    </footer>
  );
};

export default Footer;
