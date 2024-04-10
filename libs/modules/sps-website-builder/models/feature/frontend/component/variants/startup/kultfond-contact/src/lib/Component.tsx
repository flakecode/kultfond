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
      className="w-full flex flex-col lg:flex-row"
    >
      <div className="lg:w-5/12 text-lg mb-2 lg:mb-0">
        {props.data.title ? (
          <ReactMarkdown className="text-xl">{props.data.title}</ReactMarkdown>
        ) : null}
      </div>
      <div className="lg:w-7/12 text-lg">
        {props.data.description ? (
          <ReactMarkdown
            className="text-xl"
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
