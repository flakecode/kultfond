import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";
import { Component as Feature } from "@sps/sps-website-builder-models-feature-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="features-section-block"
      data-variant={props.variant}
      className="w-full py-40 bg-[#F5F5F5] px-4 lg:px-0"
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-16">
        {props.data.title ? (
          <h1 className="text-4xl font-bold tracking-tight xl:inline text-[#252525] sm:text-5xl md:text-6xl font-primary">
            <ReactMarkdown>{props.data.title}</ReactMarkdown>
          </h1>
        ) : null}
        <div className="flex flex-col gap-10 lg:w-8/12">
          {props.data?.features?.map((feature, index) => {
            return (
              <Feature
                key={index}
                isServer={props.isServer}
                variant="kultfond-contact"
                data={feature}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}