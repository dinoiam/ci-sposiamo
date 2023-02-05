import React from "react";
// import "style.scss";

type Props = {
  children?: React.ReactNode;
};

export const PopUp = ({ children }: Props) => {
  return (
    <div className="PopUp">
      {/* <div className="PopUp__overlay"></div> */}
      <div className="PopUp__content">{children}</div>
    </div>
  );
};
