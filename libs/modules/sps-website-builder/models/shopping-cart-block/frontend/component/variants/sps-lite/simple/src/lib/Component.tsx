import { IComponentPropsExtended } from "./interface";
import { Component as Cart } from "@sps/sps-ecommerce-models-cart-frontend-component";
import ReactMarkdown from "react-markdown";
import { Button } from "@sps/ui-adapter";
import Link from "next/link";

export function Component(props: IComponentPropsExtended) {
  return (
    <div
      data-module="sps-website-builder"
      data-model="page-blocks.shopping-cart-block"
      data-variant={props.variant}
      className="bg-white mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8"
    >
      <div className="text-center">
        <h2 className="text-lg font-semibold text-primary-600">
          {props.data.subtitle}
        </h2>
        <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          {props.data.title}
        </p>
        {props.data.description ? (
          <ReactMarkdown className="mx-auto my-8 max-w-xl text-xl text-gray-500">
            {props.data.description}
          </ReactMarkdown>
        ) : null}
        <div className="flex flex-col gap-2 justify-center py-4">
          <Cart isServer={false} variant="list" />
        </div>
        <div className="w-full">
          <Button ui="shadcn" variant="default" asChild={true}>
            <Link href="/checkout">Checkout</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
