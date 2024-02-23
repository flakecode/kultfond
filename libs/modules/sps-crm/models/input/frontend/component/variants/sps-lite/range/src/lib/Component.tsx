import { IComponentPropsExtended } from "./interface";
import { FormField } from "@sps/ui-adapter";

export function Component(props: IComponentPropsExtended) {
  return (
    <>
      {/* sps variant has bugs */}
      {/* <FormField
        {...props}
        data-component="elements.input"
        ui="sps"
        label={"sps | " + props.label || undefined}
        type="range"
      /> */}
      <FormField
        {...props.data}
        data-module="sps-crm"
        data-model="elements.input"
        data-variant={props.variant}
        ui="shadcn"
        label={"shadcn | " + props.data.label || undefined}
        type="range"
      />
    </>
  );
}
