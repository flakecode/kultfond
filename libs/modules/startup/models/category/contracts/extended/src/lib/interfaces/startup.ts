import type { IModel as IParentModel } from "./sps-lite";
import { IModel as IProject } from "@sps/startup-models-project-contracts";

export interface IModel extends IParentModel {
  projects?: IProject[] | null;
}
