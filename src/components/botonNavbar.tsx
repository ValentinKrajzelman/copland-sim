"use client"
import React, { ComponentType, FC, ReactNode } from "react";
import { aplicaciones, aplicacion } from "@/app/page";

interface props {
  nombre: String;
  descripcion: String;
  links: ReactNode;
}

const BotonNavbar = ({ nombre, links, descripcion }: props) => {
  
  const handleClick = (nombre: String, links: ReactNode, descripcion: String) => {
    aplicaciones.value.push({
      id: 1,
      open: true,
      minimized: false,
      x: 1,
      y: 1,
      component: links,
    })
    console.log(aplicaciones.value)
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
