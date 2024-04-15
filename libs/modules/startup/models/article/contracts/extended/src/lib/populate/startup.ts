import { populate as parentPopulate } from "./sps-lite";
import { populate as filePopulate } from "@sps/sps-file-storage-models-file-contracts";
import { populate as heroSectionBlockPopulate } from "@sps/sps-website-builder-models-hero-section-block-contracts";
import { populate as sliderBlockPopulate } from "@sps/sps-website-builder-models-slider-block-contracts";
import { populate as featuresSectionBlockPopulate } from "@sps/sps-website-builder-models-features-section-block-contracts";

export const populate = {
  ...parentPopulate,
  media: {
    populate: filePopulate,
  },
  page_blocks: {
    populate: {
      ...heroSectionBlockPopulate,
      ...sliderBlockPopulate,
      ...featuresSectionBlockPopulate,
    },
  },
};
