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
}
export const TextArea = ({
  isLoading,
  onChange,
  defaultValue = "",
  placeholder = "",
}: Props): JSX.Element => {
  const [changes, setChanges] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const [typing, setTyping] = useState(false);

  const debouncedCallback = useDebouncedCallback((value: string) => {
    setChanges(true);
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
        {typing || isLoading ? (
          <img src={typingGif} />
        ) : (
          <div className={styles.saved}>
            {changes && (
              <div className={styles.saved}>
                <Saved />
                <p>modifiche salvate!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
