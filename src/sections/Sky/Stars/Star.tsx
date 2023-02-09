import React from "react";
import styles from "./style.module.scss";

interface Props {
  style?: React.CSSProperties;
}
export const Star = ({ style }: Props): JSX.Element => {
  return (
    <div
      data-animation-id="section-sky__star"
      className={styles.star}
      style={style}
    />
  );
};
