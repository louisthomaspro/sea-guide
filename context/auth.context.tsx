import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase/auth";
import { createUser, getUser } from "../firebase/user.firestore";
import { IUser } from "../models/User";

const AuthContext = createContext({
  user: null,
  userData: null as IUser,
  loading: true,
});

export function AuthContextProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let unsubscribe;

    unsubscribe = onAuthStateChanged(auth, async (user) => {
      const userData = await getUser(user.email) as IUser;
      if (!userData) {
        const newUserData: IUser = { email: user.email, favorites: [] }
        await createUser(newUserData, user.email);
        await setUserData(newUserData)
      } else {
        await setUserData(userData)
      }

      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, userData, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
