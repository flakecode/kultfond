import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="feature"
      data-variant={props.variant}
      className="w-full flex flex-col lg:flex-row gap-3"
    >
      <div className="lg:w-2/12">
        {props.data.title ? (
          <ReactMarkdown className="text-2xl lg:text-4xl font-primary text-[#A48A67]">
            {props.data.title}
          </ReactMarkdown>
        ) : null}
      </div>
      <div className="lg:w-10/12">
        {props.data.description ? (
          <ReactMarkdown
            className="text-base lg:text-xl"
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
      </div>
    </div>
  );
}
