import React, { useState } from "react";
import eyeOpen from "@images/opened_eye.png";
import eyeClose from "@images/closed_eye.png";
import styles from "./style.module.scss";
import { Input } from "@/uikit/Input";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Password = React.forwardRef<HTMLInputElement, Props>(
  ({ type, ...props }, ref): JSX.Element => {
    const [showPassword, setShowPsswrod] = useState(false);
    return (
      <>
        <Input type={showPassword ? "text" : type} {...props} ref={ref}>
          {type === "password" && (
            <button
              className={styles.showPassword}
              onClick={() => {
                setShowPsswrod(!showPassword);
              }}
            >
              <img src={showPassword ? eyeOpen : eyeClose} />
            </button>
          )}
        </Input>
      </>
    );
  }
);
