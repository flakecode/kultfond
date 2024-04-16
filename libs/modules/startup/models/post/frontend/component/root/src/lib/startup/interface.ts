import { IComponentProps as IKultfondCardComponentProps } from "@sps/startup-models-post-frontend-component-variants-startup-kultfond-card";
import { IComponentProps as IKultfondFindComponentProps } from "@sps/startup-models-post-frontend-component-variants-startup-kultfond-find";
export type IComponentProps =
  | IKultfondCardComponentProps
  | IKultfondFindComponentProps
  | never;
