import React, { useRef } from "react";
import { Sky } from "@sections/Sky";
import { Sand } from "./sections/Sand";
import { Cloud } from "./sections/Cloud";
import { Login } from "./components/Login";
import { Confirmation } from "./components/Confirmation";
import "./style/index.scss";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase";
import { useObjectVal } from "react-firebase-hooks/database";
import { ref } from "firebase/database";
import { useCloudAnimations } from "./hooks/useCloudAnimations";
import { useSandAnimations } from "./hooks/useSandAnimations";
import { useSkyAnimations } from "./hooks/useSkyAnimations";

function App() {
  const wrapper = useRef<HTMLDivElement>(null);

  const [user, loading, error] = useAuthState(auth);
  const [partecipazioni] = useObjectVal<{ confermato: boolean }>(
    ref(db, `partecipazioni/${user?.uid}`)
  );
  const [nome] = useObjectVal<{ nome: string }>(ref(db, `nomi/${user?.uid}`));
  useCloudAnimations({ appRef: wrapper });
  useSandAnimations({ appRef: wrapper });
  useSkyAnimations({ appRef: wrapper });
  return (
    <div className="App" ref={wrapper}>
      <Sky appRef={wrapper}></Sky>
      <Sand appRef={wrapper}></Sand>
      <Cloud appRef={wrapper}></Cloud>
      {!loading && (
        <Confirmation
          user={user}
          confermato={partecipazioni?.confermato}
          nome={nome?.nome}
        ></Confirmation>
      )}
    </div>
  );
}

export default App;
