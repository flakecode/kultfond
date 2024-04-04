import React from "react";
import { IComponentPropsExtended } from "./interface";
import { ErrorBoundary } from "@sps/ui-adapter";
import { IModel as IHeroSectionBlock } from "@sps/sps-website-builder-models-hero-section-block-contracts";
import { Component as HeroSectionBlock } from "@sps/sps-website-builder-models-hero-section-block-frontend-component";

export type IPageBlock = IHeroSectionBlock;

const pageBlocks = {
  "page-blocks.hero-section-block": HeroSectionBlock,
};

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="startup"
      data-model="project"
      data-variant={props.variant}
      className="w-full"
    >
      {props.data?.pageBlocks?.length
        ? props.data.pageBlocks.map((pageBlock, index) => {
            return (
              <PageBlock
                key={index}
                isServer={props.isServer}
                data={pageBlock}
              />
            );
          })
        : null}
    </div>
  );
}

function PageBlock(props: {
  data: IPageBlock;
  isServer: IComponentPropsExtended["isServer"];
}) {
  const key = props.data.__component;

  if (!key) {
    throw new Error(
      `PageBlock with props: "${JSON.stringify(props)}" is missing __component`,
    );
  }

  // problem with conflicting types in some constituents
  // that is why here is any
  const PageBlock: any = pageBlocks[key as keyof typeof pageBlocks];

  if (typeof PageBlock == "function") {
    return (
      <ErrorBoundary>
        <PageBlock
          isServer={props.isServer}
          variant={props.data.variant}
          data={props.data}
        />
      </ErrorBoundary>
    );
  }

  return (
    <div
      data-component={props.data.__component}
      data-variant={props.data.variant}
      className={`${props.data.className || ""}`}
    ></div>
  );
}
