import { IModel } from "@sps/startup-models-category-contracts";
import { IModel as IModelExtended } from "@sps/startup-models-category-contracts-extended";

export const variant = "kultfond-list" as const;

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
