import { IComponentProps as IKultfondOverviewComponentProps } from "@sps/startup-models-article-frontend-component-variants-startup-kultfond-overview";
import { IComponentProps as IKultfondFindByIdComponentProps } from "@sps/startup-models-article-frontend-component-variants-startup-kultfond-find-by-id";
import { IComponentProps as IKultfondFindComponentProps } from "@sps/startup-models-article-frontend-component-variants-startup-kultfond-find";
import { IComponentProps as IKultfondCardComponentProps } from "@sps/startup-models-article-frontend-component-variants-startup-kultfond-card";
export type IComponentProps =
  | IKultfondOverviewComponentProps
  | IKultfondFindByIdComponentProps
  | IKultfondFindComponentProps
  | IKultfondCardComponentProps
  | never;
