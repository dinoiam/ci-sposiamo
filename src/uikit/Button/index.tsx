import React from "react";
import { Loader } from "../Loader";
import styles from "./style.module.scss";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  loading?: boolean;
};

export const Button = ({ children, loading, ...props }: Props): JSX.Element => {
  return (
    <div className={styles.wrapper}>
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
