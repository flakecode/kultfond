import React from "react";
import { IComponentPropsExtended } from "./interface";
import Link from "next/link";
import QueryString from "qs";

export function Component(props: IComponentPropsExtended) {
  const href = QueryString.stringify({
    filters: {
      categories: {
        id: {
          $in: [props.data.id],
        },
      },
    },
  });

  return (
    <Link
      data-module="startup"
      data-model="category"
      data-variant={props.variant}
      className="px-5 py-3 lg:px-8 lg:py-4 text-base lg:text-xl text-[#1D1D1D] relative leading-none text-center lg:text-left"
      href={`?${href}`}
    >
      <p className="">{props.data.title}</p>
      <div
        className={`absolute inset-x-0 h-[2px] ${props.isActive ? "bg-black" : "bg-[#D2D2D2]"} bottom-0`}
      />
    </Link>
  );
}
