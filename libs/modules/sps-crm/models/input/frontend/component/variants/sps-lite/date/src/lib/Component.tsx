import { FormField } from "@sps/ui-adapter";
import { IComponentPropsExtended } from "./interface";

export function Component(props: IComponentPropsExtended) {
  return (
    <>
      <FormField
        {...props.data}
        data-module="sps-crm"
        data-model="elements.input"
        data-variant={props.variant}
        ui="sps"
        label={"sps | " + props.data.label || undefined}
        type="date"
      />
      <FormField
        {...props.data}
        data-module="sps-crm"
        data-model="elements.input"
        data-variant={props.variant}
        ui="shadcn"
        label={"shadcn | " + props.data.label || undefined}
        type="date"
      />
    </>
  );
}
