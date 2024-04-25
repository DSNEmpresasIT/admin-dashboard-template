import React from "react";
import Link from "next/link";

import SimpleBarReact from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

import { FiArrowRight } from "react-icons/fi";
import { Roles, UserTableInterface } from "@/utils/types/types";

export default function UserTable() {
  const userTable: UserTableInterface[] = [
    {
      logo: 'uwu',
      userName: "Dabo rabo",
      role: Roles.ADMIN,
      status: true,
      company: {
        id: 1,
        companyName: 'DSN Empresas'
      },
    },
    {
      logo: 'uwu',
      userName: "Dabo rabo",
      role: Roles.ADMIN,
      status: true,
      company: {
        id: 1,
        companyName: 'DSN Empresas'
      },
    },
    {
      logo: 'uwu',
      userName: "Dabo rabo",
      role: Roles.ADMIN,
      status: true,
      company: {
        id: 1,
        companyName: 'DSN Empresas'
      },
    },
    {
      logo: 'uwu',
      userName: "Dabo rabo",
      role: Roles.ADMIN,
      status: true,
      company: {
        id: 1,
        companyName: 'DSN Empresas'
      },
    },
    {
      logo: 'uwu',
      userName: "Dabo rabo",
      role: Roles.ADMIN,
      status: true,
      company: {
        id: 1,
        companyName: 'DSN Empresas'
      },
    },
  ];
  return (
    <>
      <div className="xl:col-span-12 lg:col-span-12">
        <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
          <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
            <h6 className="text-lg font-semibold">Usuarios</h6>
            <Link
              href="#"
              className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white after:bg-indigo-600 dark:after:bg-white duration-500"
            >
              Ver todos los usuarios <FiArrowRight className="ms-1 text-sm" />
            </Link>
          </div>
          <SimpleBarReact className="max-h-[600px]">
            <div className="relative overflow-x-auto block w-full">
              <table className="w-full text-start">
                <thead className="text-base">
                  <tr>
                    <th className="text-center font-semibold text-[15px] p-4 min-w-[128px]"></th>
                    <th className="text-center font-semibold text-[15px] p-4 min-w-[128px]">
                      Nombre
                    </th>
                    <th className="text-center font-semibold text-[15px] p-4 min-w-[128px]">
                      Companía
                    </th>
                    <th className="text-center font-semibold text-[15px] p-4 min-w-[128px]">Rol</th>
                    <th className="text-center font-semibold text-[15px] p-4 min-w-[128px]">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {userTable.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="text-center border-t border-gray-100 dark:border-gray-800 p-4">
                          {item.logo}
                        </td>
                        <td className="text-center border-t border-gray-100 dark:border-gray-800 p-4">
                          <span className="text-slate-400">{item.userName}</span>
                        </td>
                        <td className="text-center border-t border-gray-100 dark:border-gray-800 p-4">
                          {item.company.companyName}
                        </td>
                        <td className="text-center border-t border-gray-100 dark:border-gray-800 p-4">
                            <span className="bg-indigo-600/10 dark:bg-indigo-600/20 border border-indigo-600/10 dark:border-indigo-600/20 text-indigo-600 text-[12px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">
                              {item.role === Roles.ADMIN && 'Admin'}
                            </span>
                        </td>
                        <td className="text-center border-t border-gray-100 dark:border-gray-800 p-4">
                          { item.status ? (
                            <span className="bg-emerald-600/10 dark:bg-emerald-600/20 border border-emerald-600/10 dark:border-emerald-600/20 text-emerald-600 text-[12px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">
                              Activo
                            </span>
                          ) : (
                            <span className="bg-red-600/10 dark:bg-red-600/20 border border-red-600/10 dark:border-red-600/20 text-red-600 text-[12px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">
                              Inactivo
                            </span>
                          )}
                          {/* {item.status === "New Order" ? (
                            <span className="bg-indigo-600/10 dark:bg-indigo-600/20 border border-indigo-600/10 dark:border-indigo-600/20 text-indigo-600 text-[12px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">
                              {item.status}
                            </span>
                          ) : (
                            ""
                          )}
                          {item.status === "Return" ? (
                            <span className="bg-red-600/10 dark:bg-red-600/20 border border-red-600/10 dark:border-red-600/20 text-red-600 text-[12px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">
                              {item.status}
                            </span>
                          ) : (
                            ""
                          )}
                          {item.status === "Cancel" ? (
                            <span className="bg-gray-500/5 border border-gray-500/5 text-gray-500 text-[12px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">
                              {item.status}
                            </span>
                          ) : (
                            ""
                          )} */}
                        </td>
                        <td className="text-center border-t border-gray-100 dark:border-gray-800 p-4"><button>sexo</button></td>
                        <td className="text-center border-t border-gray-100 dark:border-gray-800 p-4"><button>sexo</button></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </SimpleBarReact>
        </div>
      </div>
    </>
  );
}
