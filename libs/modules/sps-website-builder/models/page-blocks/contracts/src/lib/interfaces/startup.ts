import type {
  IModel as IParentModel,
  IPageBlock as IParentPageBlock,
} from "./sps-lite";
import { IModel as IProjectsListBlock } from "@sps/sps-website-builder-models-products-list-block-contracts";
import { IModel as IProjectOverviewBlock } from "@sps/sps-website-builder-models-project-overview-block-contracts";
import { IModel as IArticlesListBlock } from "@sps/sps-website-builder-models-articles-list-block-contracts";
import { IModel as IArticleOverviewBlock } from "@sps/sps-website-builder-models-article-overview-block-contracts";

export type IPageBlock =
  | IParentPageBlock
  | IProjectsListBlock
  | IProjectOverviewBlock
  | IArticlesListBlock
  | IArticleOverviewBlock;

export interface IModel extends Omit<IParentModel, "data"> {
  data: {
    pageBlocks?: IPageBlock[] | null;
  };
}
