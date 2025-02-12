import { tv } from "@nextui-org/react";

// Primeiro defina os estilos
export const box = tv({
  base: "box-border",
  variants: {
    // suas variantes aqui
  }
});

// Depois crie e exporte o componente React
import { HTMLProps } from "react";

export const Box = (props: HTMLProps<HTMLDivElement>) => {
  return <div className={box()} {...props} />;
};