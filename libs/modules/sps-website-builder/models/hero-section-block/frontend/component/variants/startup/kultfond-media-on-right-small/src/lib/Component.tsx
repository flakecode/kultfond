import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";
import { Component as File } from "@sps/sps-file-storage-models-file-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="hero-section-block"
      data-variant={props.variant}
      className={`w-full overflow-hidden bg-gradient-to-b from-white to-[#F5F5F5] px-4 lg:px-0 ${props.data.className || "pt-20 lg:pt-40 pb-10 lg:pb-20"}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex flex-shrink-0 w-10/12 lg:w-8/12 flex-col gap-8 relative z-10">
            {props.data.title ? (
              <h1 className="text-2xl lg:text-[60px] leading-tight xl:inline text-[#252525] md:text-[60px] font-primary">
                <ReactMarkdown>{props.data.title}</ReactMarkdown>
              </h1>
            ) : null}
            {props.data?.description ? (
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2 lg:w-4 h-3 lg:h-5"
                  viewBox="0 0 15 20"
                  fill="none"
                >
                  <path
                    d="M7.49999 0C5.51168 0.00263754 3.60556 0.79366 2.19961 2.19961C0.79366 3.60556 0.00263754 5.51168 0 7.49999C0 12.8844 6.98749 19.6281 7.28437 19.9125C7.34211 19.9686 7.41947 20 7.49999 20C7.58052 20 7.65787 19.9686 7.71562 19.9125C8.01249 19.6281 15 12.8844 15 7.49999C14.9973 5.51168 14.2063 3.60556 12.8004 2.19961C11.3944 0.79366 9.4883 0.00263754 7.49999 0ZM7.49999 10.9375C6.82012 10.9375 6.15551 10.7359 5.59022 10.3582C5.02493 9.98045 4.58434 9.44359 4.32416 8.81546C4.06398 8.18734 3.99591 7.49618 4.12855 6.82937C4.26118 6.16256 4.58857 5.55006 5.06931 5.06931C5.55006 4.58857 6.16256 4.26118 6.82937 4.12855C7.49618 3.99591 8.18734 4.06398 8.81546 4.32416C9.44359 4.58434 9.98045 5.02493 10.3582 5.59022C10.7359 6.15551 10.9375 6.82012 10.9375 7.49999C10.9369 8.41151 10.5746 9.28553 9.93007 9.93007C9.28553 10.5746 8.41151 10.9369 7.49999 10.9375Z"
                    fill="#808080"
                  />
                </svg>
                <p className="text-sm lg:text-lg text-[#808080] text-nowrap truncate">
                  {props.data.description}
                </p>
              </div>
            ) : null}
          </div>
          {props.data.additionalMedia?.length ? (
            <div className="w-2/12 lg:w-4/12 flex justify-center">
              <div className="w-full h-px relative flex">
                <div className="absolute inset-0 w-[60vw] lg:w-[140%] opacity-30 lg:opacity-100">
                  <div className="transform -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 relative">
                    <File
                      variant="image"
                      isServer={false}
                      data={props.data.additionalMedia[0]}
                      containerClassName="w-full relative aspect-w-4 aspect-h-4"
                      className="object-contain"
                    />
                    {/* <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-[#F4F4F4]"></div> */}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          {/* {props.data.additionalMedia?.length ? (
          <div className="w-full -mr-[50%] flex object-shrink-0 max-w-[1100px] opacity-60 lg:opacity-100">
            <File
              variant="image"
              isServer={false}
              data={props.data.additionalMedia[0]}
              containerClassName="w-full relative aspect-w-4 aspect-h-4"
              className="object-contain"
            />
          </div>
        ) : null} */}
        </div>
      </div>
    </div>
  );
}
