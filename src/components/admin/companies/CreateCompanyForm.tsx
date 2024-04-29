import React, { Dispatch, SetStateAction, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { FirstStepComponent } from './FirstStepComponent';
import { SecondStepComponent } from './SecondStepComponent';
import { ThirdStepComponent } from './ThirdStepComponent';
import { ForthStepComponent } from './ForthStepComponent';
import { FifthStepComponent } from './FifthStepComponent';
import toast from 'react-hot-toast';

interface CreateCompanyFormProps {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>
}

interface CreateCompanyFormData {
  company_name: string;
  logo?: string;
  cloudinary?: {
    cloud_name: string;
    api_key: string;
    api_secret: string;
  },
  email?: {
    host?: string;
    user?: string;
    password?: string;
    port?: number;
    email?: string;
  },
  contact_info?: {
    phone?: string;
    address?: string;
    whatssap?: string;
    schedule?: string;
    opening_time?: string;
    closing_time?: string;
    embed_google_map?: string;
  }
}


const initialState: CreateCompanyFormData = {
  company_name: ''
}

export const CreateCompanyForm = ({ modal, setModal }: CreateCompanyFormProps) => {
  const [ step, setStep ] = useState(1);
  const [ formData, setFormData ] = useState<CreateCompanyFormData>(initialState);

  function nextStep() {
    setStep(step+1);
  }

  function prevStep() {
    setStep(step-1);
  }

  function handleClose() {
    setModal(!modal)
    setFormData(initialState)
    setStep(1) 
  }


  function handleSubmit(e) {
    e.preventDefault()
    if (
        !formData.email?.host ||
        !formData.email?.user ||
        !formData.email?.password ||
        !formData.email?.port ||
        !formData.email?.email
      ) {
        return toast.error('Los campos que contienen * son obligatorios')
      }

    console.log(formData)
  }

  return (
    <div
      className={`fixed z-100 flex items-center justify-center overflow-hidden inset-0 m-auto bg-gray-900 bg-opacity-50 dark:bg-opacity-80 ${
        modal ? "" : "hidden"
      }`}
    >
      <div className="relative w-full h-auto max-w-[50vw] p-4">
        <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-700">
          <div className="flex justify-between items-center p-4 border-b border-gray-100 dark:border-gray-700">
            <h5 className="text-xl font-semibold">Crear companía</h5>
            <button
              type="button"
              onClick={handleClose}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <AiOutlineClose className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4">
            <form className="mt-4" onSubmit={handleSubmit}>
                { step === 1 && ( <FirstStepComponent nextStep={nextStep} setFormData={setFormData} formData={formData} /> ) }
                { step === 2 && ( <SecondStepComponent nextStep={nextStep} prevStep={prevStep} setFormData={setFormData} formData={formData} /> ) }
                { step === 3 && ( <ThirdStepComponent  prevStep={prevStep} setFormData={setFormData} formData={formData} nextStep={nextStep} />) }
                {step === 4 && ( <ForthStepComponent prevStep={prevStep} setFormData={setFormData} formData={formData} nextStep={nextStep} />)}
                { step === 5 && ( <FifthStepComponent formData={formData} prevStep={prevStep} setFormData={setFormData} /> ) }
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
