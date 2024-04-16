import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";
import { Component as File } from "@sps/sps-file-storage-models-file-frontend-component";
import { Component as Feature } from "@sps/sps-website-builder-models-feature-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="features-section-block"
      data-variant={props.variant}
      className={`w-full px-4 lg:px-2 bg-[#F5F5F5] flex flex-col gap-6 lg:gap-20 ${props.data.className || "pt-20 pb-20 lg:pt-24 lg:pb-32"}`}
    >
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="block w-full lg:hidden">
          {props.data.title ? (
            <h1 className="text-3xl text-left tracking-tight text-[#252525] lg:text-6xl font-primary">
              <ReactMarkdown>{props.data.title}</ReactMarkdown>
            </h1>
          ) : null}
        </div>
        <div className="w-full lg:w-8/12 flex flex-col gap-10">
          <div className="hidden lg:block">
            {props.data.title ? (
              <h1 className="text-4xl tracking-tight xl:inline text-[#252525] sm:text-5xl md:text-6xl font-primary">
                <ReactMarkdown>{props.data.title}</ReactMarkdown>
              </h1>
            ) : null}
          </div>

          <div className="flex flex-col gap-4">
            {props.data.description ? (
              <ReactMarkdown className="text-base lg:text-lg flex flex-col gap-6">
                {props.data.description}
              </ReactMarkdown>
            ) : null}
            {props.data.additionalMedia?.length ? (
              <div className="w-full max-w-[280px]">
                <File
                  variant="image"
                  isServer={props.isServer}
                  data={props.data.additionalMedia[0]}
                  containerClassName="w-full relative aspect-w-6 aspect-h-2"
                  className="object-contain"
                />
              </div>
            ) : null}
          </div>
        </div>
        {props.data.media?.length ? (
          <div className="hidden w-4/12 -ml-[20%] lg:flex justify-center opacity-20">
            <div className="w-full h-px relative flex">
              <div className="absolute inset-0 w-[80vw] lg:w-[180%]">
                <div className="transform lg:translate-x-0 -translate-y-1/2 relative">
                  <File
                    variant="image"
                    isServer={props.isServer}
                    data={props.data.media[0]}
                    containerClassName="w-full relative aspect-w-4 aspect-h-3"
                    className="object-contain"
                  />
                  {/* <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-[#F4F4F4]"></div> */}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {props.data.features?.length ? (
        <div className="w-full mx-auto max-w-7xl flex flex-col lg:grid grid-cols-3 gap-8 lg:gap-12">
          {props.data.features.map((feature, index) => {
            return (
              <Feature
                key={index}
                isServer={props.isServer}
                variant="kultfond-management"
                data={feature}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
