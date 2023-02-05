import React from "react";
import styles from "./style.module.scss";

interface Props {
  label: string;
  type: "error";
}

export const InfoBox = ({ label, type }: Props): JSX.Element => {
  return <div className={`${styles.message} ${styles[type]} `}>{label}</div>;
};
