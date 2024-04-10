import { IComponentProps as IKultfondGetByIdComponentProps } from "@sps/startup-models-project-frontend-component-variants-startup-kultfond-get-by-id";
import { IComponentProps as IKultfondOverviewComponentProps } from "@sps/startup-models-project-frontend-component-variants-startup-kultfond-overview";

import { IComponentProps as IKultfondGetAllComponentProps } from "@sps/startup-models-project-frontend-component-variants-startup-kultfond-get-all";
import { IComponentProps as IKultfondCardComponentProps } from "@sps/startup-models-project-frontend-component-variants-startup-kultfond-card";
export type IComponentProps =
  | IKultfondGetByIdComponentProps
  | IKultfondOverviewComponentProps
  | IKultfondGetAllComponentProps
  | IKultfondCardComponentProps
  | never;
