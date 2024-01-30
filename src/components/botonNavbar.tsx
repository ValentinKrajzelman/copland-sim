"use client"
import React, {ReactNode } from "react";
import { aplicacion } from "@/app/page";

interface props {
  aplicaciones: aplicacion[],
  setAplicaciones: Function,
  nombre: String, 
  descripcion: String,  
  links: ReactNode, 
  }
const BotonNavbar = ({nombre, descripcion, links, aplicaciones, setAplicaciones}:props) => {
  
  const handleClick = (nombre: String, links: ReactNode, descripcion: String) => {
    // aplicaciones.value.push({
    //   id: 1,
    //   open: true,
    //   minimized: false,
    //   x: 1,
    //   y: 1,
    //   component: links,
    // })
    // console.log(aplicaciones.value)
    if(aplicaciones.length != 0){
      setAplicaciones([...aplicaciones,
        {
          id: 1,
          open: true,
          minimized: false,
          x: 1,
          y: 1,
          component: links,
        }]
        )
        console.log(aplicaciones);
      }
      else{
        console.log(aplicaciones)
        setAplicaciones (        [{
          id: 1,
          open: true,
          minimized: false,
          x: 1,
          y: 1,
          component: links,
        }])
      }
  };

  return (
    <button
      onClick={() => {
        handleClick(nombre, links, descripcion);
      }}
      className="px-3 py-1 text-white hover:bg-[#217553]"
    >
      {nombre + ": " + descripcion}
    </button>
  );
};

export default BotonNavbar;
