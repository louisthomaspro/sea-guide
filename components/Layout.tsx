import { Box, Container, CssBaseline } from "@mui/material";
import NavBar from "./NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      <main>
        <Container sx={{ pb: 2 }}>{children}</Container>
      </main>
      <NavBar />
    </Box>
  );
}
