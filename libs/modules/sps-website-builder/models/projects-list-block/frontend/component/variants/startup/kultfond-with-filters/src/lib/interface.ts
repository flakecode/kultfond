import { IModel } from "@sps/sps-website-builder-models-projects-list-block-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-projects-list-block-contracts-extended";

export const variant = "kultfond-with-filters" as const;

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
