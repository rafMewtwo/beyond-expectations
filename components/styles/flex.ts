import { tv } from "@nextui-org/react";

export const flex = tv({
  base: "box-border flex flex-row",
  variants: {
    direction: {
      column: "flex-col",
      row: "flex-row",
    },
    justify: {
      center: "justify-center",
      start: "justify-start",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
    },
    align: {
      center: "items-center",
      start: "items-start",
      end: "items-end",
      stretch: "items-stretch",
    },
    wrap: {
      wrap: "flex-wrap",
      nowrap: "flex-nowrap",
    },
  },
});