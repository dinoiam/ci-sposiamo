import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { PostCard } from "../PostCard";
import styles from "./style.module.scss";

export const Gift = (): JSX.Element => {
  return (
    <div data-animation-id="section-cloud__gift-info" className={styles.info}>
      <PostCard
        onIbanCopied={() => {
          toast.info("Testo copiato!", {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: false,
            progress: undefined,
            theme: "colored",
            toastId: "iban",
          });
        }}
      />
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="colored"
      />
      <div className={styles.phrase}>
        Se volete mandarci a<br />
        "quel paese"
        <br />
        cliccate sulla cartolina!!
      </div>
    </div>
  );
};
