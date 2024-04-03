import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="projects-list-block"
      data-variant={props.variant}
      className="w-full"
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-12">
        {props.data.title ? (
          <h1 className="text-4xl font-bold tracking-tight xl:inline text-[#252525] sm:text-5xl md:text-6xl text-center">
            <ReactMarkdown>{props.data.title}</ReactMarkdown>
          </h1>
        ) : null}
      </div>
    </div>
  );
}
