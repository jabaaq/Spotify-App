import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

export interface NavbarProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  children: ReactNode;
}
