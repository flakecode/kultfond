import { IComponentProps as IKultfondManagementComponentProps } from "@sps/sps-website-builder-models-feature-frontend-component-variants-startup-kultfond-management";
import { IComponentProps as IKultfondYearComponentProps } from "@sps/sps-website-builder-models-feature-frontend-component-variants-startup-kultfond-year";
import { IComponentProps as IKultfondContactComponentProps } from "@sps/sps-website-builder-models-feature-frontend-component-variants-startup-kultfond-contact";
export type IComponentProps =
  | IKultfondManagementComponentProps
  | IKultfondYearComponentProps
  | IKultfondContactComponentProps
  | never;
