
import Link from 'next/link';
import React from 'react';

const LatestProjects = ({ data }) => {
  return (
    <div className='w-full  '>
      <h6 className="text-lg font-semibold">Últimos proyectos</h6>
      <div className='h-full overflow-scroll overflow-y-hidden  w-auto  relative'>
      <ul className='flex' >
        {data.map((project) => (
            <div key={project.id} className='group p-2 min-w-[200px]'>
              <div  className=' max-w-[200px]  group-hover:scale-105  relative'>
                <img src={project.img} alt="project img" />
                <div className=' flex-col p-2 px-1 w-full items-center absolute bottom-0 bg-slate-950/50'>
                  <Link href={{}}>{project.name}</Link>
                  <p className='group-hover:flex hidden text-sm truncate'>{project.summary}</p>
                </div>
              </div>
          </div>
        ))}
      </ul>
     
    </div>
    </div>
    
  );
};

export default LatestProjects;
