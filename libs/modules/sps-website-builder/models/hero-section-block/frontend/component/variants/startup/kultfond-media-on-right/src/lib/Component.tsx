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
      className={`w-full overflow-x-hidden bg-gradient-to-b from-white to-[#F5F5F5] px-4 lg:px-2 ${props.data.className || ""}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between min-h-[50vh] lg:min-h-[70vh]">
          <div className="flex flex-shrink-0 w-8/12 flex-col gap-16 relative z-10 mt-8 mb-8 lg:mt-40 xl:mt-32 lg:mb-16">
            {props.data.title ? (
              <h1 className="text-2xl lg:text-[40px] xl:text-[52px] leading-tight text-[#252525] font-primary">
                <ReactMarkdown>{props.data.title}</ReactMarkdown>
              </h1>
            ) : null}
            {props.data?.buttons?.length ? (
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
            ) : null}
          </div>
          {props.data.additionalMedia?.length ? (
            <div className="w-4/12 flex justify-center">
              <div className="w-full h-px relative flex">
                <div className="absolute inset-0 w-[80vw] lg:w-[180%]">
                  <div className="transform lg:translate-x-0 -translate-y-1/2 relative">
                    <File
                      variant="image"
                      isServer={false}
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
