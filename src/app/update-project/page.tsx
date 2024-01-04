"use client";
import React, { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";


import Sidebar from "@/components/commons/sidebar";
import { useSearchParams } from "next/navigation";
import { getProjectById, updateProject } from "@/services/projects-service";
import { ImageUrl, ProjectFormData } from "@/utils/types/types";
import { ImageInputComponent } from "@/components/commons/ImageInputComponent";
import { useAuthContext } from "@/context/auth-context";
import toast from "react-hot-toast";
import { LoaderComponent } from "@/components/commons/LoaderComponent";

const initialState: ProjectFormData = {
  title: "",
  description: "",
  type: undefined,
  projectClient: "",
  project_date: new Date().toString(),
  imageUrl: [null, null, null, null],
};

const Page = () => {
  const projectId = useSearchParams().get("projectId");
  const { state } = useAuthContext();
  const [toggle, setToggle] = useState(true);
  const [formData, setFormData] = useState<ProjectFormData>(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      ...formData,
      clientName: state.user.clientName,
    };
    updateProject(projectId, state.token, requestBody)
      .then(() => toast.success("Proyecto actualizado exitorsamente"))
      .catch(() => toast.error("Ha habido un problema, inténtelo más tarde"));
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
  }, []);

  useEffect(() => {
    getProjectById(projectId).then((response) => {
      setFormData({
        title: response.title,
        description: response.description,
        projectClient: response.projectClient ?? '',
        type: response.type,
        project_date: response.project_date ?? new Date().toString(),
        imageUrl: [
          response.imageUrl[0] ?? null,
          response.imageUrl[1] ?? null,
          response.imageUrl[2] ?? null,
          response.imageUrl[3] ?? null,
        ],
      });
    });
  }, []);

  return (
    <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
      <Sidebar />
      <main className="page-content bg-gray-50 dark:bg-slate-800">
        {/* <Topnav toggle={toggle} setToggle={setToggle} /> */}
        <LoaderComponent conditional={formData === initialState}  className="w-full h-screen flex items-center justify-center"/>
        {formData !== initialState && (
          <div className="relative w-[85vw] h-full flex items-center justify-center">
            <div className="relative h-full bg-white dark:bg-slate-800 rounded-lg pt-[10vh]">
              <div className="p-8">
                <div className="grid grid-cols-2 bg-slate-900 gap-5 p-8">
                  {formData?.imageUrl.map(
                    (image: ImageUrl | null | string, index: number) => (
                      <ImageInputComponent
                        formData={formData}
                        index={index}
                        key={`${index}-update-image-input-key`}
                        setFormData={setFormData}
                      />
                    )
                  )}
                </div>

                <form onSubmit={handleSubmit} className="p-5 bg-slate-900">
                  <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-6">
                      <label className="font-semibold">
                        Título<span className="text-red-600">*</span>
                      </label>
                      <input
                        name="title"
                        id="title"
                        type="text"
                        onChange={handleInputChange}
                        value={formData.title}
                        className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                        placeholder="Title :"
                      />
                    </div>

                    <div className="col-span-6">
                      <label className="font-semibold">
                        Cliente <span className="text-red-600">*</span>
                      </label>
                      <input
                        name="projectClient"
                        id="client"
                        type="text"
                        onChange={handleInputChange}
                        value={formData.projectClient}
                        className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                        placeholder="Cliente:"
                      />
                    </div>

                    {formData.type && (
                      <div className="col-span-6">
                        <label className="font-semibold">
                          Tipo <span className="text-red-600">*</span>
                        </label>
                        <input
                          name="type"
                          id="type"
                          type="text"
                          onChange={handleInputChange}
                          value={formData.type}
                          className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                          placeholder="Title :"
                        />
                      </div>
                    )}

                    <div className="col-span-6">
                      <label className="font-semibold">
                        Fecha <span className="text-red-600">*</span>
                      </label>
                      <Datepicker
                        asSingle={true}
                        value={{
                          startDate: formData.project_date,
                          endDate: formData.project_date,
                        }}
                        onChange={(value) =>
                          setFormData({
                            ...formData,
                            ["project_date"]: value.toString(),
                          })
                        }
                        inputClassName="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                      />
                    </div>

                    <div className="col-span-12">
                      <label className="font-semibold"> Descripción: </label>
                      <textarea
                        name="description"
                        id="description"
                        onChange={handleInputChange}
                        value={formData.description}
                        className="form-input w-full py-2 px-3 h-24 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                        placeholder="Descripcion:"
                      ></textarea>
                    </div>

                    <div className="col-span-12">
                      <button
                        type="submit"
                        className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                      >
                        Crear proyecto
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Page;
