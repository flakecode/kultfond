"use client";
import "client-only";

import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { IComponentProps } from "./interface";
import { api } from "@sps/sps-subscription-models-tier-frontend-api-client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Client(props: IComponentProps) {
  const params = useParams();
  const [id, setId] = useState<number | undefined>();

  const { data, isFetching, isLoading, isUninitialized } =
    api.rtk.useFindOneQuery(
      {
        id,
      },
      { skip: !id },
    );

  useEffect(() => {
    if (params) {
      // pageApi.fetch
      //   .getUrlModelId({
      //     url: params.url,
      //     locale: params.locale,
      //     modelName: "tier",
      //   })
      //   .then((res) => {
      //     setId(res);
      //   });
    }
  }, [params]);

  if (!data) {
    return <></>;
  }

  if (props.children) {
    return props.children({ data });
  }

  return <></>;
}
