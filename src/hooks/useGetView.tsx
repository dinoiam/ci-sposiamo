import { useEffect, useState } from "react";
import { ref } from "firebase/database";
import { useObjectVal } from "react-firebase-hooks/database";
import { auth, db } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { type ViewModel } from "@/models/ViewModel";
import { type UserInfoModel } from "@/models/FirebaseModel";

export const useGetView = (): ViewModel => {
  const [result, setResult] = useState<ViewModel>({
    view: "loading",
  });
  const [user, loading, _error] = useAuthState(auth);
  const [userInfo] = useObjectVal<UserInfoModel>(
    ref(db, `userInfo/${user?.uid}`)
  );

  useEffect(() => {
    if (loading)
      setResult({
        view: "loading",
      });
    else if (!user)
      setResult({
        view: "login",
      });
    else if (userInfo === undefined || userInfo === null) {
      setResult({
        view: "loading",
      });
    } else if (userInfo.confermato === undefined)
      setResult({
        view: "select",
        userInfo,
      });
    else if (userInfo.confermato || !userInfo.confermato)
      setResult({
        view: "end",
        userInfo,
      });
  }, [loading, userInfo, user]);

  return result;
};
