import { Component as ProjectsListBlock } from "@sps/sps-website-builder-models-projects-list-block-frontend-component";
import { Component as ProjectOverviewBlock } from "@sps/sps-website-builder-models-project-overview-block-frontend-component";
import { Component as ArticlesListBlock } from "@sps/sps-website-builder-models-articles-list-block-frontend-component";
import { Component as ArticleOverviewBlock } from "@sps/sps-website-builder-models-article-overview-block-frontend-component";
import { Component as PostsListBlock } from "@sps/sps-website-builder-models-posts-list-block-frontend-component";

export const pageBlockComponents = {
  "page-blocks.projects-list-block": ProjectsListBlock,
  "page-blocks.project-overview-block": ProjectOverviewBlock,
  "page-blocks.articles-list-block": ArticlesListBlock,
  "page-blocks.article-overview-block": ArticleOverviewBlock,
  "page-blocks.posts-list-block": PostsListBlock,
};
