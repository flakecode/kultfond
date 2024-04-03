import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="hero-section-block"
      data-variant={props.variant}
      className="w-full bg-[#A48A67] pt-16 pb-24"
    >
      <div className="mx-auto max-w-7xl flex flex-col gap-12">
        {props.data.title ? (
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center text-white">
            <ReactMarkdown>{props.data.title}</ReactMarkdown>
          </h2>
        ) : null}

        {props.data.description ? (
          <ReactMarkdown className="text-lg tracking-tight text-white flex flex-col gap-6">
            {props.data.description}
          </ReactMarkdown>
        ) : null}
      </div>
    </div>
  );
}
