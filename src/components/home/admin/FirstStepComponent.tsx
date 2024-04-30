import React from 'react'
import toast from 'react-hot-toast'

export const FirstStepComponent = ({ nextStep , setFormData, formData }) => {

  function handleInputChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  function handleNextStep() {
    if (formData.company_name.length < 4) {
      return toast.error('Debe colocar un nombre de mas de 4 digitos obligatoriamente')
    } 

    nextStep()
  }

  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-12">
        <label className="font-semibold">
          Nombre de companía <span className="text-red-600">*</span>
        </label>
        <input
          onChange={handleInputChange}
          name="company_name"
          value={formData.company_name}
          type="text"
          className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
          placeholder="Ejemplo: DSN Empresas"
        />
      </div>

      <div className="mt-5 col-span-12 flex justify-end">
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
