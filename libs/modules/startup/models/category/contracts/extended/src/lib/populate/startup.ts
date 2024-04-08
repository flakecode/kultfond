import { populate as parentPopulate } from "./sps-lite";
import { populate as projectPopulate } from "@sps/startup-models-project-contracts";

export const populate = {
  ...parentPopulate,
  projects: {
    populate: projectPopulate,
  },
};
