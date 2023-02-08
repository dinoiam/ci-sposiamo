import React, { useRef } from "react";
import { Sky } from "@sections/Sky";
import { Sand } from "./sections/Sand";
import { Cloud } from "./sections/Cloud";
import { Confirmation } from "./sections/Confirmation";
import { useCloudAnimations } from "./hooks/useCloudAnimations";
import { useSandAnimations } from "./hooks/useSandAnimations";
import { useSkyAnimations } from "./hooks/useSkyAnimations";

import "./style/index.scss";

function App(): JSX.Element {
  const wrapper = useRef<HTMLDivElement>(null);
  useCloudAnimations(wrapper);
  useSandAnimations(wrapper);
  useSkyAnimations(wrapper);

  return (
    <div className="App" ref={wrapper}>
      <Sky />
      <Sand />
      <Cloud />
      <Confirmation />
    </div>
  );
}

export default App;
