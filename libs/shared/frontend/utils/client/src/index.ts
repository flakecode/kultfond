import { api as rtkApi } from "./lib/rtk-api";
import { api as fetchApi } from "./lib/fetch-api";
export const rtk = { api: rtkApi };
export const fetch = { api: fetchApi };
export * from "./lib/cn";
export * from "./lib/envs";
export * from "./lib/download-backend-upload-file";
export * from "./lib/api";
export * from "./lib/formatters/parse-mime-type";
export * from "./lib/formatters/replacer";
