import { ChevronLeft } from "@mui/icons-material";
import { Box, Button, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { logOut, signInWithGoogle } from "../firebase/auth";

export function BackHeader() {
  return (
    <Fragment>
      Back
    </Fragment>
  );
}