"use client";
import React, { useEffect, useRef } from "react";

import { aplicacion } from "@/app/page";

interface props {
  aplicaciones: aplicacion[];
  aplicacionActual: aplicacion;
  setAplicaciones: Function;
  index: number;
}

const DraggableApp = ({ aplicacionActual, aplicaciones, setAplicaciones, index }: props) => {
  //con lo useRef devolvemos un objeto con el contenido de los elementos,
  //con la propiedad ref
  const box = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  //useRef sirve para manipular datos sin re-renderizar el dom
  const isClicked = useRef<boolean>(false);

  const coords = useRef<{
    startX: number;
    startY: number;
    lastX: number;
    lastY: number;
  }>({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    if (!box.current || !bar.current) return;
    const boxCur = box.current;
    const barCur = bar.current;

    //hacemos los eventos, que asignamos con el ref a los elementos
    const onMouseDown = (e: MouseEvent) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    };
    const onMouseUp = (e: MouseEvent) => {
      isClicked.current = false;
      coords.current.lastX = boxCur.offsetLeft;
      coords.current.lastY = boxCur.offsetTop;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) return;
      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;
      boxCur.style.top = `${nextY}px`;
      boxCur.style.left = `${nextX}px`;
    };

    //asignamos los eventos a los ref
    boxCur.addEventListener("mousedown", onMouseDown);
    boxCur.addEventListener("mouseup", onMouseUp);
    barCur.addEventListener("mousemove", onMouseMove);
    barCur.addEventListener("mouseleave", onMouseUp);

    const cleanup = () => {
      boxCur.removeEventListener("mousedown", onMouseDown);
      boxCur.removeEventListener("mouseup", onMouseUp);
      barCur.removeEventListener("mousemove", onMouseMove);
      barCur.removeEventListener("mouseleave", onMouseUp);
    };

    return cleanup;
  }, []);

  const minimizarApp = () =>{
    const aux = aplicaciones;
    aux[index] = {...aplicacionActual, minimized: true};
    setAplicaciones(aux);
    console.log(aplicaciones)
  };

  return (
    <div>
      <div ref={box} className="absolute  border-2">
        <div ref={bar} className="h-6 bg-blue-400">
            <button onClick={()=>{minimizarApp()}}>A</button>
        </div>
        <div>{aplicacionActual.component}</div>
      </div>
    </div>
  );
};

export default DraggableApp;
