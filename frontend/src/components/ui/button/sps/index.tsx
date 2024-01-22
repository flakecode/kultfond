import Image from "next/image";
import { MouseEventHandler, forwardRef } from "react";
import { IEntity as IBackendFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";
import getFileUrl from "~utils/api/get-file-url";

export interface Props {
  variant: "locale" | "primary" | "secondary" | "outline" | "link";
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  children?: React.ReactNode;
  media?: IBackendFile[];
  title?: string;
}

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return (
    <div
      data-ui="button"
      data-ui-variant={props.variant}
      className={`button ${props?.className || ""}`}
    >
      <button
        // {...additionalAttributes}
        className="button-text"
        onClick={props.onClick}
      >
        {props.children ? props.children : null}
        {props.media?.length ? (
          <div className="icon-container">
            <Image src={getFileUrl(props.media[0])} alt="" fill={true} />
          </div>
        ) : null}
        {props.title}
      </button>
    </div>
  );
});

export default Button;
