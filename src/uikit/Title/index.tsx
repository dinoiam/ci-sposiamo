import React from "react";
import styles from "./style.module.scss";

interface Props {
  children: React.ReactNode;
}
export const Title = ({ children }: Props): JSX.Element => {
  return <div className={styles.title}>{children}</div>;
};
