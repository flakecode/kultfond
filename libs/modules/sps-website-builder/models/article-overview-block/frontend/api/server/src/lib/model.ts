import type { IModel as IParentModel } from "@sps/sps-website-builder-models-article-overview-block-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-article-overview-block-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "article-overview-block";
export const route = "components/page-blocks.article-overview-block";
export const populate = modelPopulate;
