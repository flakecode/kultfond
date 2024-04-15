import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as PageGetUrlModelId } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-get-url-model-id";
import { Component as Article } from "@sps/startup-models-article-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="article-overview-block"
      data-variant={props.variant}
      className={`w-full bg-[#F4F4F4] ${props.data.className || ""}`}
    >
      <PageGetUrlModelId
        isServer={props.isServer}
        variant="get-url-model-id"
        model="article"
      >
        {({ data: articleId }) => {
          if (!articleId) {
            return <></>;
          }

          return (
            <Article
              isServer={props.isServer}
              variant="kultfond-find-by-id"
              id={articleId}
            >
              {({ data }) => {
                return (
                  <Article
                    isServer={props.isServer}
                    variant="kultfond-overview"
                    data={data}
                  />
                );
              }}
            </Article>
          );
        }}
      </PageGetUrlModelId>
    </div>
  );
}
