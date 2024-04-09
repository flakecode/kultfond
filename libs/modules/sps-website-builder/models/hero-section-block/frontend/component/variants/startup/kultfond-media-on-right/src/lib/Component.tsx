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
      className="w-full overflow-hidden bg-gradient-to-b from-white to-[#F5F5F5] px-4 lg:px-0"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between min-h-[50vh] lg:min-h-[70vh]">
          <div className="flex flex-shrink-0 w-8/12 flex-col gap-16">
            {props.data.title ? (
              <h1 className="text-xl lg:text-[40px] font-bold leading-tight leading-relaxed xl:inline text-[#252525] md:text-[60px] font-primary">
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
            <div className="w-full -mr-[50%] flex object-shrink-0 max-w-[1100px]">
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
