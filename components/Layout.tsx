import { Box, Container, CssBaseline } from "@mui/material";
import { ReactNode } from "react";
import NavBar from "./NavBar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      <main>
        <Container sx={{ pb: 2, pt: 2 }}>{children}</Container>
      </main>
      <NavBar />
    </Box>
  );
}
