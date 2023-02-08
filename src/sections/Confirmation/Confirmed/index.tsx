import React from "react";
import { auth } from "@/firebase";
import { useChangeNotes } from "@/hooks/useFirebaseHooks";
import { useAuthState } from "react-firebase-hooks/auth";
import { type UserInfoModel } from "@/models/FirebaseModel";
import { TextArea } from "@/uikit/TextArea";
import styles from "./style.module.scss";

interface Props {
  userInfo: UserInfoModel;
}
export const Confirmed = ({ userInfo }: Props): JSX.Element => {
  const [user] = useAuthState(auth);
  const [change, isLoading] = useChangeNotes();

  return (
    <div className={styles.confirmed}>
      <span>Presenza correttamente confermata</span>
      <span>Save the date 01.09.2023</span>
      <br />
      <br />
      <span>Allergie e intolleranze</span>
      <TextArea
        onChange={(notes) => {
          change({ value: notes, uid: user?.uid });
        }}
        isLoading={isLoading}
        defaultValue={userInfo.notes}
      />
    </div>
  );
};
