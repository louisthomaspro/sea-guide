import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import { Fragment, useContext, useEffect } from "react";
import { GoogleSignOut, GoogleSignIn } from "../../components/GoogleAuth";
import AuthContext from "../../context/auth.context";

const Profile: NextPage = () => {
  const { user, userData, loading, setUserData } = useContext(AuthContext);

  return (
    <Fragment>
      <Typography variant="h1" component="h1">
        Profile
      </Typography>
      <Box sx={{ mt: 2 }}>
        {userData && <Fragment>Hello {user.displayName} </Fragment>}
      </Box>
      <Box sx={{ mt: 2 }}>{user ? <GoogleSignOut /> : <GoogleSignIn />}</Box>
    </Fragment>
  );
};

export default Profile;
