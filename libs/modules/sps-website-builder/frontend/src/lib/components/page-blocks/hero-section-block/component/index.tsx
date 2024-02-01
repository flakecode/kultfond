import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { variants as spsVariants } from "./sps";
import { IComponent } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/hero-section-block/interfaces";
import { IComponent as IComponentExtended } from "@sps/sps-website-builder-contracts-extended/lib/components/page-blocks/hero-section-block/interfaces";
import { IPage } from "@sps/sps-website-builder-contracts-extended/lib/props";
import { api } from "../api";

export interface IComponentProps extends IComponent, IPage {}
export interface IComponentPropsExtended extends IComponentExtended, IPage {}

export const variants = {
  ...spsLiteVariants,
  ...spsVariants,
  ...startupVariants,
};

export function PageBlock(props: IComponentProps) {
  const { data, isFetching, isLoading, isUninitialized } = api.useFindOneQuery({
    id: props.id,
  });

  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  if (isFetching || isLoading || isUninitialized) {
    return <Comp showSkeletons={true} {...props} />;
  }

  return <Comp {...props} {...data} />;
}
