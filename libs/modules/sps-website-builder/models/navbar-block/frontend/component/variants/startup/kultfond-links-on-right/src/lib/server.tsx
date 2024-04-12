"use server";
import "server-only";

import { ErrorBoundary } from "@sps/ui-adapter";
import { IComponentProps, IComponentPropsExtended } from "./interface";
import { Error } from "./Error";
import { api } from "@sps/sps-website-builder-models-navbar-block-frontend-api-server";
import { Component } from "./Component";
import { Component as Logotype } from "@sps/sps-website-builder-models-logotype-frontend-component";
import { Component as Button } from "@sps/sps-website-builder-models-button-frontend-component";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  const data = await api.fetch.findOne({
    id: props.data.id,
  });

  if (!data) {
    return <></>;
  }

  return (
    <ErrorBoundary fallback={Error}>
      <Component {...props} data={data}>
        <ServerInner {...props} data={data} />
      </Component>
    </ErrorBoundary>
  );
}

function ServerInner(props: IComponentPropsExtended) {
  return (
    <div className="flex w-full px-2 py-4 lg:py-0 lg:px-2 justify-between">
      <div className="flex flex-col gap-4 w-10/12 lg:w-4/12 max-w-[450px]">
        {props.data.logotype ? (
          <Logotype
            isServer={props.isServer}
            data={props.data.logotype}
            variant="kultfond-square"
          />
        ) : null}
      </div>
      <div className="hidden lg:ml-6 lg:flex lg:space-x-10 items-center">
        {props.data.buttons?.map((button, index) => {
          return (
            <Button
              isServer={props.isServer}
              key={index}
              variant={button.variant}
              data={button}
            />
          );
        })}
      </div>
    </div>
  );
}
