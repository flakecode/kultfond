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
      className="mx-auto max-w-7xl py-12 px-4 lg:pt-16 lg:pb-5 lg:px-0"
    >
      <div className="flex flex-col gap-4 lg:flex-row justify-between">
        <div className="flex flex-col gap-4 w-full lg:w-4/12">
          {props.data.logotype ? (
            <Logotype
              isServer={props.isServer}
              variant="kultfond-wide"
              data={props.data.logotype}
            />
          ) : null}
        </div>
        <div className="grid grid-cols-7 lg:justify-end w-full lg:w-7/12 gap-4">
          {props.data.buttonsArrays?.map((buttonsArray, index) => {
            return (
              <div key={index} className="col-span-2 last:col-span-3">
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
          <ReactMarkdown className="text-lg text-center text-white text-opacity-30 mx-auto">
            {props.data.copyrights}
          </ReactMarkdown>
        ) : null}
      </div>
    </div>
  );
}
