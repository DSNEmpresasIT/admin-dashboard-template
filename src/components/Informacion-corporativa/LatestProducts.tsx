
'use client'
import Image from 'next/image';
import React from 'react';

const LatestProducts = ({ data }) => {
  return (
    <div className='h-full overflow-scroll overflow-x-hidden  w-auto relative  '>
      <h6 className="text-lg mb-2 font-semibold">Últimos productos</h6>
      <div className='grid  gap-2 grid-cols-6'>
        {data.map((product) => (
          <div key={product.id} className='flex bg-slate-400 p-3 flex-col '>

            <div  className=' ' >
              <img className='w-full object-cover' src={product.img} alt="imagenes" />
            </div>

            <div className=' p-2 h-full '>
           
              <h5>{product.name}</h5>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
