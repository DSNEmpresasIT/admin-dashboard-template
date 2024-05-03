
import React from 'react';

const InfoCompany = ({ data }) => {
  const { companyName, socialMedia, contactMethods } = data;

  return (
    <div className=' relative  '>
        <div className='flex gap-2  items-center '>
          <img src="/images/client/01.jpg" className=' h-20 w-20' alt="" />
          <div>
            <h5 className='text-2xl font-semibold'>{companyName}</h5>
            <p>Informacion corporativa</p>
          </div>
        </div>
        
      <div className='flex mt-3 gap-3'>
        <ul>
          <h3 className="text-lg font-semibold">Redes sociales</h3>
          {socialMedia.map((platform, index) => (
            <li key={index}>{platform}</li>
          ))}
        </ul>
        <ul>
          <h3 className="text-lg font-semibold">Datos de contacto</h3>
          {contactMethods.map((method, index) => (
            <li key={index}>{method}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfoCompany;
