import { IModel } from "@sps/startup-models-post-contracts";
import { IModel as IModelExtended } from "@sps/startup-models-post-contracts-extended";
import { Dispatch, SetStateAction } from "react";

export const variant = "kultfond-find" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  query?: any;
  set?: Dispatch<SetStateAction<IModelExtended[] | undefined>>;
  children?: ({ data }: { data: IModelExtended[] }) => any;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
