import React from "react";
import { IComponentPropsExtended } from "./interface";
import { Component as File } from "@sps/sps-file-storage-models-file-frontend-component";
import Link from "next/link";
import dayjs from "dayjs";

export function Component(props: IComponentPropsExtended) {
  return (
    <Link
      href={`/articles/${props.data.id}`}
      data-module="startup"
      data-model="article"
      data-variant={props.variant}
      className="w-full h-full flex flex-col"
    >
      {props.data.media && props.data.media.length ? (
        <File
          isServer={props.isServer}
          variant="image"
          data={props.data.media[0]}
          containerClassName="w-full aspect-w-16 aspect-h-9 relative overflow-hidden"
          className="object-cover w-full h-full"
        />
      ) : null}
      <div className="p-3 lg:p-5 flex flex-col justify-between gap-3 bg-white h-full">
        <div className="flex flex-col gap-3">
          <p className="text-base text-[#808080] group-hover:text-[#A48A67] transition duration-200">
            {dayjs(props.data.date).format("DD.MM.YYYY")}
          </p>

          <p className="text-lg text-semibold text-[#1F1F1F] leading-tight">
            {props.data.title?.split(" ").length > 7
              ? `${props.data.title?.split(" ")?.slice(0, 7)?.join(" ")}...`
              : props.data.title}
          </p>
          {props.data.description ? (
            <p className="text-[#808080] leading-tight">
              {props.data.description?.split(" ")?.slice(0, 10)?.join(" ")}...
            </p>
          ) : null}
        </div>

        <p className="text-[#808080] leading-tight text-base underline group-hover:text-[#A48A67] transition duration-200">
          Читать
        </p>
      </div>
    </Link>
  );
}
