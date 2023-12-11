import { getAllProjects } from "@/services/projects-service";
import { PAGES_PATH } from "@/utils/types/pages";
import { Projects } from "@/utils/types/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";

interface ProjectsListProps {
  projectsData: Projects[]
}

export const ProjectsList = ({ projectsData }: ProjectsListProps) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-6">
      {!projectsData && <span>Cargando...</span>}
      {projectsData && !projectsData.length && (
        <span>Ups!! Al parecer aun no tiene publicaciones...</span>
      )}
      {projectsData?.map((item, index) => {
        return (
          <div
            className="relative rounded-md shadow dark:shadow-gray-700 overflow-hidden bg-white dark:bg-slate-900"
            key={index}
          >
            <Image
              src={item.imageUrl[0].url}
              width={0}
              height={0}
              sizes="100vw"
              placeholder="blur"
              blurDataURL={item.imageUrl[0].url}
              style={{ width: "100%", height: "auto" }}
              alt=""
            />

            <div className="content p-6">
              <Link
                href={{
                  pathname: PAGES_PATH.UPDATE_PROJECT,
                  query: { projectId: item._id },
                }}
                className="title h5 text-lg font-medium hover:text-indigo-600 duration-500"
              >
                {item.title}
              </Link>
              <div className="flex w-full justify-between mt-3">
                <span className="text-gray-500 capitalize">{item.type}</span>
                <span className="text-gray-500">{item.project_date}</span>
              </div>
              <p className="text-slate-400 mt-3">{item.description}</p>

              <div className="mt-4">
                <Link
                  href={{
                    pathname: PAGES_PATH.UPDATE_PROJECT,
                    query: { projectId: item._id },
                  }}
                  className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500"
                >
                  Editar <MdEdit className="ms-1 text-sm" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
