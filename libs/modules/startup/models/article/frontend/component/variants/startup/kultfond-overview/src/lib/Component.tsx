import React from "react";
import { IComponentPropsExtended } from "./interface";
import { ErrorBoundary } from "@sps/ui-adapter";
import { IModel as IHeroSectionBlock } from "@sps/sps-website-builder-models-hero-section-block-contracts";
import { IModel as ISliderBlock } from "@sps/sps-website-builder-models-slider-block-contracts";
import { Component as HeroSectionBlock } from "@sps/sps-website-builder-models-hero-section-block-frontend-component";
import { Component as SliderBlock } from "@sps/sps-website-builder-models-slider-block-frontend-component";
import { IModel as IFeaturesSectionBlock } from "@sps/sps-website-builder-models-features-section-block-contracts";
import { Component as FeaturesSectionBlock } from "@sps/sps-website-builder-models-features-section-block-frontend-component";

export type IPageBlock =
  | IHeroSectionBlock
  | ISliderBlock
  | IFeaturesSectionBlock;

const pageBlocks = {
  "page-blocks.hero-section-block": HeroSectionBlock,
  "page-blocks.slider-block": SliderBlock,
  "page-blocks.features-section-block": FeaturesSectionBlock,
};

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="startup"
      data-model="article"
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
