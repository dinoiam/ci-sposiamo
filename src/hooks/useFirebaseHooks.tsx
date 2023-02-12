import { getDatabase, ref, update } from "firebase/database";
import { useCallback, useState } from "react";

interface ConfirmationParams {
  uid?: string;
  value: boolean;
}
export const useChangeConfirmation = (): [
  (args: ConfirmationParams) => void,
  boolean
] => {
  const [loading, setLoading] = useState(false);
  const change = useCallback(({ value, uid }: ConfirmationParams) => {
    setLoading(true);

    const db = getDatabase();
    update(ref(db, `userInfo/${uid}`), {
      confermato: value,
    }).finally(() => {
      setLoading(false);
    });
  }, []);
  return [change, loading];
};

interface NotesParams {
  uid?: string;
  value: string;
}

export const useChangeNotes = (): [(args: NotesParams) => void, boolean] => {
  const [loading, setLoading] = useState(false);
  const change = useCallback(({ value, uid }: NotesParams) => {
    setLoading(true);

    const db = getDatabase();
    update(ref(db, `userInfo/${uid}`), {
      notes: value,
    }).finally(() => {
      setLoading(false);
    });
  }, []);
  return [change, loading];
};

interface PlusOneParams {
  uid?: string;
  value: boolean;
}

export const useChangePlusOne = (): [
  (args: PlusOneParams) => void,
  boolean
] => {
  const [loading, setLoading] = useState(false);
  const change = useCallback(({ value, uid }: PlusOneParams) => {
    setLoading(true);

    const db = getDatabase();
    update(ref(db, `userInfo/${uid}`), {
      plus_one: value,
    }).finally(() => {
      setLoading(false);
    });
  }, []);
  return [change, loading];
};
