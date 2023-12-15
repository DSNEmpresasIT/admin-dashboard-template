"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Datepicker from "react-tailwindcss-datepicker";

import { AiOutlineClose } from "react-icons/ai";

import Sidebar from "@/components/commons/sidebar";
import Topnav from "@/components/commons/topnav";
import { useSearchParams } from "next/navigation";
import { getProjectById } from "@/services/projects-service";

function encodeImageFileAsURL(file, callback) {
  const reader = new FileReader();
  reader.onloadend = function () {
    callback(reader.result);
  };
  reader.readAsDataURL(file);
}

const initialState = {
  clientName: process.env.CLIENT,
  title: "",
  description: "",
  type: "",
  projectClient: "",
  date: "",
  project_date: "",
  imageUrl: [null, null, null, null],
};

const Page = () => {
  const projectId = useSearchParams().get("projectId");
  const [toggle, setToggle] = useState(true);
  const [uploadFile, setUpoadFile] = useState();
  const [formData, setFormData] = useState<any>(initialState);

  function handleChangeImage(event) {
    if (event.target.files && event.target.files.length !== 0) {
      encodeImageFileAsURL(event.target.files[0], setUpoadFile);
    }
  }

  const handleSubmit = (e) => {};

  const handleInputChange = (e) => {};

  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
  }, []);

  useEffect(() => {
    getProjectById(projectId).then((response) => {
      setFormData({
        title: response.title,
        description: response.description,
        projectClient: response.projectClient ?? null,
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
        <Topnav toggle={toggle} setToggle={setToggle} />
        <div className="relative w-[85vw] h-full flex items-center justify-center">
          <div className="relative h-full bg-white dark:bg-slate-800 rounded-lg pt-[10vh]">
            <div className="p-8">
              <div className="grid grid-cols-2 bg-slate-900 gap-5 p-8">
                <div>
                  {uploadFile ? (
                    <div className="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto max-h-60">
                      <Image
                        src={uploadFile}
                        width={0}
                        height={0}
                        sizes="100vw"
                        placeholder="blur"
                        blurDataURL={uploadFile}
                        style={{ width: "380px", height: "auto" }}
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
                    id="input-file"
                    name="input-file"
                    accept="image/*"
                    hidden
                    onChange={(e) => handleChangeImage(e)}
                  />
                  <label
                    className="btn-upload py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-6 cursor-pointer"
                    htmlFor="input-file"
                  >
                    Subir Imagen
                  </label>
                </div>
                <div>
                  <p className="font-semibold mb-4">
                    Upload your blog image here, Please click Upload Image
                    Button.
                  </p>

                  {uploadFile ? (
                    <div className="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto max-h-60">
                      <Image
                        src={uploadFile}
                        width={0}
                        height={0}
                        sizes="100vw"
                        placeholder="blur"
                        blurDataURL={uploadFile}
                        style={{ width: "380px", height: "auto" }}
                        alt=""
                        className="preview-content"
                      />
                    </div>
                  ) : (
                    <div className="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto max-h-60">
                      Soporta JPG y PNG
                    </div>
                  )}

                  <input
                    type="file"
                    id="input-file"
                    name="input-file"
                    accept="image/*"
                    hidden
                    onChange={(e) => handleChangeImage(e)}
                  />
                  <label
                    className="btn-upload py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-6 cursor-pointer"
                    htmlFor="input-file"
                  >
                    Subir Imagen
                  </label>
                </div>
                <div>
                  <p className="font-semibold mb-4">
                    Upload your blog image here, Please click Upload Image
                    Button.
                  </p>

                  {uploadFile ? (
                    <div className="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto max-h-60">
                      <Image
                        src={uploadFile}
                        width={0}
                        height={0}
                        sizes="100vw"
                        placeholder="blur"
                        blurDataURL={uploadFile}
                        style={{ width: "380px", height: "auto" }}
                        alt=""
                        className="preview-content"
                      />
                    </div>
                  ) : (
                    <div className="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto max-h-60">
                      Soporta JPG y PNG
                    </div>
                  )}

                  <input
                    type="file"
                    id="input-file"
                    name="input-file"
                    accept="image/*"
                    hidden
                    onChange={(e) => handleChangeImage(e)}
                  />
                  <label
                    className="btn-upload py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-6 cursor-pointer"
                    htmlFor="input-file"
                  >
                    Subir Imagen
                  </label>
                </div>
                <div>
                  <p className="font-semibold mb-4">
                    Upload your blog image here, Please click Upload Image
                    Button.
                  </p>

                  {uploadFile ? (
                    <div className="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto max-h-60">
                      <Image
                        src={uploadFile}
                        width={0}
                        height={0}
                        sizes="100vw"
                        placeholder="blur"
                        blurDataURL={uploadFile}
                        style={{ width: "380px", height: "auto" }}
                        alt=""
                        className="preview-content"
                      />
                    </div>
                  ) : (
                    <div className="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto max-h-60">
                      Soporta JPG y PNG
                    </div>
                  )}

                  <input
                    type="file"
                    id="input-file"
                    name="input-file"
                    accept="image/*"
                    hidden
                    onChange={(e) => handleChangeImage(e)}
                  />
                  <label
                    className="btn-upload py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-6 cursor-pointer"
                    htmlFor="input-file"
                  >
                    Subir Imagen
                  </label>
                </div>
              </div>

              <form className="p-5 bg-slate-900">
                <div className="grid grid-cols-12 gap-3">
                  <div className="col-span-6">
                    <label className="font-semibold">
                      Título<span className="text-red-600">*</span>
                    </label>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                      placeholder="Title :"
                    />
                  </div>

                  <div className="col-span-6">
                    <label className="font-semibold">
                      Cliente <span className="text-red-600">*</span>
                    </label>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                      placeholder="Title :"
                    />
                  </div>

                  <div className="col-span-6">
                    <label className="font-semibold">
                      Tipo <span className="text-red-600">*</span>
                    </label>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                      placeholder="Title :"
                    />
                  </div>

                  <div className="col-span-6">
                    <label className="font-semibold">
                      Fecha <span className="text-red-600">*</span>
                    </label>
                    <Datepicker
                      asSingle={true}
                      value={{ startDate: new Date(), endDate: new Date() }}
                      onChange={(value) => console.log(value)}
                      inputClassName="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                    />
                  </div>

                  <div className="col-span-12">
                    <label className="font-semibold"> Descripción: </label>
                    <textarea
                      name="comments"
                      id="comments"
                      className="form-input w-full py-2 px-3 h-24 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                      placeholder="Description :"
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
      </main>
    </div>
  );
};

export default Page;
