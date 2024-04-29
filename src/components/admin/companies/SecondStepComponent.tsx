import { ImageInputComponent } from '@/components/commons/ImageInputComponent'
import { encodeImageToBase64 } from '@/utils/helpers/encodeImageToBase64';
import Image from 'next/image'
import React from 'react'
import toast from 'react-hot-toast';

export const SecondStepComponent = ({ nextStep, prevStep , setFormData, formData }) => {

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

  function handleNextStep() {
    if (!formData.logo) {

      return toast.error('Los campos que contienen * son obligatorios');
    }

    nextStep();
  }

  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-12">
        <label className="font-semibold">
          Ingresar foto de perfil <span className="text-red-600">*</span>
        </label>
        <div>
          {formData.logo ? (
            <div className="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto overflow-hidden ">
              <div className=' h-[250px] w-[250px] overflow-hidden rounded-full'>
                <Image
                  //@ts-ignore
                  src={formData.logo}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "380px", height: "auto" }}
                  alt=""
                  className="preview-content"
                />
              </div>
            </div>
          ) : (
            <>
              <p className="font-semibold mb-4">
                Suba una imagen para su projecto <br /> haciendo click en el botón "Subir Imagen"
              </p>
              <div className="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto max-h-60">
                Soporta JPG y PNG
              </div>
            </>
          )}

          <input
            type="file"
            id={`input-file-company`}
            name={`logo`}
            accept="image/*"
            hidden
            onChange={(e) => handleChangeImage(e)}
          />
          <label
            className="btn-upload py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-6 cursor-pointer"
            htmlFor={`input-file-company`}
          >
            Subir Imagen
          </label>
        </div>
      </div>

      

      <div className="mt-5 col-span-12 flex justify-between">
          <button
            onClick={() => prevStep()}
            type="button"
            className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
          >
            Atras
          </button>
          <button
            onClick={handleNextStep}
            type="button"
            className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
          >
            Siguiente
          </button>
      </div>
    </div>
  )
}
