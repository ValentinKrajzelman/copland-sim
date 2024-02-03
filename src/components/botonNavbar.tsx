"use client";
import React, { ReactNode } from "react";
import { aplicacion } from "@/app/page";

interface props {
  aplicaciones: aplicacion[];
  setAplicaciones: Function;
  nombre: String;
  descripcion: String;
  component: ReactNode;
}

const BotonNavbar = ({
  nombre,
  descripcion,
  component,
  aplicaciones,
  setAplicaciones,
}: props) => {
  const handleClick = (
    nombre: String,
    component: ReactNode,
    descripcion: String,
  ) => {
    if (aplicaciones.length != 0) {
      setAplicaciones([
        ...aplicaciones,
        {
          id: 1,
          open: true,
          minimized: false,
          x: 1,
          y: 1,
          component: component,
        },
      ]);
    } else {
      setAplicaciones([
        {
          id: 1,
          open: true,
          minimized: false,
          x: 1,
          y: 1,
          component: component,
        },
      ]);
    }
  };

  return (
    <button
      onClick={() => {
        handleClick(nombre, component, descripcion);
      }}
      className="flex justify-start px-3 pl-7 py-1 text-white hover:bg-[#217553]"
    >
      {nombre + ": " + descripcion}
    </button>
  );
};

export default BotonNavbar;
