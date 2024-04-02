import { IModel } from "@sps/sps-website-builder-models-footer-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-footer-contracts-extended";

export const variant = "kultfond-black" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  data: IModel;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
