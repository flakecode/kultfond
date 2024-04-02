import type { IModel as IParentModel } from "@sps/startup-models-project-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/startup-models-project-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "project";
export const route = "projects";
export const populate = modelPopulate;
