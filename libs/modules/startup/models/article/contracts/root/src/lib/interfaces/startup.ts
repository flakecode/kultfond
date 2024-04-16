import type { IModel as IParentModel } from "./sps-lite";

export interface IModel extends IParentModel {
  id: number;
  title: string;
  date: string | null;
  description: string | null;
}
