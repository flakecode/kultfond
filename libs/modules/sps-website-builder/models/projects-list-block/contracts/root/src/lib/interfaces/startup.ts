import type { IModel as IParentModel } from "./sps-lite";

export const variants = ["kultfond-with-filters", "kultfond-default"] as const;

export interface IModel extends IParentModel {
  id: number;
  __component: "page-blocks.projects-list-block";
  variant: (typeof variants)[number];
  title: string | null;
  subtitle: string | null;
  description: string | null;
  className: string | null;
  showAll: boolean | null;
  anchor: string | null;
}
