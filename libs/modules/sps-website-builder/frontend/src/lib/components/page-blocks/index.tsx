import { FC } from "react";
import { ErrorBoundary } from "@sps/ui-adapter";
import { IPage } from "../../redux/components/page-blocks/props";
import { pageBlockComponents } from "./aliases";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { PageBlocks as SpsCrmPageBlocks } from "@sps/sps-crm-frontend";

export function PageBlocks(props: IPage) {
  return (
    <div className="page-blocks">
      {props.pageBlocks?.length
        ? props.pageBlocks.map((pageBlock, index) => {
            const key = pageBlock.__component;
            const PageBlock = pageBlockComponents[
              key as keyof typeof pageBlockComponents
            ] as FC<any>;

            if (!PageBlock) {
              if (
                [
                  "page-blocks.reviews-list-block",
                  "page-blocks.contact-section-block",
                ].includes(key)
              ) {
                return (
                  <SpsCrmPageBlocks
                    key={`${index}-${key}`}
                    pageProps={props.pageProps}
                    page={props.page}
                    pageBlocks={[pageBlock]}
                  />
                );
              }

              return <div key={`${index}-${key}`}></div>;
            }

            return (
              <ErrorBoundary key={`${index}-${key}`}>
                <div
                  data-component={pageBlock.__component}
                  data-variant={pageBlock.variant}
                  className={`${pageBlock.className || ""}`}
                  {...(pageBlock?.anchor ? { id: pageBlock.anchor } : {})}
                >
                  <PageBlock
                    page={props.page}
                    pageProps={props.pageProps}
                    showSkeletons={props.showSkeletons}
                    {...pageBlock}
                  />
                </div>
              </ErrorBoundary>
            );
          })
        : null}
    </div>
  );
}
