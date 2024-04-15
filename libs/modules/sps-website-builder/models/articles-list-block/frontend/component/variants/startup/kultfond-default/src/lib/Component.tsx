import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";
import { Component as Article } from "@sps/startup-models-article-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="articles-list-block"
      data-variant={props.variant}
      className={`w-full bg-[#F4F4F4] px-4 lg:px-2 ${props.data.className || "pt-16 pb-24"}`}
    >
      <div className="mx-auto max-w-7xl flex flex-col gap-5 lg:gap-10">
        <div className="flex flex-col gap-5">
          {props.data.subtitle ? (
            <h5 className="text-sm lg:text-base tracking-tight text-[#808080]">
              <ReactMarkdown>{props.data.subtitle}</ReactMarkdown>
            </h5>
          ) : null}

          {props.data.title ? (
            <h3 className="text-4xl tracking-tight xl:inline text-[#252525] sm:text-5xl md:text-6xl font-primary">
              <ReactMarkdown>{props.data.title}</ReactMarkdown>
            </h3>
          ) : null}
        </div>
        <div>
          <Article isServer={props.isServer} variant="kultfond-find">
            {({ data: articles }) => {
              return (
                <div className="flex flex-col lg:grid grid-cols-3 gap-6">
                  {articles.map((article, index) => {
                    return (
                      <Article
                        key={index}
                        isServer={props.isServer}
                        variant="kultfond-card"
                        data={article}
                      />
                    );
                  })}
                </div>
              );
            }}
          </Article>
        </div>
      </div>
    </div>
  );
}
