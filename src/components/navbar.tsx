import React, { FC } from "react";
import BotonNavbar from "./botonNavbar";

import { Signal } from "@preact/signals-react";

import Links from "./links";

import { aplicaciones } from "@/app/page";

const Navbar = () => {

  return (
    <div>
      <div className="border-2 border-white bg-[#6D754E]">
        <BotonNavbar
          nombre="Links"
          descripcion=" info -Dev-"
          links={<Links  />}
        />
        {/* <BotonNavbar
          nombre="Help"
          descripcion=" docs v.1.5.3"
          link="links"
        />
        <BotonNavbar
          nombre="Mixer"
          descripcion=" audio"
          link="links"
        />
        <BotonNavbar
          nombre="Termianl (CMD)"
          descripcion=" -help for a list"
          link="links"
        />
        <BotonNavbar
          nombre="Ask the Wired"
          descripcion=" she shall answer"
          link="links"
        /> */}
      </div>
    </div>
  );
};

export default Navbar;
