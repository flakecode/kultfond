import { populate as parentPopulate } from "./sps-lite";
import { populate as heroSectionBlockPopulate } from "@sps/sps-website-builder-models-hero-section-block-contracts";
import { populate as sliderBlockPopulate } from "@sps/sps-website-builder-models-slider-block-contracts";
import { populate as filePopulate } from "@sps/sps-file-storage-models-file-contracts";
import { populate as categoryPopulate } from "@sps/startup-models-category-contracts";
import { populate as featuresSectionBlockPopulate } from "@sps/sps-website-builder-models-features-section-block-contracts";

const pageBlockPopulate = {
  ...heroSectionBlockPopulate,
  ...sliderBlockPopulate,
  ...featuresSectionBlockPopulate,
};

export const populate = {
  ...parentPopulate,
  page_blocks: { populate: pageBlockPopulate },
  media: { populate: filePopulate },
  categories: { populate: categoryPopulate },
};
