// import { createContext, useReducer } from 'react'
// import { signInWithEmailAndPassword, type User } from 'firebase/auth'
// import { auth } from '@/firebase'

import { type User } from "firebase/auth";

export interface ContextType {
  user: User | null;
  displayName: string | null;
  confermato: boolean | null;
}
// export const emptyContext = {
//   user: null,
//   displayName: null,
//   confermato: null
// }

// const login = async (): Promise<User | null> => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, 'test@test.com', 'testtest')
//     return userCredential.user
//   } catch (e) {
//     return null
//   }
// }
// // An interface for our actions
// type Actions = {
//   type: 'login'
//   payload: { email: string, password: string }
// } |
// {
//   type: 'confirm'
//   payload: boolean
// }
// async function reducer (state: ContextType, action: Actions): ContextType {
//   switch (action.type) {
//     case 'login': {
//       await login()
//       return state
//     }
//     case 'confirm': {
//       return state
//     }
//   }
//   return state
// }

// export const useGetStore = (): { Context: React.Context<ContextType>, context: ContextType, dispatch: React.Dispatch<Actions> } => {
//   const [context, dispatch] = useReducer(reducer, emptyContext)
//   const Context = createContext<ContextType>(context)
//   return {
//     Context,
//     context,
//     dispatch
//   }
// }
