import React, { Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";

import { CreateProjectDto } from "@/utils/types/dto/dto";
import { AiOutlineClose } from "react-icons/ai";
import { encodeImageToBase64 } from "@/utils/helpers/encodeImageToBase64";
import Datepicker from "react-tailwindcss-datepicker";
import { createProject } from "@/services/projects-service";
import { Projects, ProjectsTypes } from "@/utils/types/types";

const initialDate: string = new Date().toString();

interface FormData {
  title: string;
  description: string;
  project_date: string;
  projectClient: string;
  type: ProjectsTypes | undefined;
  image_1: string | null;
  image_2: string | null;
  image_3: string | null;
  image_4: string | null;
}

const initialState: FormData = {
  title: "",
  description: "",
  project_date: initialDate,
  projectClient: "",
  type: ProjectsTypes.RESIDENCIAL,
  image_1: null,
  image_2: null,
  image_3: null,
  image_4: null,
};

export const CreateProjectForm = ({
  setModal,
  modal,
  projectsData,
  setProjectsData
}: {
  setModal: Dispatch<SetStateAction<boolean>>;
  modal: boolean;
  projectsData: Projects[], 
  setProjectsData: Dispatch<SetStateAction<Projects[]>>,
}) => {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleChangeImage(event) {
    if (event.target.files && event.target.files.length !== 0) {
      encodeImageToBase64(event.target.files[0], (base64: string) => {
        setFormData({
          ...formData,
          [event.target.name]: base64,
        });
      });
    }
  }

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
      formData.description.length < 3 ||
      formData.type.length < 3
    ) {
      setIsLoading(false)
      return toast.error('Los campos con "*" son obligatorios');
    }

    const imageUrl = [];
    for (let i = 0; i < 4; i++) {
      if (formData[`image_${i + 1}`] !== null) {
        imageUrl.push(formData[`image_${i + 1}`]);
      }
    }

    if (!imageUrl.length) {
      setIsLoading(false);
      return toast.error('El proyecto debe contenter al menos una foto ilustrativa.')
    }

    const form: CreateProjectDto = {
      title: formData.title,
      description: formData.description,
      type: formData.type,
      imageUrl,
      project_date:
        formData.project_date !== initialDate
          ? formData.project_date
          : undefined,
    };

    createProject(form)
      .then((response: Projects) => {
        setProjectsData([
          ...projectsData,
          response
        ])
        setModal(!modal)
        setIsLoading(false)
        toast.success('Publicacion creada correctamente.')
      })
      .catch(() => {
        toast.error('Ha ocurrido un error en el servidor, por favor intentelo mas tarde...')
        setIsLoading(false)
      }) 
  }

  return (
    <div className="relative w-[85vw] h-full flex items-center justify-center pt-8">
      { isLoading && <span>Spinner todo copado...</span> }
      {!isLoading && (
        <div className="relative h-[85vh] bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-700">
          <div className="flex justify-between items-center p-4 border-b border-gray-100 dark:border-gray-700">
            <h5 className="text-xl font-semibold">Add blog or news</h5>
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
              <div>
                {formData.image_1 ? (
                  <div className="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto max-h-60">
                    <Image
                      src={formData.image_1}
                      width={0}
                      height={0}
                      sizes="100vw"
                      placeholder="blur"
                      blurDataURL={formData.image_1}
                      style={{ width: "100%", height: "auto" }}
                      alt=""
                      className="preview-content"
                    />
                  </div>
                ) : (
                  <>
                    <p className="font-semibold mb-4">
                      Upload your blog image here, Please click Upload Image
                      Button.
                    </p>
                    <div className="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto max-h-60">
                      Soporta JPG y PNG
                    </div>
                  </>
                )}

                <input
                  type="file"
                  id="input-file_1"
                  name="image_1"
                  accept="image/*"
                  hidden
                  onChange={(e) => handleChangeImage(e)}
                />
                <label
                  className="btn-upload py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-6 cursor-pointer"
                  htmlFor="input-file_1"
                >
                  Subir Imagen
                </label>
              </div>
              <div>
                {formData.image_2 ? (
                  <div className="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto max-h-60">
                    <Image
                      src={formData.image_2}
                      width={0}
                      height={0}
                      sizes="100vw"
                      placeholder="blur"
                      blurDataURL={formData.image_2}
                      style={{ width: "100%", height: "auto" }}
                      alt=""
                      className="preview-content"
                    />
                  </div>
                ) : (
                  <>
                    <p className="font-semibold mb-4">
                      Upload your blog image here, Please click Upload Image
                      Button.
                    </p>
                    <div className="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto max-h-60">
                      Soporta JPG y PNG
                    </div>
                  </>
                )}

                <input
                  type="file"
                  id="input-file_2"
                  name="image_2"
                  accept="image/*"
                  hidden
                  onChange={(e) => handleChangeImage(e)}
                />
                <label
                  className="btn-upload py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-6 cursor-pointer"
                  htmlFor="input-file_2"
                >
                  Subir Imagen
                </label>
              </div>
              <div>
                {formData.image_3 ? (
                  <div className="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto max-h-60">
                    <Image
                      src={formData.image_3}
                      width={0}
                      height={0}
                      sizes="100vw"
                      placeholder="blur"
                      blurDataURL={formData.image_3}
                      style={{ width: "100%", height: "auto" }}
                      alt=""
                      className="preview-content"
                    />
                  </div>
                ) : (
                  <>
                    <p className="font-semibold mb-4">
                      Upload your blog image here, Please click Upload Image
                      Button.
                    </p>
                    <div className="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto max-h-60">
                      Soporta JPG y PNG
                    </div>
                  </>
                )}

                <input
                  type="file"
                  id="input-file_3"
                  name="image_3"
                  accept="image/*"
                  hidden
                  onChange={(e) => handleChangeImage(e)}
                />
                <label
                  className="btn-upload py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-6 cursor-pointer"
                  htmlFor="input-file_3"
                >
                  Subir Imagen
                </label>
              </div>
              <div>
                {formData.image_4 ? (
                  <div className="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto max-h-60">
                    <Image
                      src={formData.image_4}
                      width={0}
                      height={0}
                      sizes="100vw"
                      placeholder="blur"
                      blurDataURL={formData.image_4}
                      style={{ width: "100%", height: "auto" }}
                      alt=""
                      className="preview-content"
                    />
                  </div>
                ) : (
                  <>
                    {" "}
                    <p className="font-semibold mb-4">
                      Upload your blog image here, Please click Upload Image
                      Button.
                    </p>
                    <div className="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto max-h-60">
                      Soporta JPG y PNG
                    </div>
                  </>
                )}

                <input
                  type="file"
                  id="input-file_4"
                  name="image_4"
                  accept="image/*"
                  hidden
                  onChange={(e) => handleChangeImage(e)}
                />
                <label
                  className="btn-upload py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-6 cursor-pointer"
                  htmlFor="input-file_4"
                >
                  Subir Imagen
                </label>
              </div>
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
                    Cliente {/*<span className="text-red-600">*</span>*/}
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

                <div className="col-span-6">
                  <label className="font-semibold">
                    Tipo de proyecto
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    name="type"
                    value={formData.type ?? ""}
                    onChange={handleInputChange}
                    id="type"
                    type="text"
                    className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                    placeholder="Tipo de proyecto:"
                  />
                </div>

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
                    Create Blog
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
