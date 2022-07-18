import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import { Fragment } from "react";
import GoogleSignIn from "../../components/GoogleSignIn";

const Profile: NextPage = () => {
  return (
    <Fragment>
      <Typography variant="h1" component="h1">
        Profile
      </Typography>
      <Box>
        <GoogleSignIn />
      </Box>
    </Fragment>
  );
};

export default Profile;
