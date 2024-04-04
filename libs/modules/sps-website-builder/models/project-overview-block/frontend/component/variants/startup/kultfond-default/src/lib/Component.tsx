import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as Project } from "@sps/startup-models-project-frontend-component";
import { IModel as IProject } from "@sps/startup-models-project-contracts-extended";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-block.project-overview-block"
      data-variant={props.variant}
      className="w-full"
    >
      <Project isServer={props.isServer} variant="kultfond-get-from-url">
        {({ data }: { data: IProject }) => {
          return (
            <Project
              isServer={props.isServer}
              variant="kultfond-overview"
              data={data}
            />
          );
        }}
      </Project>
    </div>
  );
}
