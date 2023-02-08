import React from "react";
import wave from "@images/wave.png";

interface Props {
  id?: number;
  style?: React.CSSProperties;
}
export const Wave = ({ id, style }: Props): JSX.Element => {
  return (
    <div className={`section-sky__wave-wrapper-${id}`}>
      {/* <img className={`section-sky__wave ${classNames}`} src={wave} /> */}
      <div
        className={`section-sky__wave section-sky__wave-${id}`}
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
