import { getDatabase, ref, set } from "firebase/database";
import { useCallback, useState } from "react";

interface Params {
  uuid?: string;
  value: boolean;
}
export const useChangeConfirmation = (): [(args: Params) => void, boolean] => {
  const [loading, setLoading] = useState(false);
  const change = useCallback(({ value, uuid }: Params) => {
    setLoading(true);

    const db = getDatabase();
    set(ref(db, `partecipazioni/${uuid}`), {
      confermato: value,
    }).finally(() => {
      setLoading(false);
    });
  }, []);
  return [change, loading];
};
