"use client";
import Navbar from "@/components/navbar";

import { ReactNode, Suspense, useEffect, useRef, useState } from "react";
import DraggableApp from "@/components/draggableApp";

export interface aplicacion {
  id: Number;
  open: Boolean;
  minimized: Boolean;
  x: Number;
  y: Number;
  component: ReactNode;
}




export default function Home() {
  const [aplicaciones, setAplicaciones] = useState<aplicacion[]>([]);

  return (
    <Suspense>
      <main className="relative">
        <div>
          {aplicaciones &&
            aplicaciones.map((app: aplicacion) => {
              return (
                <DraggableApp
                  aplicaciones={app}
                  setAplicaciones={setAplicaciones}
                />
              );
            })}
          <div className="flex h-screen w-screen justify-center bg-[#070420] ">
            <img className="h-screen" src="/fondo.png"></img>
          </div>
          <div className="absolute left-5 top-5">
            <Navbar
              aplicaciones={aplicaciones}
              setAplicaciones={setAplicaciones}
            />
          </div>
        </div>
      </main>
    </Suspense>
  );
}
