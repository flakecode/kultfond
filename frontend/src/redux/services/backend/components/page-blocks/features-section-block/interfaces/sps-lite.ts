import { IBackendExtensionUploadApiEntity as IBackendExtensionUploadApiFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";
import { IBackendComponentElement as IBackendComponentFeature } from "../../../elements/feature/interfaces";

export interface IBackendComponentPageBlock {
  id: number;
  __component: "page-blocks.features-section-block";
  variant: "with-icon";
  features?: IBackendComponentFeature[] | null;
  title: string | null;
  subtitle: string | null;
  description: string | null;
  anchor: string | null;
  className: string | null;
  media?: IBackendExtensionUploadApiFile[] | null;
  additionalMedia?: IBackendExtensionUploadApiFile[] | null;
}
