
import Link from 'next/link';
import React from 'react';
import { CiWarning } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
const MicrositeSection = ({ data }) => {
  const { sections, hasMicrosite } = data;

  return (
    <div className=' relative  '>
         <div className="p-6 flex items-center justify-between  border-gray-100 dark:border-gray-800">
          <h6 className="text-lg font-semibold">Microsite</h6>
        </div>
        <div className='flex flex-col gap-3'>
      {hasMicrosite ? (
        sections.map((section, index) => (
          <div className='flex items-center justify-between' key={index}>
            <div>
              <h3>{section.title}</h3>
              <p>{section.summary}</p>
            </div>
            <div >
              {
                (section.completedData) ? 
                <div>
                  <h6 className='text-red-300 flex items-center gap-2'>Faltan datos por completar<CiWarning className='text-2xl'/></h6>
                  <Link className='text-sm hover:text-blue-500 ' href={{}}>Terminar de completar</Link>
                </div>
                : 
                <div>
                  <h6 className='text-green-300 flex items-center gap-2'>Los datos estan completos<FaCheck className='text-2xl'/></h6>
                  <Link className='text-sm hover:text-blue-500 ' href={{}}>Ir a revisar</Link>
                </div>
              }
            </div>
          </div>
        ))
      ) : (
        <div>
          <h6 className="text-md font-semibold">No hay micrositio disponible</h6>
          <Link href={{}}>Solicitar Micrositio</Link>
        </div>
      )}
      </div>
    </div>
  );
};

export default MicrositeSection;
