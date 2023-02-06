import React from "react";
import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useChangeConfirmation } from "@/hooks/useChangeConfirmation";
import { Button } from "@/uikit/Button";
import { ReactComponent as Accept } from "@svg/accept.svg";
import { ReactComponent as Reject } from "@svg/reject.svg";
import styles from "./style.module.scss";

interface Props {
  callback?: () => void;
  displayName: string;
}
export const Select = ({ displayName, callback }: Props): JSX.Element => {
  const [user] = useAuthState(auth);
  const [change, _loading] = useChangeConfirmation();

  return (
    <div className={styles.select}>
      <h2 className={styles.name}>{displayName} sarete dei nostri?</h2>
      <div className={styles.wrapper}>
        <Button
          onClick={() => {
            change({ uuid: user?.uid, value: true });
            callback?.();
          }}
        >
          <Accept />
        </Button>
        <Button
          onClick={() => {
            change({ uuid: user?.uid, value: false });
            callback?.();
          }}
        >
          <Reject />
        </Button>
      </div>
    </div>
  );
};
