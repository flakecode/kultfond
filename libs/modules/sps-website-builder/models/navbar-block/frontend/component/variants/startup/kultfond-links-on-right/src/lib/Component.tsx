"use client";

import React, { useEffect } from "react";
import { Component as Button } from "@sps/sps-website-builder-models-button-frontend-component";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { usePathname, useSearchParams } from "next/navigation";
import { Component as Logotype } from "@sps/sps-website-builder-models-logotype-frontend-component";
import { IComponentPropsExtended } from "./interface";
import Link from "next/link";

export function Component(props: IComponentPropsExtended) {
  return (
    <Disclosure
      data-module="sps-website-builder"
      data-model="page-blocks.navbar-block"
      data-variant={props.variant}
      as="div"
      className="w-full"
    >
      {(disclosure) => {
        return <DisclosureInner disclosure={disclosure} props={props} />;
      }}
    </Disclosure>
  );
}

function DisclosureInner({
  disclosure,
  props,
}: {
  disclosure: any;
  props: IComponentPropsExtended;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (disclosure?.close) {
      disclosure.close();
    }
  }, [pathname, searchParams, disclosure.close]);

  return (
    <div className="mx-auto flex flex-row w-full">
      <div className="flex w-full justify-between lg:pt-8">
        <div className="flex w-full px-2 py-4 lg:py-0 lg:px-2 justify-between">
          <div className="flex flex-col gap-4 w-10/12 lg:w-4/12 max-w-[450px]">
            {props.data.logotype ? (
              <Logotype
                isServer={false}
                data={props.data.logotype}
                variant="kultfond-square"
              />
            ) : null}
          </div>
          <div className="hidden lg:ml-6 lg:flex lg:space-x-10 items-center">
            {props.data.buttons?.map((button, index) => {
              return (
                <Button
                  isServer={false}
                  key={index}
                  variant={button.variant}
                  data={button}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="fixed right-4 top-4 z-20">
        <Disclosure.Button className="bg-white border border-[#A48A67] w-[50px] h-[50px] flex flex-shrink-0 items-center lg:hidden z-30 flex items-center justify-center items-center justify-center hover:text-gray-500 focus:outline-none  focus:ring-inset focus:ring-transparent gap-3 flex flex-col">
          <div
            className={`w-[30px] h-[2px] transform duration-200 ${
              disclosure.open
                ? "rotate-45 translate-y-2.5 -mt-1.5 bg-black"
                : "bg-black mt-0"
            }`}
          ></div>
          <div
            className={`w-[30px] h-[2px]  transform duration-200 ${
              disclosure.open
                ? "-rotate-45 -translate-y-1 bg-black"
                : "bg-black"
            }`}
          ></div>
        </Disclosure.Button>
      </div>

      <Disclosure.Panel className="fixed flex flex-col w-screen h-screen lg:hidden p-2 py-4 bg-[#F4F4F4]">
        <div className="flex flex-col gap-4 w-10/12 lg:w-4/12 max-w-[450px]">
          {props.data.logotype ? (
            <Logotype
              isServer={false}
              data={props.data.logotype}
              variant="kultfond-square"
            />
          ) : null}
        </div>
        <div className="w-full h-full flex flex-col gap-14 justify-center font-primary">
          {props.data.buttons?.map((button, index) => {
            return (
              <Button
                isServer={false}
                key={index}
                variant={button.variant}
                data={button}
              />
            );
          })}
          {props.data.additionalButtons?.map((button, index) => {
            return (
              <Button
                isServer={false}
                key={index}
                variant={button.variant}
                data={button}
              />
            );
          })}
        </div>
      </Disclosure.Panel>
    </div>
  );
}
