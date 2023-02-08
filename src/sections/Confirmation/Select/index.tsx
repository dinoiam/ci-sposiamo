import React from "react";
import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useChangeConfirmation } from "@/hooks/useFirebaseHooks";
import { Button } from "@/uikit/Button";
import { ReactComponent as Accept } from "@svg/accept.svg";
import { ReactComponent as Reject } from "@svg/reject.svg";
import styles from "./style.module.scss";
import { type UserInfoModel } from "@/models/FirebaseModel";

interface Props {
  callback?: () => void;
  userInfo: UserInfoModel;
}
export const Select = ({ userInfo, callback }: Props): JSX.Element => {
  const [user] = useAuthState(auth);
  const [change, loading] = useChangeConfirmation();

  return (
    <div className={styles.select}>
      <h2 className={styles.name}>{userInfo.name} sarete dei nostri?</h2>
      <div className={styles.wrapper}>
        <Button
          onClick={() => {
            change({ uid: user?.uid, value: true });
            callback?.();
          }}
        >
          <Accept />
        </Button>
        <Button
          onClick={() => {
            change({ uid: user?.uid, value: false });
            callback?.();
          }}
          loading={loading}
        >
          <Reject />
        </Button>
      </div>
    </div>
  );
};
