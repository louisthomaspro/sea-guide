import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import NProgress from "nprogress";

import "nprogress/nprogress.css";
NProgress.configure({ showSpinner: false });

export default function NavBar() {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      NProgress.start();
    });

    router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });

    router.events.on("routeChangeError", () => {
      NProgress.done();
    });
  }, [router.events]);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        onChange={(event, newValue) => {
          router.push(`/${newValue}`);
        }}
      >
        <BottomNavigationAction
          label="Explore"
          value="explore"
          icon={<ExploreIcon />}
        />
        <BottomNavigationAction
          label="Search"
          value="search"
          icon={<SearchIcon />}
        />
        <BottomNavigationAction
          label="Profile"
          value="profile"
          icon={<PersonIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
