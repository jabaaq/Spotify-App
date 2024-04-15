import React from "react";
import cn from "classnames";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.scss";

const Button = ({ appearance, children, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, {
        [styles.login_button]: appearance === "login",
        [styles.start_button]: appearance === "start",
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
