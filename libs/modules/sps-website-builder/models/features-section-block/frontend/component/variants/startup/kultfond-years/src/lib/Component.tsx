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
      className={`w-full bg-[#F5F5F5] px-4 lg:px-2 ${props.data.className || "py-40"}`}
    >
      <div className="mx-auto w-full max-w-4xl flex flex-col gap-5 lg:gap-10">
        {props.data.title ? (
          <h3 className="text-2xl lg:text-4xl tracking-tight font-primary">
            <ReactMarkdown>{props.data.title}</ReactMarkdown>
          </h3>
        ) : null}

        <div className="flex flex-col gap-6 lg:gap-12 w-full">
          {props.data?.features?.map((feature, index) => {
            return (
              <Feature
                key={index}
                isServer={props.isServer}
                variant="kultfond-year"
                data={feature}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
