import React from 'react'
import toast from 'react-hot-toast';

export const ThirdStepComponent = ({ prevStep, setFormData, formData, nextStep }) => {
  
  function handleInputChange(e) {
    setFormData({
      ...formData,
      contact_info: {
        ...formData.contact_info,
        [e.target.name]: e.target.value
      }
    })
  }


  function handleNextStep() {
    const { contact_info  } = formData;
    if (!contact_info?.phone || !contact_info?.address || !contact_info?.whatssap || !contact_info?.embed_google_map) {
      return toast.error('Los campos que poseen * son obligatorios')
    }

    nextStep()
  }

  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-12">
        <label className="font-semibold">
          Teléfono <span className="text-red-600">*</span>
        </label>
        <input
          onChange={handleInputChange}
          name="phone"
          value={formData.contact_info?.phone}
          type="text"
          className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
          placeholder="Ejemplo: DSN Empresas"
        />
      </div>

      <div className="col-span-12">
        <label className="font-semibold">
          Dirección <span className="text-red-600">*</span>
        </label>
        <input
          onChange={handleInputChange}
          name="address"
          value={formData.contact_info?.address}
          type="text"
          className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
          placeholder="Ejemplo: DSN Empresas"
        />
      </div>

      <div className="col-span-12">
        <label className="font-semibold">
          Whatssap<span className="text-red-600">*</span>
        </label>
        <input
          onChange={handleInputChange}
          name="whatssap"
          value={formData.contact_info?.whatssap}
          type="text"
          className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
          placeholder="Ejemplo: DSN Empresas"
        />
      </div>

      <div className="col-span-12">
        <label className="font-semibold">
          Google Map URL <span className="text-red-600">*</span>
        </label>
        <input
          onChange={handleInputChange}
          name="embed_google_map"
          value={formData.contact_info?.embed_google_map}
          type="text"
          className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
          placeholder="Ejemplo: DSN Empresas"
        />
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
