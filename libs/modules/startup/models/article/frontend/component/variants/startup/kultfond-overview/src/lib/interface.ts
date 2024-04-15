import { IModel } from "@sps/startup-models-article-contracts";
import { IModel as IModelExtended } from "@sps/startup-models-article-contracts-extended";

export const variant = "kultfond-overview" as const;

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
