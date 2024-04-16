import type { IModel as IParentModel } from "./sps-lite";

export interface IModel extends IParentModel {
  id: number;
  title: string;
  href: string;
  date: string | null;
  source: string | null;
}
