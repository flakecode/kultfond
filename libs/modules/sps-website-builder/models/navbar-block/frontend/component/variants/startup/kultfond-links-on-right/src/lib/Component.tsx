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
        <div className="flex w-full px-2 lg:px-2 justify-between">
          <div className="flex flex-col gap-4 w-10/12 lg:w-4/12 max-w-[450px]">
            {props.data.logotype ? (
              <Link href={props.data.logotype?.url || "/"}>
                <Logotype
                  isServer={false}
                  data={props.data.logotype}
                  variant="kultfond-wide"
                />
              </Link>
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

      <div className="fixed bg-white rounded-full w-[50px] h-[50px] right-4 top-[3vw] flex flex-shrink-0 items-center lg:hidden z-30 flex items-center justify-center">
        <Disclosure.Button className="items-center justify-center rounded-md hover:text-gray-500 focus:outline-none  focus:ring-inset focus:ring-transparent gap-3 flex flex-col">
          <div
            className={`w-[30px] h-[2px]  transform duration-200 ${
              disclosure.open
                ? "rotate-45 translate-y-2.5 bg-[#1D1D1D]"
                : "bg-[#1D1D1D]"
            }`}
          ></div>
          <div
            className={`w-[30px] h-[2px]  transform duration-200 ${
              disclosure.open
                ? "-rotate-45 -translate-y-1 bg-[#1D1D1D]"
                : "bg-[#1D1D1D]"
            }`}
          ></div>
        </Disclosure.Button>
      </div>

      <Disclosure.Panel className="fixed flex flex-col items-center w-screen h-screen bg-white lg:hidden p-2">
        <div className="w-10/12 h-full flex flex-col items-center justify-center gap-20 font-primary">
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
