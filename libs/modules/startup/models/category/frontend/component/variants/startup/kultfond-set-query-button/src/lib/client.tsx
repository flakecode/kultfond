"use client";
import "client-only";

import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { IComponentProps } from "./interface";
import { api } from "@sps/startup-models-category-frontend-api-client";
import { useEffect, useState } from "react";

export default function Client(props: IComponentProps) {
  const [isActive, setIsActive] = useState(false);

  const { data, isFetching, isLoading, isUninitialized } =
    api.rtk.useFindOneQuery({
      id: props.data.id,
    });

  useEffect(() => {
    if (props.query && data) {
      const filterKeys: any = Object.keys(props.query.filters?.categories);
      if (filterKeys.length !== 0) {
        for (let i = 0; i < filterKeys.length; i++) {
          if (
            props.query.filters?.categories[filterKeys[i]].$in[0] ===
            `${data[filterKeys[i]]}`
          ) {
            setIsActive(true);
          }
        }
      } else {
        setIsActive(false);
      }
    }
  }, [data, props.query]);

  if (isFetching || isLoading || isUninitialized || !data) {
    return <Skeleton {...props} />;
  }

  return (
    <ErrorBoundary fallback={Error}>
      <Component {...props} data={data} isActive={isActive} />
    </ErrorBoundary>
  );
}
