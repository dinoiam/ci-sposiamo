import React from "react";
import { auth } from "@/firebase";
import { useChangeNotes, useChangePlusOne } from "@/hooks/useFirebaseHooks";
import { useAuthState } from "react-firebase-hooks/auth";
import { type UserInfoModel } from "@/models/FirebaseModel";
import { TextArea } from "@/uikit/TextArea";
import styles from "./style.module.scss";
import { Checkbox } from "@/uikit/CheckBox";

interface Props {
  userInfo: UserInfoModel;
}
export const Confirmed = ({ userInfo }: Props): JSX.Element => {
  const [user] = useAuthState(auth);
  const [change, isLoading] = useChangeNotes();
  const [changePlusOne, isLoadingPlusOne] = useChangePlusOne();

  return (
    <div className={styles.confirmed}>
      <span>Presenza correttamente confermata!</span>
      <span className={styles.save}>Save the date 01.09.2023.</span>
      {userInfo.n_person === 1 && (
        <div className={styles.checkbox}>
          <Checkbox
            isLoading={isLoadingPlusOne}
            defaultChecked={!!userInfo.plus_one}
            label="Ho un accompagnatore!"
            onChange={(value) => {
              changePlusOne({ value, uid: user?.uid });
            }}
          />
        </div>
      )}
      <span className={styles.notes}>Allergie e intolleranze</span>
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
