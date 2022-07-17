import {
  Favorite,
  FavoriteBorder,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, IconButton, Snackbar } from "@mui/material";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import AuthContext from "../context/auth.context";
import { signInWithGoogle } from "../firebase/auth";
import { addFavorite, removeFavorite } from "../firebase/user.firestore";
import { IFavorite, IUser } from "../models/User";

export default function FavoriteButton(props: any) {
  const [open, setOpen] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const { user, userData, loading } = useContext(AuthContext);

  const addToFavorite = () => {
    if (!user) {
      handleClick();
    } else {
      if (isFavorite) {
        removeFavorite(props.lifeId, user.email).then(() => {
          handleClick();
          setIsFavorite(false)
        });
      } else {
        addFavorite(props.lifeId, user.email).then(() => {
          handleClick();
          setIsFavorite(true)
        });
      }
    }
  };

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const signIn = () => {
    signInWithGoogle().then(() => {
      handleClose();
    });
  };

  useEffect(() => {
    console.log("ici")
    console.log(userData)
    if (userData) {
      console.log(props.lifeId)
      if (
        userData.favorites.some((el) => (el === props.lifeId))
      ) {
        console.log('here')
        setIsFavorite(true);
      }
    }
  }, [userData, user, loading]);

  const action = (
    <Box>
      <Button color="secondary" size="small" onClick={signIn}>
        SIGN IN
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Box>
  );

  return (
    <Box>
      <IconButton aria-label="favorite" onClick={addToFavorite}>
        {isFavorite ? <Favorite /> : <FavoriteBorder />}
      </IconButton>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Sign in needed for favorite featuer"
        action={action}
      />
    </Box>
  );
}
