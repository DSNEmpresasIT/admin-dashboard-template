import React from 'react'

export const SecondStepComponent = ({ nextStep, prevStep , setFormData, formData }) => {

  function handleInputChange(e) {
    setFormData({
      ...formData,
      cloudinary: {
        [e.target.name]: e.target.value
      }
    })
  }

  function handleJump() {
    setFormData({
      ...formData,
      cloudinary: undefined
    })

    nextStep()
  }

  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-12">
        <label className="font-semibold">
          Cloud name <span className="text-red-600">*</span>
        </label>
        <input
          onChange={handleInputChange}
          name="cloud_name"
          value={formData.cloudinary?.cloud_name}
          type="text"
          className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
          placeholder="XXXXXX-XXXXX-XXXXXXXXXX"
        />
      </div>

      <div className="col-span-12">
        <label className="font-semibold">
          API Key <span className="text-red-600">*</span>
        </label>
        <input
          onChange={handleInputChange}
          name="api_key"
          value={formData.cloudinary?.api_key}
          type="text"
          className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
          placeholder="XXXXXX-XXXXX-XXXXXXXXXX"
        />
      </div>

      <div className="col-span-12">
        <label className="font-semibold">
          API Secret <span className="text-red-600">*</span>
        </label>
        <input
          onChange={handleInputChange}
          name="api_secret"
          value={formData.cloudinary?.api_secret}
          type="text"
          className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
          placeholder="XXXXXX-XXXXX-XXXXXXXXXX"
        />
      </div>

      <div className='mt-5 col-span-12 flex justify-end'>
        <button
            onClick={handleJump}
            type="button"
            className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
          >
            No tengo cloudinary (Saltar)
          </button>
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
            onClick={() => nextStep()}
            type="submit"
            className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
          >
            Siguiente
          </button>
      </div>
    </div>
  )
}
