import type { IModel as IParentModel } from "./sps-lite";
import type { IModel as IButton } from "@sps/sps-website-builder-models-button-contracts";

export interface IModel extends IParentModel {
  buttons?: IButton[] | null;
}
