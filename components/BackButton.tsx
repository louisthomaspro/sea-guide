import ChevronLeft from "@mui/icons-material/ChevronLeft";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();

  return (
    <>
      <IconButton aria-label="back" onClick={() => router.back()}>
        <ChevronLeft />
      </IconButton>
    </>
  );
}
