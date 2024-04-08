import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as Project } from "@sps/startup-models-project-frontend-component";
import { Component as PageGetUrlModelId } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-get-url-model-id";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-block.project-overview-block"
      data-variant={props.variant}
      className="w-full"
    >
      <PageGetUrlModelId
        isServer={props.isServer}
        variant="get-url-model-id"
        model="project"
      >
        {({ data: projectId }) => {
          if (!projectId) {
            return <></>;
          }

          return (
            <Project
              isServer={props.isServer}
              variant="kultfond-get-by-id"
              id={projectId}
            >
              {({ data }) => {
                return (
                  <Project
                    isServer={props.isServer}
                    variant="kultfond-overview"
                    data={data}
                  />
                );
              }}
            </Project>
          );
        }}
      </PageGetUrlModelId>
    </div>
  );
}
