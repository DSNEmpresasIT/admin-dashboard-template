"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { LoginFormComponent } from "@/components/login/LoginFormComponent";

const BackButton = dynamic(() => import("@/components/commons/backButton"));

export default function AuthLogin() {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    // document.documentElement.classList.add('light');
    // document.documentElement.classList.remove('dark');
  }, []);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-600/[0.02]"></div>
        <div className="container-fluid relative">
          <div className="md:flex items-center">
            <div className="xl:w-[30%] lg:w-1/3 md:w-1/2">
              <div className="relative md:flex flex-col md:min-h-screen justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 md:px-10 py-10 px-4 z-1">
                <div className="text-center">
                  <Link href="/">
                    <Image
                      src="/images/logo-icon-64.png"
                      width={72}
                      height={64}
                      placeholder="blur"
                      blurDataURL="/images/logo-icon-64.png"
                      className="mx-auto"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="title-heading text-center md:my-auto my-20">
                  <LoginFormComponent />
                </div>
                <div className="text-center">
                  {/* <p className="mb-0 text-slate-400">
                    © {new Date().getFullYear()} Techwind. Design & Develop with{" "}
                    <i className="mdi mdi-heart text-red-600"></i> by{" "}
                    <Link
                      href="https://shreethemes.in/"
                      target="_blank"
                      className="text-reset"
                    >
                      Shreethemes
                    </Link>
                    .
                  </p> */}
                </div>
              </div>
            </div>

            <div className="xl:w-[70%] lg:w-2/3 md:w-1/2 flex justify-center mx-6 md:my-auto my-20">
              {/* <div>
                <div className="relative">
                  <div className="absolute top-20 start-20 bg-indigo-600/[0.02] h-[1200px] w-[1200px] rounded-full"></div>
                  <div className="absolute bottom-20 -end-20 bg-indigo-600/[0.02] h-[600px] w-[600px] rounded-full"></div>
                </div>

                <div className="text-center">
                  <div>
                    <Image
                      src="/images/contact.svg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      placeholder="blur"
                      blurDataURL="/images/contact.svg"
                      style={{ width: "100%", height: "auto" }}
                      className="max-w-xl mx-auto"
                      alt=""
                    />
                    <div className="relative max-w-xl mx-auto text-start">
                      <div className="relative p-8 border-2 border-indigo-600 rounded-[30px] before:content-[''] before:absolute before:w-28 before:border-[6px] before:border-white dark:before:border-slate-900 before:-bottom-1 before:start-16 before:z-2 after:content-[''] after:absolute after:border-2 after:border-indigo-600 after:rounded-none after:rounded-e-[50px] after:w-20 after:h-20 after:-bottom-[80px] after:start-[60px] after:z-3 after:border-s-0 after:border-b-0">
                        <span className="font-semibold leading-normal">
                          Launch your campaign and benefit from our expertise on
                          designing and managing conversion centered latest
                          Tailwind CSS html page.
                        </span>

                        <div className="absolute text-8xl -top-0 start-4 text-indigo-600/10 dark:text-indigo-600/20 -z-1">
                          <i className="mdi mdi-format-quote-open"></i>
                        </div>
                      </div>

                      <div className="text-lg font-semibold mt-6 ms-44">
                        - Techwind
                      </div>
                    </div>
                    <p className="text-slate-400 max-w-xl mx-auto">
                      Start working with Tailwind CSS that can provide
                      everything you need to generate awareness, drive traffic,
                      connect. Dummy text is text that is used in the publishing
                      industry or by web designers to occupy the space which
                      will later be filled with real content.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* <Switcher/> */}
      <BackButton />
    </>
  );
}
