"use server";
import "server-only";

import { ErrorBoundary } from "@sps/ui-adapter";
import { IComponentProps } from "./interface";
import { Error } from "./Error";
import { api } from "@sps/startup-models-category-frontend-api-server";
import { Component } from "./Component";

// default is required for dynamic import
export default async function Server(props: IComponentProps) {
  let isActive = false;
  const data = await api.fetch.findOne({
    id: props.data.id,
  });

  if (props.query && data && props.query.filters?.categories) {
    const filterKeys: any = Object.keys(props.query.filters?.categories);
    if (filterKeys.length !== 0) {
      for (let i = 0; i < filterKeys.length; i++) {
        if (
          props.query.filters?.categories[filterKeys[i]].$in[0] ===
          `${data[filterKeys[i]]}`
        ) {
          isActive = true;
        }
      }
    }
  }

  if (!data) {
    return <></>;
  }

  return (
    <ErrorBoundary fallback={Error}>
      <Component {...props} data={data} isActive={isActive} />
    </ErrorBoundary>
  );
}
