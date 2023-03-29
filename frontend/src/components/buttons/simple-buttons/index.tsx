import { FC } from "react";
import { IMedia } from "types/models";
import ClientOnly from "~components/wrappers/client-only";
import BottomLine from "./BottomLine";
import Default from "./Default";
import Primary from "./Primary";

export interface IButton {
  title: string;
  variant: keyof typeof variants;
  url?: string;
  onClick?: any;
  description?: string;
  icon?: IMedia;
  className?: string;
  additionalAttributes?: any;
}

const variants = {
  "bottom-line": BottomLine,
  primary: Primary,
  default: Default,
};

export default function SimpleButtons(props: IButton) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<IButton>;

  if (!Comp) {
    return <></>;
  }

  return (
    <ClientOnly>
      <Comp {...props} />
    </ClientOnly>
  );
}
