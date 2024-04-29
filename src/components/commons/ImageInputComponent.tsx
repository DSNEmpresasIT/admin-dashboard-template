import { encodeImageToBase64 } from "@/utils/helpers/encodeImageToBase64";
import { ProjectFormData } from "@/utils/types/types";
import Image from "next/image";
import React, { SetStateAction } from "react";

interface ImageInputComponentProps {
  formData: ProjectFormData;
  setFormData: React.Dispatch<SetStateAction<any>>,
  index?: number
}

export const ImageInputComponent:React.FC<ImageInputComponentProps> = ({ formData, setFormData, index }) => {
  function handleChangeImage(event) {
    if (event.target.files && event.target.files.length !== 0) {
      encodeImageToBase64(event.target.files[0], (base64: string) => {
        let newImageUrl = formData.imageUrl;
        newImageUrl[index] = base64

        setFormData({
          ...formData,
          [event.target.name]: newImageUrl,
        });
      });
    }
  }
  
  return (
    <div>
      {formData.imageUrl[index] ? (
        <div className="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto max-h-60 overflow-hidden">
          <Image
            //@ts-ignore
            src={typeof formData.imageUrl[index] === 'string' ? formData.imageUrl[index] : formData.imageUrl[index]?.url}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "380px", height: "auto" }}
            alt=""
            className="preview-content"
          />
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
        id={`input-file-${index}`}
        name={`imageUrl`}
        accept="image/*"
        hidden
        onChange={(e) => handleChangeImage(e)}
      />
      <label
        className="btn-upload py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-6 cursor-pointer"
        htmlFor={`input-file-${index}`}
      >
        Subir Imagen
      </label>
    </div>
  );
};
