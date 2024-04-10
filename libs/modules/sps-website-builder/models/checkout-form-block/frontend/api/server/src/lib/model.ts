import {
  IModel as IParentModel,
  variants as parentVariants,
} from "@sps/sps-website-builder-models-checkout-form-block-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-checkout-form-block-contracts-extended";

export const variants = [...parentVariants] as const;

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "checkout-form-block";
export const route = "components/page-blocks.checkout-form-block";
export const populate = modelPopulate;
