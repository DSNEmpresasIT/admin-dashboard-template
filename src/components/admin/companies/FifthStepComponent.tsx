import React from 'react'

export const FifthStepComponent = ({ prevStep , setFormData, formData }) => {
  function handleInputChange(e) {
    setFormData({
      ...formData,
      email: {
        ...formData.email,
        [e.target.name]: e.target.value
      }
    });
  }

  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-12">
        <label className="font-semibold">Credenciales de Email</label>
      </div>
      
      <div className="col-span-12">
        <label className="font-semibold">
          NoReply Host <span className="text-red-600">*</span>
        </label>
        <input
          onChange={handleInputChange}
          name="host"
          value={formData.email?.host}
          type="text"
          className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
          placeholder="Host"
        />
      </div>

      <div className="col-span-12">
        <label className="font-semibold">
          NoReply User <span className="text-red-600">*</span>
        </label>
        <input
          onChange={handleInputChange}
          name="user"
          value={formData.email?.user}
          type="text"
          className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
          placeholder="User"
        />
      </div>
      
      <div className="col-span-12">
        <label className="font-semibold">
          NoReply Password <span className="text-red-600">*</span>
        </label>
        <input
          onChange={handleInputChange}
          name="password"
          value={formData.email?.password}
          type="text"
          className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
          placeholder="Password"
        />
      </div>

      <div className="col-span-12">
        <label className="font-semibold">
          NoReply Port <span className="text-red-600">*</span>
        </label>
        <input
          onChange={handleInputChange}
          name="port"
          value={formData.email?.port}
          type="number"
          className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
          placeholder="Port"
        />
      </div>

      <div className="col-span-12">
        <label className="font-semibold">
          Email referenciado <span className="text-red-600">*</span>
        </label>
        <input
          onChange={handleInputChange}
          name="email"
          value={formData.email?.email}
          type="string"
          className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
          placeholder="Email"
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
            type="submit"
            className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
          >
            Crear companía
          </button>
      </div>
    </div>
  )
}
