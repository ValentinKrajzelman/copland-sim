"use client";
import React, { useEffect } from "react";

import { aplicacion } from "@/app/page";

interface props {
aplicaciones: aplicacion[],
setAplicaciones: Function
}

const RenderApp = ({aplicaciones, setAplicaciones}:props) => {

    useEffect(()=>{
        console.log('se re-renderizo')
    },[aplicaciones])
  
    return (
    <div>
      {aplicaciones && (
        <div>
          {aplicaciones.map((app:aplicacion) => {
            return <div>
                {app.component}
            </div>;
          })}
        </div>
      )}
    </div>
  );
};

export default RenderApp;
