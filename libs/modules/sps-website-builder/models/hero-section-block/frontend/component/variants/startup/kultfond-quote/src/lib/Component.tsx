import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="hero-section-block"
      data-variant={props.variant}
      className={`w-full bg-[#F4F4F4] px-4 lg:px-2 ${props.data.className || "pt-16 pb-24"}`}
      id={props.data.anchor ? props.data.anchor : undefined}
    >
      <div className="mx-auto max-w-4xl flex flex-col gap-5 lg:gap-10 relative">
        {props.data.title ? (
          <>
            <div className="absolute letf-0 -top-6">
              <svg
                className="w-14 h-16"
                viewBox="0 0 66 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.568 15.2C14.168 18 12.968 20.7333 12.968 23.4C12.968 26.2 14.6346 28.7333 17.968 31C22.5013 33.9333 24.7013 37.4667 24.568 41.6C24.568 44.5333 23.568 47 21.568 49C19.568 51 17.0346 52 13.968 52C10.1013 52 6.96797 50.4667 4.56797 47.4C2.16797 44.3333 0.967969 40.3333 0.967969 35.4C0.967969 26.2 4.3013 18.2667 10.968 11.6C15.768 6.79999 21.0346 3.33333 26.768 1.2C27.8346 0.799994 28.568 0.999991 28.968 1.79999L29.568 3C29.968 4.2 29.768 5 28.968 5.39999C23.5013 8.46666 19.368 11.7333 16.568 15.2ZM52.168 15.2C49.768 17.7333 48.568 20.4667 48.568 23.4C48.568 26.3333 50.168 28.8667 53.368 31C57.9013 33.8 60.168 37.3333 60.168 41.6C60.168 44.5333 59.168 47 57.168 49C55.168 51 52.6346 52 49.568 52C45.568 52 42.368 50.4667 39.968 47.4C37.568 44.3333 36.4346 40.3333 36.568 35.4C36.568 26.2 39.9013 18.2667 46.568 11.6C51.368 6.79999 56.6346 3.33333 62.368 1.2C63.3013 0.933325 64.0346 1.13332 64.568 1.79999L64.968 3C65.5013 4.06666 65.368 4.86666 64.568 5.39999C59.1013 8.46666 54.968 11.7333 52.168 15.2Z"
                  fill="#A48A67"
                  fillOpacity="0.3"
                />
              </svg>
            </div>
            <h3 className="ml-9 text-2xl lg:text-4xl tracking-tight font-primary">
              <ReactMarkdown>{props.data.title}</ReactMarkdown>
            </h3>
          </>
        ) : null}
      </div>
    </div>
  );
}
