import { IComponentProps as IKultfondWideComponentProps } from "@sps/sps-website-builder-models-logotype-frontend-component-variants-startup-kultfond-wide";
import { IComponentProps as IKultfondSquareComponentProps } from "@sps/sps-website-builder-models-logotype-frontend-component-variants-startup-kultfond-square";
export type IComponentProps =
  | IKultfondWideComponentProps
  | IKultfondSquareComponentProps
  | never;
