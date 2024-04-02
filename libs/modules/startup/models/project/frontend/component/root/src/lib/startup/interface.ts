import { IComponentProps as IKultfondGetAllComponentProps } from "@sps/startup-models-project-frontend-component-variants-startup-kultfond-get-all";
import { IComponentProps as IKultfondCardComponentProps } from "@sps/startup-models-project-frontend-component-variants-startup-kultfond-card";
export type IComponentProps =
  | IKultfondGetAllComponentProps
  | IKultfondCardComponentProps
  | never;
