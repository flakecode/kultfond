import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";
import { Component as Button } from "@sps/sps-website-builder-models-button-frontend-component";
import { Component as Project } from "@sps/startup-models-project-frontend-component";
import { IModel as IProject } from "@sps/startup-models-project-contracts-extended";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="projects-list-block"
      data-variant={props.variant}
      className={`w-full px-4 lg:px-2 bg-[#F5F5F5] ${props.data.className || "pb-32"}`}
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-12">
        {props.data.title ? (
          <h1 className="text-4xl tracking-tight xl:inline text-[#252525] sm:text-5xl md:text-6xl text-center font-primary">
            <ReactMarkdown>{props.data.title}</ReactMarkdown>
          </h1>
        ) : null}
        <Project isServer={props.isServer} variant="kultfond-get-all">
          {({ data }: { data: IProject[] }) => {
            return (
              <div className="flex flex-col lg:grid grid-cols-3 gap-4 lg:gap-8">
                {data.map((project, index) => {
                  if (index >= 3) {
                    return null;
                  }

                  return (
                    <Project
                      key={index}
                      isServer={props.isServer}
                      variant="kultfond-card"
                      data={project}
                    />
                  );
                })}
              </div>
            );
          }}
        </Project>
        <div className="flex items-center gap-8 mx-auto">
          {props.data.buttons?.map((button, index) => {
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
      </div>
    </div>
  );
}
