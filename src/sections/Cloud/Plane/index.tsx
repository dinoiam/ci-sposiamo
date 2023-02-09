import React from "react";
import { ReactComponent as PlaneSvg } from "@svg/plane.svg";
import styles from "./style.module.scss";

export const Plane = (): JSX.Element => {
  return (
    <div className={styles.plane}>
      <PlaneSvg />
    </div>
  );
};
