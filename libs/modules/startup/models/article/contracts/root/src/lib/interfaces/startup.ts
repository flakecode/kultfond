import type { IModel as IParentModel } from "./sps-lite";

export interface IModel extends IParentModel {
  id: number;
  title: string;
  description: string | null;
}
