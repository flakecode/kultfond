import { IPageBlock } from "types";
import { IButtons } from "~components/buttons";
import { IButtonsArray } from "~components/buttons/buttons-arrays";
import { IButton } from "~components/buttons/simple-buttons";
import { IBackendFeature, IBackendInput, IBackendSlide } from "./components";

export interface IBackendTier {
  id: number;
  title: string | null;
  description: string | null;
  features?: IBackendFeature[];
  price: string | null;
  oldPrice: string | null;
  period: number | null;
  currency?: IBackendCurrency | null;
  type: `one-time` | `regularly`;
  buttons?: IButton[] | null;
}

export interface IBackendModal {
  id: number;
  title: string;
  variant: keyof typeof variants;
  dialogPanelClassName?: string;
  pageBlocks: IPageBlock[];
  uid: string;
}

export interface IBackendForm {
  id: number;
  title: string | null;
  inputs: IBackendInput[];
  subtitle: string | null;
  description: string | null;
  button?: IButton;
}

export interface IBackendReview {
  id: number;
  name: string | null;
  title: string | null;
  subtitle: string | null;
  rating: number | null;
  description: string | null;
  cover: IMedia | null;
  createdAt: string;
}

export interface IBackendSlider {
  slides: IBackendSlide[];
  className?: string;
  aspectRatioClassName?: string;
  variant: `fade-with-previews`;
  showFullScreen?: boolean;
  showBackdrop?: boolean;
  showPreviews?: boolean;
}

export interface IBackendFooter {
  id: number;
  logo: IMedia;
  socialNetworksButtons?: IButtonsArray[];
  buttonsArrays?: IButtonsArray[];
  policiesButtons?: IButtonsArray[];
  copyrights?: string;
  variant:
    | `four-columns-simple`
    | `four-columns-simple-dark`
    | `four-columns-with-company-mission`;
  privacyPolicy?: string[];
  description?: string;
  form?: IBackendForm;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  locale: string;
  _meta?: any;
}

export interface IBackendNavbar {
  logo: IMedia;
  buttons?: IButtons[];
  profileButtons?: IButtons[];
  additionalButtons?: IButtons[];
  ctaButtons?: IButtons[];
  className?: string | null;
  variant: `simple-links-on-left`;
}

export interface IBackendTopbar {
  title?: string | null;
  variant: `simple`;
  buttons?: IButton[];
}

export interface IBackendCurrency {
  id: number;
  title?: string | null;
  unicode: string;
  isDefault: boolean;
}

export interface IMedia {
  id: number;
  url: string;
  mime: string;
  alternativeText: string | null;
  name: string;
  caption: string | null;
  width: number;
  height: number;
  formats?: any;
  hash: string;
  ext: `.svg` | `.jpg`;
  mime: string;
  size: number;
  previewUrl: string | null;
  provider: `local` | `aws-s3`;
  providerMetadata?: any;
  createdAt?: string;
  updatedAt?: string;
}
