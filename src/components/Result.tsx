import React from "react";

type Props = {
  scelta: boolean;
  nome: string;
  cambioIdea: () => void;
};
export const Result = ({ scelta, nome, cambioIdea }: Props) => {
  return (
    <div>
      <div>Ciao {nome}</div>
      {scelta ? (
        <div>Avete confermato la vostra presenza</div>
      ) : (
        <div>Purtroppo non sarete dei nostri :(</div>
      )}
      <button onClick={cambioIdea}>Avete cambiato idea?</button>
    </div>
  );
};
