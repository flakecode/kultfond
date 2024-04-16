import React from "react";
import { IComponentPropsExtended } from "./interface";
import ReactMarkdown from "react-markdown";
import { Component as Post } from "@sps/startup-models-post-frontend-component";
import Link from "next/link";
import dayjs from "dayjs";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="posts-list-block"
      data-variant={props.variant}
      className={`w-full bg-[#F4F4F4] px-4 lg:px-2 ${props.data.className || "pt-16 pb-24"}`}
    >
      <div className="mx-auto max-w-7xl flex flex-col gap-5 lg:gap-10">
        <div className="flex flex-col gap-5">
          {props.data.subtitle ? (
            <h5 className="text-sm lg:text-base tracking-tight text-[#808080]">
              <ReactMarkdown>{props.data.subtitle}</ReactMarkdown>
            </h5>
          ) : null}

          {props.data.title ? (
            <h3 className="text-4xl tracking-tight xl:inline text-[#252525] sm:text-5xl md:text-6xl font-primary">
              <ReactMarkdown>{props.data.title}</ReactMarkdown>
            </h3>
          ) : null}
        </div>
        <div>
          <Post isServer={props.isServer} variant="kultfond-find">
            {({ data: posts }) => {
              return (
                <div className="flex flex-col lg:grid grid-cols-3 gap-6">
                  {posts.map((post, index) => {
                    return (
                      <Link
                        key={index}
                        href={post.href}
                        target="_blank"
                        className="group"
                      >
                        <div className="p-3 lg:p-5 flex flex-col gap-5 bg-white h-full justify-between">
                          <div className="flex flex-col gap-5">
                            <div className="flex justify-between">
                              <p className="text-base text-[#808080] group-hover:text-[#A48A67] transition duration-200">
                                {post.source}
                              </p>
                              <p className="text-base text-[#808080] group-hover:text-[#A48A67] transition duration-200">
                                {dayjs(post.date).format("DD.MM.YYYY")}
                              </p>
                            </div>
                            <p className="text-lg text-semibold text-[#1F1F1F] leading-tight">
                              {post.title?.split(" ").length > 20
                                ? `${post.title
                                    ?.split(" ")
                                    ?.slice(0, 20)
                                    ?.join(" ")}...`
                                : post.title}
                            </p>
                          </div>
                          <p className="text-[#808080] leading-tight text-base underline group-hover:text-[#A48A67] transition duration-200">
                            Читать в источнике
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              );
            }}
          </Post>
        </div>
      </div>
    </div>
  );
}
