import React, { useState } from "react";
import honey from "@images/honey.png";
import logo from "@images/logo.png";
import { ReactComponent as ExternalLink } from "@svg/external-link.svg";
import { ReactComponent as Copy } from "@svg/copy.svg";
import styles from "./style.module.scss";

interface Props {
  onIbanCopied: () => void;
}

const IBAN = "IT08D0306964716100000012517";

export const PostCard = ({ onIbanCopied }: Props): JSX.Element => {
  const [showBack, setShowBack] = useState(false);
  return (
    <div
      data-animation-id="section-cloud__gift-info"
      className={`${styles.postcard} ${showBack ? styles["show-back"] : ""}`}
      onClick={() => {
        setShowBack(!showBack);
      }}
    >
      <div className={styles.inner}>
        <div
          className={`${styles["post-card-face"]} ${styles["post-card-front"]}`}
        >
          <img src={honey} />
        </div>
        <div
          className={`${styles["post-card-face"]} ${styles["post-card-back"]}`}
        >
          <div className={styles["postcard-info"]}>
            <p className={styles.message}>
              I soldi non fanno la felicità, ma il viaggio di nozze sì :)
            </p>
            <div className={styles.line} />
            <div className={styles.details}>
              <div className={styles.stamp}>
                <img className={styles.logo} src={logo} />
              </div>
              <div className={styles.agency}>
                <div>
                  <p>Lista: Dinoia - Giannini</p>
                  <a
                    href="https://goo.gl/maps/Q56VjxQg6a18s78X9"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => {
                      event.stopPropagation();
                    }}
                  >
                    Ometto Viaggiatore
                    <ExternalLink className={styles.svg} />
                  </a>
                </div>
              </div>
              <div
                className={styles.iban}
                onClick={async (event) => {
                  event?.stopPropagation();
                  await navigator.clipboard.writeText(IBAN);
                  onIbanCopied?.();
                }}
              >
                IL NOSTRO IBAN:{" "}
                <p>
                  {IBAN} <Copy className={styles.svg} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
