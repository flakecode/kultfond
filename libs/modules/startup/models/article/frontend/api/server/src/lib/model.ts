import type { IModel as IParentModel } from "@sps/startup-models-article-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/startup-models-article-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "article";
export const route = "articles";
export const populate = modelPopulate;
