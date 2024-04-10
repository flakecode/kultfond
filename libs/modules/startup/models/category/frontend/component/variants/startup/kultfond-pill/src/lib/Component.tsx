import React from "react";
import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="startup"
      data-model="category"
      data-variant={props.variant}
      className="px-4 py-1 text-[#1D1D1D] text-xs lg:text-sm rounded-full bg-[#F6F6F6] text-nowrap"
    >
      <p className="">{props.data.title}</p>
    </div>
  );
}
