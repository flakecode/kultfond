import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as File } from "@sps/sps-file-storage-models-file-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="logotype"
      data-variant={props.variant}
      className="flex items-center w-full"
    >
      {props.data.media?.length ? (
        <File
          isServer={false}
          variant="image"
          data={props.data.media[0]}
          containerClassName="relative w-full aspect-w-5 aspect-h-1"
          className="object-contain object-left"
        />
      ) : null}
    </div>
  );
}
