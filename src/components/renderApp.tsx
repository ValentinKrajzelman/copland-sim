"use client";
import React, { useEffect } from "react";

import { aplicacion, aplicaciones } from "@/app/page";


const RenderApp = () => {

    useEffect(()=>{
        console.log('se re-renderizo')
    },[aplicaciones])
  
    return (
    <div>
      {aplicaciones.value && (
        <div>
          {aplicaciones.value.map((app:aplicacion) => {
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
