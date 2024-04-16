import type { IModel as IParentModel } from "@sps/startup-models-post-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/startup-models-post-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "post";
export const route = "posts";
export const populate = modelPopulate;
