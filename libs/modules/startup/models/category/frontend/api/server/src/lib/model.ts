import type { IModel as IParentModel } from "@sps/startup-models-category-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/startup-models-category-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "category";
export const route = "categories";
export const populate = modelPopulate;
