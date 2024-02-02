import type { IModel as IParentModel } from "@sps/sps-subscription-contracts/lib/models/edit-subscription-block/interfaces";
import type { IModel as IFile } from "@sps/sps-file-storage-contracts/lib/models/file/interfaces";

export interface IModel extends IParentModel {
  media?: IFile[] | null;
  additionalMedia?: IFile[] | null;
}
