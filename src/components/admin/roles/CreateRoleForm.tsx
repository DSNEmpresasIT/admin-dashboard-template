import React, { Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiDollarSign } from "react-icons/fi";

interface CreateRoleFormProps {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}

export const CreateRoleForm = ({ modal, setModal }: CreateRoleFormProps) => {
  return (
    <div
      className={`fixed z-50 flex items-center justify-center overflow-hidden inset-0 m-auto bg-gray-900 bg-opacity-50 dark:bg-opacity-80 ${
        modal ? "" : "hidden"
      }`}
    >
      <div className="relative w-full h-auto max-w-lg p-4">
        <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-700">
          <div className="flex justify-between items-center p-4 border-b border-gray-100 dark:border-gray-700">
            <h5 className="text-xl font-semibold">Crear un rol</h5>
            <button
              type="button"
              onClick={() => setModal(!modal)}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <AiOutlineClose className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4">
            <form className="mt-4">
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-12">
                  <label className="font-semibold">
                    Nombre de rol <span className="text-red-600">*</span>
                  </label>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                    placeholder="Ejemplo: admin"
                  />
                </div>

                <div className="col-span-12">
                  <label className="font-semibold">
                    Key
                  </label>
                  <input
                    name="key"
                    id="key"
                    type="text"
                    className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                    placeholder="key del rol"
                  />
                </div>

                <div className="col-span-12">
                  <button
                    type="submit"
                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                  >
                    Crear rol
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
