import { IModel } from "@sps/startup-models-category-contracts";
import { IModel as IModelExtended } from "@sps/startup-models-category-contracts-extended";
import { Dispatch, SetStateAction } from "react";

export const variant = "kultfond-get-all" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  set?: Dispatch<SetStateAction<IModelExtended[] | undefined>>;
  children?: ({ data }: { data: IModelExtended[] }) => any;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
