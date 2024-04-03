import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";
import { Component as File } from "@sps/sps-file-storage-models-file-frontend-component";
import { Component as Button } from "@sps/sps-website-builder-models-button-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="hero-section-block"
      data-variant={props.variant}
      className="w-full overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between min-h-[70vh]">
          <div className="flex flex-shrink-0 w-8/12 flex-col gap-16">
            {props.data.title ? (
              <h1 className="text-4xl font-bold tracking-tight xl:inline text-[#252525] sm:text-5xl md:text-6xl">
                <ReactMarkdown>{props.data.title}</ReactMarkdown>
              </h1>
            ) : null}
            <div>
              {props.data?.buttons?.map((button, index) => {
                return (
                  <Button
                    isServer={false}
                    key={index}
                    variant={button.variant}
                    data={button}
                  />
                );
              })}
            </div>
          </div>
          {props.data.additionalMedia?.length ? (
            <div className="w-full -mr-[60%] flex object-shrink-0 max-w-[1100px]">
              <File
                variant="image"
                isServer={false}
                data={props.data.additionalMedia[0]}
                containerClassName="w-full relative aspect-w-4 aspect-h-4"
                className="object-contain"
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
