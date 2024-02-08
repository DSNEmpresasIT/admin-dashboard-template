import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";

import { CreateProjectDto } from "@/utils/types/dto/dto";
import { AiOutlineClose } from "react-icons/ai";
import Datepicker from "react-tailwindcss-datepicker";
import { createProject } from "@/services/projects-service";
import { ProjectFormData, ProjectTypesCMS, Projects } from "@/utils/types/types";
import { useAuthContext } from "@/context/auth-context";
import { getProjectTypes } from "@/services/cms-services";
import { ImageInputComponent } from "../commons/ImageInputComponent";
import { LoaderComponent } from "../commons/LoaderComponent";

const initialDate: string = new Date().toString();

const initialState: ProjectFormData = {
  title: "",
  description: "",
  project_date: initialDate,
  projectClient: "",
  type: undefined,
  imageUrl: [null, null, null, null]
};

export const CreateProjectForm = ({
  setModal,
  modal,
  projectsData,
  setProjectsData,
}: {
  setModal: Dispatch<SetStateAction<boolean>>;
  modal: boolean;
  projectsData: Projects[];
  setProjectsData: Dispatch<SetStateAction<Projects[]>>;
}) => {
  const [formData, setFormData] = useState<ProjectFormData>(initialState);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [projectTypes, setProjectTypes] = useState<ProjectTypesCMS[]>();
  const { state } = useAuthContext();

  function handleInputChange(e) {
    const target = e.target;
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    setIsLoading(true);
    if (
      formData.title.length < 3 ||
      formData.description.length < 3
    ) {
      setIsLoading(false);
      return toast.error('Los campos con "*" son obligatorios');
    }

    if (!formData.imageUrl[0]) {
      setIsLoading(false)
      return toast.error('Se requiere una imagen como minimo')
    }

    const form: CreateProjectDto = {
      title: formData.title,
      description: formData.description,
      type: formData.type,
      imageUrl: formData.imageUrl,
      projectClient: formData.projectClient,
      project_date:
        formData.project_date !== initialDate
          ? formData.project_date
          : undefined,
    };

    createProject(state.user.id, state.token, form)
      .then((response: Projects) => {
        setProjectsData([...projectsData, response]);
        setModal(!modal);
        setIsLoading(false);
        setFormData(initialState);
        toast.success("Publicacion creada correctamente.");
      })
      .catch((err) => {
        toast.error(err.message);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    if (state.user?.id?.length && state.token?.length) {
      getProjectTypes(state.user.id, state.token)
        .then((response) => {
          setProjectTypes(response.project_types ?? null);
        })
        .catch((err) => console.log('No types founded'));
    }
  }, [state]);

  return (
    <div className="relative max-w-[85vw] max-h-full flex mt-10 items-center justify-center pt-8 overflow-hidden">
      <LoaderComponent conditional={isLoading} />
      {!isLoading && (
        <div className="relative h-[85vh] bg-white dark:bg-slate-900 rounded-lg overflow-y-scroll shadow dark:shadow-gray-700">
          <div className="flex justify-between items-center p-4 border-b border-gray-100 dark:border-gray-700">
            <h5 className="text-xl font-semibold">Crear proyecto</h5>
            <button
              type="button"
              onClick={() => setModal(!modal)}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <AiOutlineClose className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-4 gap-3">
              {
                formData.imageUrl.map((_, index) => (
                  <ImageInputComponent formData={formData} setFormData={setFormData} index={index} key={`${index}-image-input-key`} />
                ))
              }          
            </div>

            <form onSubmit={handleSubmitForm} className="mt-4">
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-6">
                  <label className="font-semibold">
                    Título<span className="text-red-600">*</span>
                  </label>
                  <input
                    name="title"
                    id="title"
                    value={formData.title ?? ""}
                    onChange={handleInputChange}
                    type="text"
                    className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                    placeholder="Título:"
                  />
                </div>

                <div className="col-span-6">
                  <label className="font-semibold">
                    Cliente <span className="text-red-600">*</span>
                  </label>
                  <input
                    name="projectClient"
                    value={formData.projectClient ?? ""}
                    onChange={handleInputChange}
                    id="projectClient"
                    type="text"
                    className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                    placeholder="Cliente:"
                  />
                </div>

                {projectTypes && (
                  <div className="col-span-6">
                    <label className="font-semibold">
                      Tipo de proyecto
                      <span className="text-red-600">*</span>
                    </label>
                    <select
                      className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                      value={formData.type}
                      name="type"
                      onChange={handleInputChange}
                    >
                      {projectTypes?.map((type) => (
                        <option
                          key={`${type.value}-option-project-type`}
                          value={type.value}
                        >
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="col-span-6">
                  <label className="font-semibold">
                    Fecha <span className="text-red-600">*</span>
                  </label>
                  <Datepicker
                    asSingle={true}
                    value={{
                      // @ts-ignore
                      startDate: formData.project_date,
                      endDate: formData.project_date,
                    }}
                    onChange={(value) =>
                      setFormData({
                        ...formData,
                        project_date: value.startDate.toString(),
                      })
                    }
                    placeholder="Fecha"
                    inputClassName="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                  />
                </div>

                <div className="col-span-12">
                  <label className="font-semibold"> Descripción: </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    id="description"
                    className="form-input w-full py-2 px-3 h-24 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                    placeholder="Descripción:"
                  ></textarea>
                </div>

                <div className="col-span-12">
                  <button
                    type="submit"
                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                  >
                    Crear projecto
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
