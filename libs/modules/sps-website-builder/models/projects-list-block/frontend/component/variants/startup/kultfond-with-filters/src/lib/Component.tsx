import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";
import { Component as Category } from "@sps/startup-models-category-frontend-component";
import { Component as PageGetQueryFromUrl } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-get-query-from-url";
import { Component as Project } from "@sps/startup-models-project-frontend-component";
import Link from "next/link";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="projects-list-block"
      data-variant={props.variant}
      className="w-full px-4 lg:px-0 py-20 lg:py-40 bg-[#F5F5F5]"
    >
      <PageGetQueryFromUrl
        isServer={props.isServer}
        variant="get-query-from-url"
      >
        {({ data: query }) => {
          return (
            <div className="mx-auto w-full max-w-7xl flex flex-col gap-12">
              {props.data.title ? (
                <h1 className="text-4xl tracking-tight xl:inline text-[#252525] sm:text-5xl md:text-6xl font-primary">
                  <ReactMarkdown>{props.data.title}</ReactMarkdown>
                </h1>
              ) : null}
              <Category isServer={props.isServer} variant="kultfond-get-all">
                {({ data }) => {
                  return (
                    <div className="flex flex-col lg:flex-row">
                      <Link
                        data-module="startup"
                        data-model="category"
                        data-variant={props.variant}
                        className="px-5 py-3 lg:px-8 lg:py-4 text-base lg:text-xl text-[#1D1D1D] relative leading-none text-center lg:text-left"
                        href="?"
                      >
                        <p className="">Все проекты</p>
                        <div
                          className={`absolute inset-x-0 h-[2px] ${typeof query === "object" && Object.keys(query).length === 0 ? "bg-black" : "bg-[#D2D2D2]"} bottom-0`}
                        />
                      </Link>
                      {data?.map((category, index) => {
                        return (
                          <Category
                            key={index}
                            isServer={props.isServer}
                            variant="kultfond-set-query-button"
                            data={category}
                            query={query}
                          />
                        );
                      })}
                    </div>
                  );
                }}
              </Category>

              <Project
                isServer={props.isServer}
                variant="kultfond-get-all"
                query={query}
              >
                {({ data }) => {
                  return (
                    <div className="flex flex-col lg:grid grid-cols-3 gap-4 lg:gap-8">
                      {data?.map((project, index) => {
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
            </div>
          );
        }}
      </PageGetQueryFromUrl>
    </div>
  );
}
