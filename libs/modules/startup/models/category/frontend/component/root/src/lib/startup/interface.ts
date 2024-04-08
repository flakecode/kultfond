import { IComponentProps as IKultfondSetQueryButtonComponentProps } from "@sps/startup-models-category-frontend-component-variants-startup-kultfond-set-query-button";
import { IComponentProps as IKultfondGetAllComponentProps } from "@sps/startup-models-category-frontend-component-variants-startup-kultfond-get-all";
import { IComponentProps as IKultfondListComponentProps } from "@sps/startup-models-category-frontend-component-variants-startup-kultfond-list";
import { IComponentProps as IKultfondPillComponentProps } from "@sps/startup-models-category-frontend-component-variants-startup-kultfond-pill";
export type IComponentProps =
  | IKultfondSetQueryButtonComponentProps
  | IKultfondGetAllComponentProps
  | IKultfondListComponentProps
  | IKultfondPillComponentProps
  | never;
