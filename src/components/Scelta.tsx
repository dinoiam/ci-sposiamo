import React from "react";
import { getDatabase, ref, set } from "firebase/database";

type Props = {
  userId: string;
  callback?: () => void;
};
export const Scelta = ({ userId, callback }: Props) => {
  function change(userId: string, valore: boolean) {
    // setLoading(true);

    const db = getDatabase();
    set(ref(db, "partecipazioni/" + userId), {
      confermato: valore,
    }).finally(() => {
      //   setLoading(false);
      callback && callback();
    });
  }
  return (
    <div>
      Sarete dei nostri?
      <button
        onClick={() => {
          change(userId, true);
        }}
      >
        CI SAREMO!
      </button>
      <button
        onClick={() => {
          change(userId, false);
        }}
      >
        PURTROPPO NON POSSIAMO
      </button>
    </div>
  );
};
