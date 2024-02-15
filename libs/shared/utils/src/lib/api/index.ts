import { stringify } from "qs";
import { gzip } from "pako";
import { transformResponseItem } from "../transform-response-item";
import { BACKEND_URL } from "../envs";

interface IFetchProps {
  url: string;
  params?: any;
  data?: any;
  method?: "GET" | "POST" | "PUT" | "DELETE";
}

interface IHeaders {
  [key: string]: string;
}

export async function getBackendData(props: IFetchProps) {
  const { url, params, data, method = "GET" } = props;

  const query = stringify(params || {}, {
    encodeValuesOnly: true,
  });

  const compressedQuery = gzip(query);
  const base64CompressedQuery = Buffer.from(compressedQuery).toString("base64");

  const headers: IHeaders = {
    "Query-Encoding": "application/gzip",
  };

  if (process.env["NEXT_PUBLIC_BACKEND_TOKEN"]) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env["NEXT_PUBLIC_BACKEND_TOKEN"]}`;
  }

  const backendData = await fetch(`${url}?${base64CompressedQuery}`, {
    method,
    body: data,
    // next: { revalidate: 10 },
    cache: "no-cache",
    headers,
  })
    .then(async (res) => {
      const jsonRes = await res.json();

      if (Array.isArray(jsonRes.data)) {
        const result: any = jsonRes.data.map((item: any) =>
          transformResponseItem(item),
        );
        result["_meta"] = jsonRes?.meta as any;

        return result;
      } else {
        return {
          ...transformResponseItem(jsonRes.data),
          _meta: jsonRes.meta,
        };
      }
    })
    .catch((error) => {
      error; //?
      console.error(`\n ${method} ${url}?${query} | ${error.message}`);
    });

  return backendData;
}

export async function getTargetPage({ url, locale }: any) {
  const localUrl =
    typeof url === "string" ? `/${url}` : `/${url?.join("/") || ""}`;

  if (!localUrl) {
    return;
  }

  const targetPage = await getBackendData({
    url: `${BACKEND_URL}/api/sps-website-builder/pages/get-by-url`,
    params: {
      url: localUrl,
      locale,
      pagination: { limit: -1 },
    },
  });

  if (!targetPage?.id) {
    return;
  }

  return targetPage;
}

export function getFiltersFromPageUrl({
  page,
  params,
}: {
  page: {
    id: number;
    url: string;
  };
  params: { url: string[] | string };
}): any[] {
  const splittedParams = Array.isArray(params.url)
    ? params.url
    : params.url.split("/").filter((u: string) => u !== "");

  if (!page.id) {
    return [];
  }

  const filters: any[] = [];

  const pageUrls = page.url?.split("/").filter((u: string) => u !== "");

  for (const [index, pageUrl] of pageUrls.entries()) {
    if (pageUrl.includes(".") && splittedParams && splittedParams[index]) {
      const sanitizedPageUrl = pageUrl.replace("[", "").replace("]", "");
      const key =
        sanitizedPageUrl.split(".")[sanitizedPageUrl.split(".").length - 2];

      const filter = {
        [key]: {
          id: {
            $in: [splittedParams[index]],
          },
        },
      };

      filters.push(filter);
    }
  }

  return filters;
}
