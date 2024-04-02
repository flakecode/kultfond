import { populate as parentPopulate } from "@sps/sps-crm-models-input-option-contracts";
import { populate as filePopulate } from "@sps/sps-file-storage-models-file-contracts";

export const populate = {
  ...parentPopulate,
  media: {
    populate: filePopulate,
  },
  additional_media: {
    populate: filePopulate,
  },
  extra_media: {
    populate: filePopulate,
  },
};
