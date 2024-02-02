import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/incentives-block/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/components/page-blocks/incentives-block/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/components/page-blocks/incentives-block/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "IncentivesBlock";
export const route = "components/page-blocks.incentives-block";
export const populate = modelPopulate;
