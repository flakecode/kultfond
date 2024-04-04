import { IModel } from "@sps/startup-models-project-contracts";
import { IModel as IModelExtended } from "@sps/startup-models-project-contracts-extended";

export const variant = "kultfond-get-from-url" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  children?: any;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
