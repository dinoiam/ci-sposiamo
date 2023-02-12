import React from "react";
import { type UserInfoModel } from "@/models/FirebaseModel";
import styles from "./style.module.scss";

interface Props {
  userInfo: UserInfoModel;
}
export const NotConfirmed = ({ userInfo }: Props): JSX.Element => {
  return (
    <div className={styles["not-confirmed"]}>
      {userInfo.n_person > 1
        ? "Purtroppo non sarete dei nostri :("
        : "Purtroppo non sarai dei nostri :("}
    </div>
  );
};
