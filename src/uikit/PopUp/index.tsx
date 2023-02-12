import React, { useEffect } from "react";
import close from "@images/close.png";
import styles from "./style.module.scss";

interface Props {
  children?: React.ReactNode;
  onClose: () => void;
}

export const PopUp = ({ children, onClose }: Props): JSX.Element => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className={styles.popup}>
      <div className={styles.outer} onClick={onClose} />
      <div className={styles.popup__content}>
        {children}
        <button className={styles.close} onClick={onClose}>
          <img src={close} />
        </button>
      </div>
    </div>
  );
};
