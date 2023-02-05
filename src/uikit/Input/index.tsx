import React from "react";
import styles from "./style.module.scss";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ placeholder, id, className, ...props }, ref): JSX.Element => {
    return (
      <label htmlFor={id} className={styles.label}>
        <input
          ref={ref}
          id={id}
          className={`${styles.input} ${className}`}
          {...props}
          placeholder="&nbsp;"
        />
        <div className={styles.placeholder}>{placeholder}</div>
      </label>
    );
  }
);
