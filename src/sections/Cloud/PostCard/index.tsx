import React, { useState } from "react";
import honey from "@images/honey.png";
import logo from "@images/logo.png";
import { ReactComponent as ExternalLink } from "@svg/external-link.svg";
import { ReactComponent as Copy } from "@svg/copy.svg";
import styles from "./style.module.scss";

interface Props {
  onIbanCopied: () => void;
}

const IBAN = "IT4323452352352523";

export const PostCard = ({ onIbanCopied }: Props): JSX.Element => {
  const [showBack, setShowBack] = useState(false);
  return (
    <div
      className={`${styles.postcard} ${showBack ? styles["show-back"] : ""}`}
      onClick={() => {
        setShowBack(!showBack);
      }}
    >
      <div className={styles.inner}>
        <div className={styles["post-card-front"]}>
          <img src={honey} />
        </div>
        <div className={styles["post-card-back"]}>
          <div className={styles["postcard-info"]}>
            <p className={styles.message}>
              I soldi non fanno la felicità, ma il viaggio di nozze sì :)
            </p>
            <div className={styles.line} />
            <div className={styles.details}>
              <div className={styles.stamp}>
                <img className={styles.logo} src={logo} />
              </div>
              <a
                className={styles.agency}
                href="https://goo.gl/maps/Q56VjxQg6a18s78X9"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                <div>
                  <p>Lista: Dinoia - Giannini</p> Ometto Viaggiatore
                  <ExternalLink className={styles.svg} />
                </div>
              </a>
              <p
                className={styles.iban}
                onClick={async (event) => {
                  event?.stopPropagation();
                  await navigator.clipboard.writeText(IBAN);
                  onIbanCopied?.();
                }}
              >
                IBAN: {IBAN} <Copy className={styles.svg} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
