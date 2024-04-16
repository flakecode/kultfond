import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as File } from "@sps/sps-file-storage-models-file-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="feature"
      data-variant={props.variant}
      className="w-full h-full flex flex-col"
    >
      {props.data.media && props.data.media.length ? (
        <File
          isServer={props.isServer}
          variant="image"
          data={props.data.media[0]}
          containerClassName="w-full aspect-w-4 aspect-h-5 relative overflow-hidden"
          className="object-cover w-full h-full"
        />
      ) : null}
      <div className="p-3 lg:p-5 flex flex-col justify-between gap-3 bg-white h-full">
        <div className="flex flex-col gap-3 lg:gap-5">
          {props.data.description ? (
            <p className="text-[#808080] leading-tight">
              {props.data.description}
            </p>
          ) : null}

          <p className="text-2xl text-[#1F1F1F] leading-tight font-medium">
            {props.data.title}
          </p>
        </div>
      </div>
    </div>
  );
}
