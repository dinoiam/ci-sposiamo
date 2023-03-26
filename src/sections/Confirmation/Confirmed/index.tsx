import React from "react";
import { auth } from "@/firebase";
import {
  useChangeNotes,
  useChangePlusOne,
  useChangePlusOneName,
} from "@/hooks/useFirebaseHooks";
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
  const [changePlusOneName] = useChangePlusOneName();

  return (
    <div className={styles.confirmed}>
      <span>Presenza correttamente confermata!</span>
      <span className={styles.save}>Save the date 01.09.2023.</span>
      {userInfo.n_person === 1 && (
        <>
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

          {!!userInfo.plus_one && (
            <div className={styles["name-wrapper"]}>
              Scrivi qui il suo nome :)
              <input
                defaultValue={userInfo.plus_one_name}
                className={styles.name}
                onChange={(event) => {
                  const value = event.target.value;
                  changePlusOneName({ value, uid: user?.uid });
                }}
              />
            </div>
          )}
        </>
      )}
      <span className={styles.notes}>Note, allergie, intolleranze</span>
      <TextArea
        placeholder={"Esempio: Latte, Pesce, crostacei, ..."}
        onChange={(notes) => {
          change({ value: notes, uid: user?.uid });
        }}
        isLoading={isLoading}
        defaultValue={userInfo.notes}
        timestamp={userInfo.createdAt}
      />
    </div>
  );
};
