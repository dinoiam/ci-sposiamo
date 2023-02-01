import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useObjectVal } from "react-firebase-hooks/database";
import { ref } from "firebase/database";
// import { Test } from "./Test";
import { auth, db } from "@/firebase";

// const auth = getAuth()

const login = () => {
  signInWithEmailAndPassword(auth, "test@test.com", "testtest");
};
// const logout = () => {
//   signOut(auth);
// };

export const Login = () => {
  //   const [user, loading, error] = useAuthState(auth);
  //   const [partecipazioni] = useObjectVal(ref(db, `partecipazioni/${user?.uid}`));
  //   const [nome] = useObjectVal(ref(db, `nomi/${user?.uid}`));

  //   if (loading) {
  //     return (
  //       <div>
  //         <p>Initialising User...</p>
  //       </div>
  //     );
  //   }
  //   if (error) {
  //     return (
  //       <div>
  //         <p>Error: </p>
  //       </div>
  //     );
  //   }
  //   if (user) {
  // return (
  //   <div>
  //     <p>Current User: {user.email}</p>
  //     <button onClick={logout}>Log out</button>
  //     {/* {nome && (
  //       <Test
  //         userId={user.uid}
  //         nome={nome.nome}
  //         confermato={partecipazioni?.confermato}
  //       ></Test>
  //     )} */}
  //   </div>
  // );
  //   }

  return (
    <>
      <input type="email" placeholder="test@gmail.com"></input>
      <input type="password"></input>
      <button onClick={login}>Log in</button>;
    </>
  );
};
