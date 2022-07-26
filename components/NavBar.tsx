import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import { useRouter } from "next/router";
import { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";

export default function NavBar() {
  const router = useRouter();
  const firstPath = router.pathname.split("/")[1];
  const [activeTab, setActiveTab] = useState(firstPath);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={activeTab}
        onChange={(event, newValue) => {
          setActiveTab(newValue);
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
