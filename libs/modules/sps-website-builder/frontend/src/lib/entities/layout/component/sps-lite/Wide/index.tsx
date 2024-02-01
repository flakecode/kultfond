"use client";

import { ILayout } from "../..";
import { Entity as Navbar } from "../../../../navbar/component";
import { Entity as Sidebar } from "../../../../sidebar/component";
import { Entity as Footer } from "../../../../footer/component";

export default function Wide(props: ILayout) {
  return (
    <div
      data-collection-type="layout"
      data-variant={props.variant}
      className={props.className || ""}
    >
      {props?.navbar ? <Navbar {...props?.navbar} page={props.page} /> : null}
      <div className="layout-container">
        <div
          className={`w-full flex flex-col ${
            props.sidebar
              ? props.sidebar?.side === "left"
                ? "lg:flex-row"
                : "lg:flex-row-reverse"
              : ""
          }`}
        >
          <div
            className={`flex flex-col ${
              props.sidebar?.variant === "one-quarter" ? "lg:w-3/12" : ""
            }`}
          >
            {props.sidebar ? (
              <Sidebar {...props.sidebar} page={props.page} />
            ) : null}
          </div>
          <div
            className={`h-full ${
              props.sidebar
                ? props.sidebar?.variant === "one-quarter"
                  ? "lg:w-9/12"
                  : ""
                : ""
            }`}
          >
            {props.children}
          </div>
        </div>
      </div>
      {props?.footer ? <Footer {...props?.footer} page={props.page} /> : null}
    </div>
  );
}
