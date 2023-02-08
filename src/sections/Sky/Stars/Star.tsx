import React from "react";

interface Props {
  id?: number;
  style?: React.CSSProperties;
}
export const Star = ({ id, style }: Props): JSX.Element => {
  return (
    <div
      className={`section-sky__star ${id}`}
      style={{ "--star": id, ...style } as React.CSSProperties}
    />
  );
};
