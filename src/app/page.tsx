'use client'
import Image from "next/image";
import Navbar from "@/components/navbar";

import { Signal, signal } from "@preact/signals-react";
import { FC, ReactNode, Suspense } from "react";
import RenderApp from "@/components/renderApp";

export interface aplicacion {
  id: Number;
  open: Boolean;
  minimized: Boolean;
  x: Number;
  y: Number;
  component: ReactNode;
}

export const aplicaciones: Signal<aplicacion[]> = signal([]);

export default function Home() {

  return (
    <Suspense>
      <main className="relative">
        <RenderApp/>
        <div className="flex h-screen w-screen justify-center bg-[#070420] ">
          <img className="h-screen" src="/fondo.png"></img>
        </div>
        <div className="absolute left-5 top-5">
          <Navbar />
        </div>
      </main>
    </Suspense>
  );
}
