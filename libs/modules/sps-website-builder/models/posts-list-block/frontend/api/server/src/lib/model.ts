import type { IModel as IParentModel } from "@sps/sps-website-builder-models-posts-list-block-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-posts-list-block-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "posts-list-block";
export const route = "components/page-blocks.posts-list-block";
export const populate = modelPopulate;
