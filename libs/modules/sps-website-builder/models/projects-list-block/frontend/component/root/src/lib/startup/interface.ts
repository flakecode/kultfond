import { IComponentProps as IKultfondDefaultComponentProps } from "@sps/sps-website-builder-models-projects-list-block-frontend-component-variants-startup-kultfond-default";
import { IComponentProps as IKultfondWithFiltersComponentProps } from "@sps/sps-website-builder-models-projects-list-block-frontend-component-variants-startup-kultfond-with-filters";
export type IComponentProps =
  | IKultfondDefaultComponentProps
  | IKultfondWithFiltersComponentProps
  | never;
