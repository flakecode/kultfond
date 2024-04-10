import { IModel } from "@sps/startup-models-category-contracts";
import { IModel as IModelExtended } from "@sps/startup-models-category-contracts-extended";

export const variant = "kultfond-set-query-button" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  data: IModel;
  query?: any;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
  isActive: boolean;
}
