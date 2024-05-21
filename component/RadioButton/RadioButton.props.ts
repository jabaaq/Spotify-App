import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

export interface RadioButtonsProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  children?: ReactNode;
}
