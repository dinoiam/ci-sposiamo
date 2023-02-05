import React, { useRef, useState } from "react";
import { Input } from "@/uikit/Input";
import styles from "./style.module.scss";
import { Button } from "@/uikit/Button";
import { Title } from "@/uikit/Title";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { InfoBox } from "@/uikit/InfoBox";

export const Login = (): JSX.Element => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async (): Promise<void> => {
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
    if (!email || !password) {
      setError("I campi email e password sono obbligatori");
      return;
    }
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      setError("Email o password errati");
    }
    setLoading(false);
  };

  return (
    <div className={styles.login}>
      <Title>Accedi per confermare la partecipazione</Title>
      <div className={styles.form}>
        <Input type="email" placeholder="Email" id="email" ref={emailRef} />
        <Input
          type="password"
          placeholder="Password"
          id="password"
          ref={passwordRef}
        />
        <Button onClick={login} loading={loading}>
          Log in
        </Button>
        <InfoBox label={error} type="error" />
      </div>
    </div>
  );
};
