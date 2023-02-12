import React, { useCallback } from "react";
import styles from "./style.module.scss";
import { Loader } from "@/uikit/Loader";

interface Props {
  defaultChecked: boolean;
  onChange: (value: boolean) => void;
  label: string;
  isLoading?: boolean;
}
export const Checkbox = ({
  defaultChecked,
  onChange,
  label = "",
  isLoading,
}: Props): JSX.Element => {
  const onCheckboxChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.checked;
      onChange(value);
    },
    [onChange]
  );

  return (
    <label className={`${styles.checkbox} ${isLoading ? styles.loading : ""}`}>
      {isLoading && <Loader />}
      <input
        className={styles.input}
        disabled={isLoading}
        type="checkbox"
        defaultChecked={defaultChecked}
        onChange={onCheckboxChange}
      />
      {label}
    </label>
  );
};
