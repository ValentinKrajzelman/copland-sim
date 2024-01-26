import React, { FC } from "react";

import { aplicacion, aplicaciones } from "@/app/page";

interface props {
  id: Number;
}

const Links = () => {
  console.log(aplicaciones);
  console.log("llego");
  return <div className="absolute h-24 w-24 bg-white">asdf</div>;
};

export default Links;
