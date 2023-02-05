import { useCallback, useEffect, useState } from "react";
import { ref } from "firebase/database";
import { useObjectVal } from "react-firebase-hooks/database";
import { auth, db } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const useGetView = (): {
  view: "loading" | "login" | "end" | "select";
  goToSelect: () => void;
  goToEnd: () => void;
} => {
  const [view, setView] = useState<"loading" | "login" | "end" | "select">(
    "loading"
  );
  const [user, loading, _error] = useAuthState(auth);
  const [partecipazioni] = useObjectVal<{ confermato: boolean }>(
    ref(db, `partecipazioni/${user?.uid}`)
  );
  const goToSelect = useCallback(() => {
    if (view === "end") {
      setView("select");
    }
  }, [view]);

  const goToEnd = useCallback(() => {
    if (view === "select") {
      setView("end");
    }
  }, [view]);

  useEffect(() => {
    if (loading) setView("loading");
    if (!user) setView("login");
    if (user && partecipazioni === null) setView("select");
    if (user && partecipazioni) setView("end");
  }, [loading, partecipazioni, user]);

  return { view, goToSelect, goToEnd };
};
