import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as File } from "@sps/sps-file-storage-models-file-frontend-component";
import Link from "next/link";
import { Component as Category } from "@sps/startup-models-category-frontend-component";

export function Component(props: IComponentPropsExtended) {
  return (
    <Link
      href={`/projects/${props.data.id}`}
      data-module="startup"
      data-model="project"
      data-variant={props.variant}
      className="w-full pt-5 pb-8 bg-white flex flex-col justify-between cursor-pointer group overflow-hidden"
    >
      <div className="group-hover:scale-125 opacity-90 group-hover:opacity-100 transition duration-500 ease-in-out">
        {props.data.media && props.data.media?.length > 0 ? (
          <File
            isServer={props.isServer}
            data={props.data.media[0]}
            variant="image"
            className="object-contain"
            containerClassName="w-full aspect-w-4 aspect-h-4 relative"
          />
        ) : null}
      </div>
      <div className="flex flex-col gap-5 px-5 h-full justify-between">
        <div className="flex justify-start flex-col gap-5">
          <div className="flex flex-row flex-wrap items-center gap-3">
            {props.data.categories?.map((category, index) => {
              return (
                <Category
                  key={index}
                  isServer={props.isServer}
                  variant="kultfond-pill"
                  data={category}
                />
              );
            })}
          </div>
          <h5 className="font-medium text-[#1D1D1D] group-hover:text-[#A48A67] text-base lg:text-xl leading-tight transition duration-500">
            {props.data.title}
          </h5>
        </div>
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
          <p className="text-xs lg:text-base text-[#808080] text-nowrap truncate">
            {props.data.location}
          </p>
        </div>
      </div>
    </Link>
  );
}
