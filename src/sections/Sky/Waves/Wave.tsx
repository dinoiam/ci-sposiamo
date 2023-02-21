import React from "react";
import wave from "@images/wave.png";
import styles from "./style.module.scss";

interface Props {
  id?: number;
  style?: React.CSSProperties;
}
export const Wave2 = ({ id, style }: Props): JSX.Element => {
  return (
    <div
      className={styles[`wave-wrapper-${id}`]}
      data-animation-id={`section-sky__wave-wrapper-${id}`}
    >
      <div
        className={styles.wave}
        style={
          {
            "--wave": id,
            backgroundImage: `url(${wave})`,
            ...style,
          } as React.CSSProperties
        }
      />
    </div>
  );
};

export const Wave = ({ id, style }: Props): JSX.Element => {
  return (
    <div
      data-animation-id={`section-sky__wave-${id}`}
      className={`${styles.wave} ${styles[`wave-${id}`]}`}
      style={
        {
          "--wave": id,
          backgroundImage: `url(${wave})`,
          ...style,
        } as React.CSSProperties
      }
    />
  );
};
