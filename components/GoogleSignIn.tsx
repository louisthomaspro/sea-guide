import { ChevronLeft } from "@mui/icons-material";
import { Box, Button, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { signInWithGoogle } from "../firebase/auth";

export default function GoogleSignIn() {
  return (
    <Button variant="contained" onClick={signInWithGoogle}>
      Sign In with Google
    </Button>
  );
}
