"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// const Sidebar = dynamic(() => import('@/components/commons/sidebar'))
// const Topnav = dynamic(() => import("../@/components/commons/commons/topnav"));
const Footer = dynamic(() => import("@/components/commons/footer"));

import * as Icon from "react-feather";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import Sidebar from "@/components/commons/sidebar";
import { CreateProjectForm } from "@/components/proyects/CreateProjectForm";
import { ProjectsList } from "@/components/proyects/ProjectsList";
import { getAllProjects } from "@/services/projects-service";
import { Projects } from "@/utils/types/types";
import Topnav from "@/components/commons/topnav";

export default function Blog() {
  const [toggle, setToggle] = useState<boolean>(true);
  const [modal, setModal] = useState<boolean>(false);
  const [projectsData, setProjectsData] = useState<Projects[]>();

  useEffect(() => {
    getAllProjects()
      .then((response) => setProjectsData(response.projects))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (modal) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }, [modal]);


  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    // document.documentElement.classList.add('light');
    // document.documentElement.classList.remove('dark');
  }, []);

  return (
    <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
      <Sidebar />
      <main className="page-content bg-gray-50 dark:bg-slate-800">
        <Topnav toggle={toggle} setToggle={setToggle} />
        <div className="container-fluid relative px-3">
          <div className="layout-specing">
            <div className="md:flex justify-between items-center">
              <div>
                <h5 className="text-lg font-semibold">Admin / Proyectos</h5>

                <ul className="tracking-[0.5px] inline-flex items-center mt-2">
                  <li className="inline-block capitalize text-[14px] font-bold duration-500 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white">
                    <Link href="/">Dashboard</Link>
                  </li>
                  <li className="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180">
                    <MdKeyboardArrowRight />
                  </li>
                  <li
                    className="inline-block capitalize text-[14px] font-bold text-indigo-600 dark:text-white"
                    aria-current="page"
                  >
                    Proyectos
                  </li>
                </ul>
              </div>

              <div>
                <Link
                  href="#"
                  onClick={() => setModal(!modal)}
                  className="h-8  w-auto inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-800/5 hover:bg-gray-800/10 dark:bg-gray-800 border border-gray-800/5 dark:border-gray-800 text-slate-900 dark:text-white rounded-full"
                >
                  <span className="text-[15px]">Agregar proyecto </span>
                  <Icon.Plus className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <ProjectsList projectsData={projectsData} />
            <div
              className={`fixed z-50 flex items-center justify-center overflow-hidden inset-0 m-auto bg-gray-900 bg-opacity-50 dark:bg-opacity-80 ${
                modal ? "" : "hidden"
              }`}
            >
              <CreateProjectForm 
                modal={modal} 
                setModal={setModal}  
                projectsData={projectsData}  
                setProjectsData={setProjectsData}
              />
            </div>

            {/* <div className="flex justify-end mt-6">
              <nav aria-label="Page navigation example">
                <ul className="inline-flex items-center -space-x-px">
                  <li>
                    <Link
                      href="#"
                      className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                    >
                      <MdKeyboardArrowLeft className="text-[20px] rtl:rotate-180 rtl:-mt-1" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                    >
                      1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                    >
                      2
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      aria-current="page"
                      className="z-10 w-[40px] h-[40px] inline-flex justify-center items-center text-white bg-indigo-600 border border-indigo-600"
                    >
                      3
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                    >
                      4
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                    >
                      5
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                    >
                      <MdKeyboardArrowRight className="text-[20px] rtl:rotate-180 rtl:-mt-1" />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div> */}
          </div>
        </div>
        <Footer />
        {/* <Switcher /> */}
      </main>
    </div>
  );
}
