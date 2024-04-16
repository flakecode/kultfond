import { IComponentProps as IKultfondMessageFromManagementComponentProps } from "@sps/sps-website-builder-models-features-section-block-frontend-component-variants-startup-kultfond-message-from-management";
import { IComponentProps as IKultfondYearsComponentProps } from "@sps/sps-website-builder-models-features-section-block-frontend-component-variants-startup-kultfond-years";
import { IComponentProps as IKultfondContactsComponentProps } from "@sps/sps-website-builder-models-features-section-block-frontend-component-variants-startup-kultfond-contacts";
export type IComponentProps =
  | IKultfondMessageFromManagementComponentProps
  | IKultfondYearsComponentProps
  | IKultfondContactsComponentProps
  | never;
