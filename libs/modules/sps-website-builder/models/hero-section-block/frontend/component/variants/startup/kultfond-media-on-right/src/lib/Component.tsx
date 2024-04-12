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
      className={`w-full overflow-x-hidden bg-gradient-to-b from-white to-[#F5F5F5] px-4 lg:px-2 ${props.data.className || "pt-20 lg:pt-0"}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between min-h-[50vh] lg:min-h-[70vh]">
          {props.data.additionalMedia?.length ? (
            <div className="w-[150%] flex lg:hidden justify-center">
              <File
                isServer={props.isServer}
                variant="image"
                data={props.data.additionalMedia[0]}
                containerClassName="w-full relative aspect-w-4 aspect-h-3"
                className="object-contain"
              />
            </div>
          ) : null}
          <div className="flex flex-shrink-0 lg:w-8/12 flex-col gap-8 lg:gap-16 relative z-10 mt-8 mb-0 lg:mt-40 xl:mt-32 lg:mb-16">
            {props.data.title ? (
              <h1 className="text-3xl lg:text-[40px] xl:text-[52px] leading-tight text-[#252525] font-primary">
                <ReactMarkdown>{props.data.title}</ReactMarkdown>
              </h1>
            ) : null}
            {props.data?.buttons?.length ? (
              <div className="lg:grid grid-cols-3">
                {props.data?.buttons?.map((button, index) => {
                  return (
                    <Button
                      isServer={props.isServer}
                      key={index}
                      variant={button.variant}
                      data={button}
                    />
                  );
                })}
              </div>
            ) : null}
          </div>
          {props.data.additionalMedia?.length ? (
            <div className="hidden w-4/12 lg:flex justify-center">
              <div className="w-full h-px relative flex">
                <div className="absolute inset-0 w-[80vw] lg:w-[180%]">
                  <div className="transform lg:translate-x-0 -translate-y-1/2 relative">
                    <File
                      variant="image"
                      isServer={props.isServer}
                      data={props.data.additionalMedia[0]}
                      containerClassName="w-full relative aspect-w-4 aspect-h-3"
                      className="object-contain"
                    />
                    {/* <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-[#F4F4F4]"></div> */}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          {/* {props.data.additionalMedia?.length ? (
            <div className="w-full -mr-[50%] flex object-shrink-0 max-w-[1100px] opacity-60 lg:opacity-100">
              <File
                variant="image"
                isServer={false}
                data={props.data.additionalMedia[0]}
                containerClassName="w-full relative aspect-w-4 aspect-h-4"
                className="object-contain"
              />
            </div>
          ) : null} */}
        </div>
      </div>
    </div>
  );
}
