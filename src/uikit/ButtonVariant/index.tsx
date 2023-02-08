import React from "react";
import { Loader } from "../Loader";
import styles from "./style.module.scss";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  loading?: boolean;
};

export const ButtonVariant = ({
  children,
  loading,
  className,
  ...props
}: Props): JSX.Element => {
  return (
    <div className={className}>
      <button
        className={`${styles.button} ${loading ? styles.loading : ""}`}
        {...props}
      >
        {children}
      </button>
      {loading && <Loader />}
    </div>
  );
};
