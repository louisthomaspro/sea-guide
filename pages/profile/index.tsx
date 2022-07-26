import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import { useContext } from "react";
import { GoogleSignOut, GoogleSignIn } from "../../components/GoogleAuth";
import AuthContext from "../../context/auth.context";

const Profile: NextPage = () => {
  const { userSession, userData, loading, setUserData } =
    useContext(AuthContext);

  return (
    <>
      <Typography variant="h1" component="h1">
        Profile
      </Typography>
      <Box sx={{ mt: 2 }}>
        {userData && <>Hello {userSession.displayName} </>}
      </Box>
      <Box sx={{ mt: 2 }}>
        {userSession ? <GoogleSignOut /> : <GoogleSignIn />}
      </Box>
    </>
  );
};

export default Profile;
