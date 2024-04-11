import React from "react";
import ReactMarkdown from "react-markdown";
import { Component as ButtonArrays } from "@sps/sps-website-builder-models-buttons-array-frontend-component";
import { Component as Logotype } from "@sps/sps-website-builder-models-logotype-frontend-component";
import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="footer-block"
      data-variant={props.variant}
      className="mx-auto max-w-7xl pb-8 pt-8 px-4 lg:pt-16 lg:pb-5 lg:px-2"
    >
      <div className="flex flex-col gap-4 lg:flex-row justify-between">
        <div className="flex flex-col gap-4 w-full lg:w-3/12">
          {props.data.logotype ? (
            <Logotype
              isServer={props.isServer}
              variant="kultfond-wide"
              data={props.data.logotype}
            />
          ) : null}
        </div>
        <div className="w-full h-px bg-[#F4F4F4] opacity-10 flex lg:hidden"></div>
        <div className="flex flex-col lg:grid grid-cols-8 lg:justify-end w-full lg:w-8/12 gap-8 lg:gap-4">
          {props.data.buttonsArrays?.map((buttonsArray, index) => {
            return (
              <div key={index} className="col-span-3 first:col-span-2">
                <ButtonArrays
                  isServer={props.isServer}
                  variant={buttonsArray.variant}
                  data={buttonsArray}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-8 border-t border-white border-opacity-10 pt-5 flex flex-col lg:flex-row w-full">
        {props.data.copyrights ? (
          <ReactMarkdown className="text-sm lg:text-lg text-center text-white text-opacity-30 mx-auto">
            {props.data.copyrights}
          </ReactMarkdown>
        ) : null}
      </div>
    </div>
  );
}
