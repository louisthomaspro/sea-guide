import { ChevronLeft } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function BackButton() {
  // const router = useRouter();

  return (
    <Fragment>
      <IconButton aria-label="back" onClick={() => console.log("ici")}>
        <ChevronLeft />
      </IconButton>
    </Fragment>
  );
}
