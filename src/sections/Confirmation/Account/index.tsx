import React from "react";
import face from "@images/face.png";
import { Loader } from "@/uikit/Loader";
import styles from "./style.module.scss";

interface Props {
  onClick: () => void;
  loading: boolean;
}
export const Account = ({ onClick, loading }: Props): JSX.Element => {
  return (
    <>
      <div className={styles.account}>
        <button
          className={`${styles.button} ${loading ? styles.loading : ""}`}
          onClick={onClick}
        >
          <img src={face} className={styles.face} />
        </button>
        {loading && <Loader />}
      </div>
    </>
  );
};
