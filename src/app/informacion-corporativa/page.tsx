import CompanyUsers from '@/components/Informacion-corporativa/CompanyUsers';
import InfoCompany from '@/components/Informacion-corporativa/InfoCompany';
import LatestProducts from '@/components/Informacion-corporativa/LatestProducts';
import LatestProjects from '@/components/Informacion-corporativa/LatestProjects';
import MicrositeSection from '@/components/Informacion-corporativa/MicrositeSection';
import React from 'react'


const infoData = {
  companyName: "DSN",
  socialMedia: ["Twitter", "LinkedIn"],
  contactMethods: ["Email", "Teléfono"],
};


const micrositeData = {
  sections: [
    { title: "About", summary: "Sobre nosotros", completedData: true },
    { title: "Gallery", summary: "Imagenes de la empresa", completedData: false },
  ],
  hasMicrosite: true, // Simular que la empresa tiene micrositio
};


const usersData = [
  { id: 1, name: "Usuario 1", email: "usuario1@example.com" },
  { id: 2, name: "Usuario 2", email: "usuario2@example.com" },
];


const productsData = [
  { id: 1, name: "Producto 1", description: "Descripción del producto 1", img: "/images/shop/items/s1.jpg"},
  { id: 2, name: "Producto 2", description: "Descripción del producto 2", img: "/images/shop/items/s2.jpg"},
  { id: 3, name: "Producto 3", description: "Descripción del producto 2", img: "/images/shop/items/s3.jpg"},
  { id: 4, name: "Producto 4", description: "Descripción del producto 2", img: "/images/shop/items/s4.jpg"},
  { id: 5, name: "Producto 5", description: "Descripción del producto 2", img: "/images/shop/items/s5.jpg"},
  { id: 6, name: "Producto 6", description: "Descripción del producto 2", img: "/images/shop/items/s6.jpg"},
  { id: 7, name: "Producto 7", description: "Descripción del producto 2", img: "/images/shop/items/s7.jpg"},

];


const projectsData = [
  { id: 1, name: "Proyecto 1", summary: "Resumen del proyecto 1", img: "/images/portfolio/1.jpg" },
  { id: 2, name: "Proyecto 2", summary: "Resumen del proyecto 2",img: "/images/portfolio/2.jpg" },
  { id: 3, name: "Proyecto 3", summary: "Resumen del proyecto 2",img: "/images/portfolio/3.jpg" },
  { id: 4, name: "Proyecto 4", summary: "Resumen del proyecto 2",img: "/images/portfolio/4.jpg" },
  { id: 5, name: "Proyecto 5", summary: "Resumen del proyecto 2",img: "/images/portfolio/5.jpg" },
  { id: 5, name: "Proyecto 6", summary: "Resumen del proyecto 2",img: "/images/portfolio/6.jpg" },
  { id: 5, name: "Proyecto 7", summary: "Resumen del proyecto 2",img: "/images/portfolio/7.jpg" },
  { id: 5, name: "Proyecto 7", summary: "Resumen del proyecto 2",img: "/images/portfolio/8.jpg" },
  { id: 5, name: "Proyecto 7", summary: "Resumen del proyecto 2",img: "/images/portfolio/9.jpg" },
];
const page = () => {
  return (
    <div className="grid px-3 mb-4 mx-auto auto-rows-[300px] grid-cols-3 gap-4">
    <div className="row-span-1  rounded-md shadow  dark:shadow-gray-700 bg-white dark:bg-slate-900 p-4">
      <InfoCompany data={infoData} />
    </div>

    <div className="row-span-1  rounded-md shadow  dark:shadow-gray-700 bg-white dark:bg-slate-900 p-4">
      <MicrositeSection data={micrositeData} />
    </div>

    <div className="row-span-2  rounded-md shadow  dark:shadow-gray-700 bg-white dark:bg-slate-900 p-4 " >
      <CompanyUsers data={usersData} />
    </div>

    <div className='row-span-1  rounded-md shadow  dark:shadow-gray-700 bg-white dark:bg-slate-900 p-4  col-span-2'>
      <LatestProjects data={projectsData} />
    </div>

    <div className=" rounded-md shadow  col-span-3 dark:shadow-gray-700 bg-white dark:bg-slate-900 p-4 row-span-2">
      <LatestProducts data={productsData} />
    </div>
  </div>
  )
}

export default page
