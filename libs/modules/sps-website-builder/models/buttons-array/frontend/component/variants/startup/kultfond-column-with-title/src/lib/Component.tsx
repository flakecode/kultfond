import React from "react";
import { Component as Button } from "@sps/sps-website-builder-models-button-frontend-component";
import Image from "next/image";
import { getFileUrl } from "@sps/shared-frontend-utils-client";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="elements.buttons-array"
      data-variant={props.variant}
      className={props.data?.className || ""}
    >
      <div className="buttons-array-column-with-title">
        {props.data.title ? (
          <div className="buttons-array-title">
            {props.data.media?.length ? (
              <div className="icon-container">
                <Image
                  src={getFileUrl(props.data.media[0])}
                  alt=""
                  fill={true}
                />
              </div>
            ) : null}
            {props.data.title}
          </div>
        ) : null}
        {props.data.description ? (
          <ReactMarkdown
            className="buttons-array-description"
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

        <div className="buttons-array-buttons-container">
          {props.data.buttons?.map((button, index) => {
            return (
              <Button
                isServer={props.isServer}
                key={index}
                variant={button.variant}
                data={button}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
