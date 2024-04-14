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
      className="px-5 py-3 xl:px-8 xl:py-4 text-base text-lg xl:text-xl text-[#1D1D1D] relative leading-none text-center lg:text-left whitespace-nowrap"
      href={`?${href}`}
    >
      <p className="">{props.data.title}</p>
      <div
        className={`absolute inset-x-0 h-[2px] ${props.isActive ? "bg-[#A48A67]" : "bg-transparent lg:bg-[#D2D2D2]"} bottom-0`}
      />
      <div
        className={`absolute inset-x-0 h-[2px] lg:hidden ${props.isActive ? "bg-[#A48A67]" : "bg-transparent"} top-0`}
      />
      <div
        className={`absolute inset-y-0 w-[2px] lg:hidden ${props.isActive ? "bg-[#A48A67]" : "bg-transparent"} left-0`}
      />
      <div
        className={`absolute inset-y-0 w-[2px] lg:hidden ${props.isActive ? "bg-[#A48A67]" : "bg-transparent"} right-0`}
      />
    </Link>
  );
}
