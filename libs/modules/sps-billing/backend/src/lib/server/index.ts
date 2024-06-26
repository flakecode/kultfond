import register from "./register";
import bootstrap from "./bootstrap";
import destroy from "./destroy";
import config from "./config";
import contentTypes from "./content-types";
import controllers from "./controllers";
import routes from "./routes";
import middlewares from "./middlewares";
import policies from "./policies";
import services from "./services";
import { tailwindConfig } from "@sps/shared-frontend-utils-server";

console.log(`🚀 ~ tailwindConfig:`, tailwindConfig);

export default {
  register,
  bootstrap,
  destroy,
  config,
  controllers,
  routes,
  services,
  contentTypes,
  policies,
  middlewares,
};
