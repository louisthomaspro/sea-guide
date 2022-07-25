import { Button } from "@mui/material";
import { logOut, signInWithGoogle } from "../firebase/auth";

export function GoogleSignIn() {
  return (
    <Button variant="contained" onClick={signInWithGoogle}>
      Sign In with Google
    </Button>
  );
}

export function GoogleSignOut() {
  return (
    <Button variant="contained" onClick={logOut}>
      Logout
    </Button>
  );
}
