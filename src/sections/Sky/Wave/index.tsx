import React from "react";

interface Props {
  id?: number;
}
export const Wave = ({ id }: Props): JSX.Element => {
  return (
    <div className={`section-sky__wave-wrapper-${id}`}>
      {/* <img className={`section-sky__wave ${classNames}`} src={wave} /> */}
      <div
        className={`section-sky__wave section-sky__wave-${id}`}
        style={{ "--wave": id } as React.CSSProperties}
      />
    </div>
  );
};
