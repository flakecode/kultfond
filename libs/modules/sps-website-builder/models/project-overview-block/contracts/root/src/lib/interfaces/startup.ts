import type { IModel as IParentModel } from "./sps-lite";

export const variants = ["kultfond-default"] as const;

export interface IModel extends IParentModel {
  id: number;
  __component: "page-blocks.project-overview-block";
  variant: (typeof variants)[number];
  className: string | null;
  anchor: string | null;
}
