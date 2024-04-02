import { populate as parentPopulate } from "./sps-lite";
import { populate as heroSectionBlockPopulate } from "@sps/sps-website-builder-models-hero-section-block-contracts";
import { populate as filePopulate } from "@sps/sps-file-storage-models-file-contracts";

const pageBlockPopulate = {
  ...heroSectionBlockPopulate,
};

export const populate = {
  ...parentPopulate,
  pageBlocks: { populate: pageBlockPopulate },
  media: { populate: filePopulate },
};
