import { IBackendComponentElement as IBackendComponentFaq } from "../../../elements/faq/interfaces";

export interface IBackendComponentPageBlock {
  id: number;
  __component: "page-blocks.faqs-block";
  variant: "two-columns-with-centered-introduction";
  title: string | null;
  subtitle: string | null;
  className: string | null;
  description: string | null;
  faqs?: IBackendComponentFaq[] | null;
  anchor: string | null;
}
