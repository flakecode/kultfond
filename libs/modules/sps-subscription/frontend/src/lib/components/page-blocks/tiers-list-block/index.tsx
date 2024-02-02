import { IPage } from "@sps/sps-subscription-contracts/lib/props";
import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { IModel as IBackendPageBlock } from "@sps/sps-subscription-contracts/lib/components/page-blocks/tiers-list-block/interfaces";

export interface IPageBlock extends IBackendPageBlock, IPage {}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export default function TiersListBlock(props: IPageBlock) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
