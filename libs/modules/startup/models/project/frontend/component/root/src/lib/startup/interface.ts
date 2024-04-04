import { IComponentProps as IKultfondOverviewComponentProps } from "@sps/startup-models-project-frontend-component-variants-startup-kultfond-overview";
import { IComponentProps as IKultfondGetFromUrlComponentProps } from "@sps/startup-models-project-frontend-component-variants-startup-kultfond-get-from-url";
import { IComponentProps as IKultfondGetAllComponentProps } from "@sps/startup-models-project-frontend-component-variants-startup-kultfond-get-all";
import { IComponentProps as IKultfondCardComponentProps } from "@sps/startup-models-project-frontend-component-variants-startup-kultfond-card";
export type IComponentProps =
  | IKultfondOverviewComponentProps
  | IKultfondGetFromUrlComponentProps
  | IKultfondGetAllComponentProps
  | IKultfondCardComponentProps
  | never;
