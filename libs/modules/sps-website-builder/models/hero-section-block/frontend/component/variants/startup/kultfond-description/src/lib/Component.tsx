import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="hero-section-block"
      data-variant={props.variant}
      className={`w-full bg-[#A48A67] px-4 lg:px-2 ${props.data.className || "pt-16 pb-24"}`}
      id={props.data.anchor ? props.data.anchor : undefined}
    >
      <div className="mx-auto max-w-4xl flex flex-col gap-12">
        {props.data.title ? (
          <h2 className="text-4xl tracking-tight sm:text-5xl md:text-6xl text-center text-white font-primary">
            <ReactMarkdown>{props.data.title}</ReactMarkdown>
          </h2>
        ) : null}

        {props.data.description ? (
          <ReactMarkdown
            className="text-lg tracking-tight text-white flex flex-col gap-6"
            components={{
              a: ({ node, ...props }) => {
                if (!props.href) {
                  return <p>{props.children}</p>;
                }

                return (
                  <Link
                    {...props}
                    href={props.href}
                    className="text-white underline underline-offset-2 hover:opacity-70 transition duration-200"
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
