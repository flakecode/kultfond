import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as File } from "@sps/sps-file-storage-models-file-frontend-component";
import Link from "next/link";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="logotype"
      data-variant={props.variant}
      className="flex items-center"
    >
      <Link href={props.data.url || "/"}>
        {props.data.media?.length ? (
          <File
            isServer={false}
            variant="image"
            data={props.data.media[0]}
            containerClassName="relative w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]"
            className="object-contain object-left"
          />
        ) : null}
      </Link>
    </div>
  );
}
