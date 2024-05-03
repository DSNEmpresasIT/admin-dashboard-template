import React from "react";

const CompanyUsers = ({ data }) => {
  return (
    
      <div className="rounded-md  ">
        <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
          <h6 className="text-lg font-semibold">Usuarios</h6>

          {/* <a
            href=""
            className="text-slate-400 hover:text-indigo-600 dark:text-white/70 dark:hover:text-white text-[20px]"
          >
            <i className="mdi mdi-swap-vertical"></i>
          </a> */}
        </div>

        <div
          className="relative overflow-x-auto block w-full max-h-[400px] simplebar-scrollable-y simplebar-scrollable-x"
          data-simplebar="init"
        >
          <div className="simplebar-wrapper m-0" >
            <div className="simplebar-height-auto-observer-wrapper">
              <div className="simplebar-height-auto-observer"></div>
            </div>
            <div className="simplebar-mask">
              <div
                className="simplebar-offset right-0 bottom-0"
              >
                <div
                  className="simplebar-content-wrapper h-auto overflow-scroll"
                  tabIndex={0}
                  role="region"
                  aria-label="scrollable content"
                >
                  <div className="simplebar-content p-0" >
                    <table className="w-full text-start">
                      <thead className="text-base">
                        <tr>
                          <th className="text-start font-semibold text-[15px] p-4 min-w-[150px]">
                            Usuarios
                          </th>
                          <th className="text-start font-semibold text-[15px] p-4 min-w-[100px]">
                            Email
                          </th>
                          <th className="text-end font-semibold text-[15px] p-4 min-w-[80px]">
                            Roll
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                            {data.map((user) => (
                              <tr>
                          <th key={user.id} className="text-start border-t border-gray-100 dark:border-gray-800 p-4 font-semibold">
                          {user.name}
                          </th>
                          <td className="text-start border-t truncate border-gray-100 dark:border-gray-800 p-4">
                          {user.email}
                          </td>
                          <td className="text-end border-t border-gray-100 dark:border-gray-800 p-4">
                            <span className="text-emerald-600 text-sm ms-1 font-semibold">
                              <i className="uil uil-arrow-growth"></i> Admin
                            </span>
                          </td>
                        </tr>
                           
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="simplebar-placeholder"
              style={{width: '254px', height: '560px'}}
            ></div>
          </div>
          <div
            className="simplebar-track simplebar-horizontal"
            style={{visibility: 'visible'}}
          >
            <div
              className="simplebar-scrollbar"
              style={{width: '188px', display: 'block', transform: 'translate3d(0px, 0px, 0px)'}}
            ></div>
          </div>
          <div
            className="simplebar-track simplebar-vertical"
            style={{visibility: 'visible'}}
          >
            <div
              className="simplebar-scrollbar"
              style={{height: '285px', transform: 'translate3d(0px, 0px, 0px)', display: 'block'}}
            ></div>
          </div>
        </div>
      </div>
  
  );
};

export default CompanyUsers;
