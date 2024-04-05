import React from "react";
import cn from "classnames";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.scss";

const Button = ({ appearance, children, ...props }: ButtonProps) => {
  return (
    <button className={cn(styles.login_button)} {...props}>
      {children}
    </button>
  );
};

export default Button;
