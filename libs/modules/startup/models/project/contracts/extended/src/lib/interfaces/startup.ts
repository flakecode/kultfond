import type { IModel as IParentModel } from "./sps-lite";
import type { IModel as IHeroSectionBlock } from "@sps/sps-website-builder-models-hero-section-block-contracts";
import { IModel as IFile } from "@sps/sps-file-storage-models-file-contracts";
import { IModel as ICategory } from "@sps/startup-models-category-contracts";

type IPageBlock = IHeroSectionBlock;

export interface IModel extends IParentModel {
  pageBlocks?: IPageBlock[] | null;
  media?: IFile[] | null;
  categories?: ICategory[] | null;
}
