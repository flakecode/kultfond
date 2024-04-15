import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { Component as File } from "@sps/sps-file-storage-models-file-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="hero-section-block"
      data-variant={props.variant}
      className={`w-full bg-[#F4F4F4] px-4 lg:px-2 ${props.data.className || "pt-16 pb-24"}`}
      id={props.data.anchor ? props.data.anchor : undefined}
    >
      <div className="mx-auto max-w-4xl flex flex-col gap-5 lg:gap-10">
        <div className="flex flex-col gap-5">
          {props.data.subtitle ? (
            <h5 className="text-sm lg:text-base tracking-tight text-[#808080]">
              <ReactMarkdown>{props.data.subtitle}</ReactMarkdown>
            </h5>
          ) : null}

          {props.data.title ? (
            <h3 className="text-2xl lg:text-4xl tracking-tight font-primary">
              <ReactMarkdown>{props.data.title}</ReactMarkdown>
            </h3>
          ) : null}
        </div>

        {props.data.description ? (
          <ReactMarkdown
            className="text-base lg:text-xl tracking-tight flex flex-col gap-6"
            components={{
              a: ({ node, ...props }) => {
                if (!props.href) {
                  return <p>{props.children}</p>;
                }

                return (
                  <Link
                    {...props}
                    href={props.href}
                    className="underline underline-offset-2 hover:opacity-70 transition duration-200"
                  >
                    {props.children}
                  </Link>
                );
              },
            }}
          >
            {props.data.description}
          </ReactMarkdown>
        ) : null}
        {props.data.media && props.data.media.length ? (
          <div>
            <File
              isServer={props.isServer}
              variant="image"
              data={props.data.media[0]}
              containerClassName="relative w-full aspect-w-16 aspect-h-9 overflow-hidden"
              className="object-cover w-full h-full"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
