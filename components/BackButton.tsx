import { ChevronLeft } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();

  return (
    <Box>
      <IconButton aria-label="back" onClick={() => router.back()}>
        <ChevronLeft />
      </IconButton>
    </Box>
  );
}
