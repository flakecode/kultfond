/**
 * layout controller
 */

import { factories } from "@strapi/strapi";
import { getFilledPages } from "../page";

const { ValidationError, NotFoundError } = require("@strapi/utils").errors;

export default factories.createCoreController(
  "plugin::sps-website-builder.layout",
  ({ strapi }) => ({
    async findByPageUrl(ctx) {
      let queryUrl = ctx.query.url;

      if (typeof queryUrl === "string") {
        queryUrl = queryUrl;
      } else if (Array.isArray(queryUrl)) {
        queryUrl = `/${queryUrl.join("/") || ""}`;
      } else {
        throw new ValidationError("Wrong query 'url' passed");
      }

      const sanitizedQuery = await this.sanitizeQuery(ctx);

      const defaultLocale = await strapi
        .service("plugin::i18n.locales")
        .getDefaultLocale();

      const filledPages = await getFilledPages({
        ...sanitizedQuery,
        filters: { locale: sanitizedQuery.locale || defaultLocale },
      });

      // console.log("🚀 ~ findByPageUrl ~ filledPages:", filledPages);

      if (queryUrl.startsWith(`/${sanitizedQuery.locale}/`)) {
        queryUrl = queryUrl.replace(`/${sanitizedQuery.locale}/`, "/");
      }

      const targetPage = filledPages.find((page) => {
        const cuttedLastSlash =
          // @ts-ignore
          queryUrl !== "/" ? queryUrl.replace(/\/$/, "") : queryUrl;

        if (
          page.urls.find((urlParam) => {
            if (urlParam.url === cuttedLastSlash) {
              return true;
            }
          })
        ) {
          return true;
        }
      });

      if (!targetPage) {
        throw new NotFoundError("Layout not found");
      }

      const populatedPage = await strapi
        .service("plugin::sps-website-builder.page")
        .findOne(targetPage.id, {
          populate: {
            layout: "*",
          },
        });

      const layout = await strapi
        .service("plugin::sps-website-builder.layout")
        .findOne(populatedPage.layout.id, sanitizedQuery);

      const sanitizedResults = await this.sanitizeOutput(layout, ctx);

      return this.transformResponse(sanitizedResults, {});
    },
  }),
);
