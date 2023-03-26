import React, { useState } from "react";
import typingGif from "@images/typing.gif";
import { ReactComponent as Saved } from "@svg/saved.svg";
import { useDebouncedCallback } from "use-debounce";
import styles from "./style.module.scss";

interface Props {
  onChange: (event: string) => void;
  isLoading: boolean;
  defaultValue?: string;
  placeholder?: string;
  timestamp?: number;
}
export const TextArea = ({
  isLoading,
  onChange,
  defaultValue = "",
  placeholder = "",
  timestamp,
}: Props): JSX.Element => {
  const [value, setValue] = useState(defaultValue);
  const [typing, setTyping] = useState(false);

  const debouncedCallback = useDebouncedCallback((value: string) => {
    onChange(value);
    setTyping(false);
  }, 500);

  return (
    <div className={styles.wrapper}>
      <textarea
        className={styles.textarea}
        value={value}
        placeholder={placeholder}
        onChange={(event) => {
          const value = event.target.value;
          setTyping(true);
          setValue(value);
          debouncedCallback(value);
        }}
      />

      <div className={styles.status}>
        {typing || isLoading ? <img src={typingGif} /> : <Saved />}
        <div className={styles.saved}>
          <p>
            {timestamp && (
              <>Ultimo salvataggio: {new Date(timestamp).toLocaleString()}</>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
