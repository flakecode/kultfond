import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";
import { Component as File } from "@sps/sps-file-storage-models-file-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="hero-section-block"
      data-variant={props.variant}
      className={`w-full px-4 lg:px-2 bg-[#F5F5F5] ${props.data.className || "pt-20 pb-20 lg:pt-24 lg:pb-32"}`}
    >
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="block w-full lg:hidden">
          {props.data.title ? (
            <h1 className="text-3xl text-left tracking-tight text-[#252525] lg:text-6xl font-primary">
              <ReactMarkdown>{props.data.title}</ReactMarkdown>
            </h1>
          ) : null}
        </div>
        <div className="w-full lg:w-[50%] -ml-[10%] flex">
          {props.data.media?.length ? (
            <div className="w-full flex">
              <File
                variant="image"
                isServer={props.isServer}
                data={props.data.media[0]}
                containerClassName="w-full relative aspect-w-3 aspect-h-4"
                className="object-cover"
              />
            </div>
          ) : null}
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-10">
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
      </div>
    </div>
  );
}
