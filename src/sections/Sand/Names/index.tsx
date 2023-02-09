import React from "react";
import { ReactComponent as Michele } from "@svg/michele.svg";
import { ReactComponent as Gabriella } from "@svg/gabriella.svg";
import { ReactComponent as E } from "@svg/e.svg";
import styles from "./style.module.scss";

export const Names = (): JSX.Element => {
  return (
    <div className={styles.names}>
      <Michele className={styles.michele} />
      <E className={styles.ampersand} />
      <Gabriella className={styles.gabriella} />
    </div>
  );
};
