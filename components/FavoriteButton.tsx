import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import CloseIcon from "@mui/icons-material/Close";
import { Button, IconButton, Snackbar } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/auth.context";
import { signInWithGoogle } from "../firebase/auth";
import { addFavorite, removeFavorite } from "../firebase/user.firestore";

export default function FavoriteButton(props: any) {
  const [openAddFavorite, setOpenAddFavorite] = useState(false);
  const [openRemoveFavorite, setOpenRemoveFavorite] = useState(false);
  const [openNeedSignIn, setOpenNeedSignIn] = useState(false);

  const [isFavorite, setIsFavorite] = useState(false);
  const { userSession, userData, loading, setUserData } =
    useContext(AuthContext);

  const handleFavoriteButton = () => {
    if (!userSession) {
      setOpenNeedSignIn(true);
      return;
    }

    if (isFavorite) {
      removeFavorite(props.lifeId, userSession.email).then(() => {
        const newFavorites = userData.favorites.filter(
          (id) => id !== props.lifeId
        );
        const newUserData = { ...userData, favorites: newFavorites };
        setUserData(newUserData);
        setIsFavorite(false);
        setOpenRemoveFavorite(true);
      });
    } else {
      addFavorite(props.lifeId, userSession.email).then(() => {
        userData.favorites.push(props.lifeId);
        const newUserData = userData;
        setUserData(newUserData);
        setIsFavorite(true);
        setOpenAddFavorite(true);
      });
    }
  };

  const signIn = () => {
    signInWithGoogle().then(() => {
      setOpenNeedSignIn(false);
    });
  };

  useEffect(() => {
    if (userData) {
      console.log(userData);
      if (userData.favorites.some((el) => el === props.lifeId)) {
        setIsFavorite(true);
      }
    }
  }, [userData, userSession, loading, props.lifeId]);

  const action = (
    <>
      <Button color="secondary" size="small" onClick={signIn}>
        SIGN IN
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => setOpenNeedSignIn(false)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
      <IconButton aria-label="favorite" onClick={handleFavoriteButton}>
        {isFavorite ? <Favorite /> : <FavoriteBorder />}
      </IconButton>
      <Snackbar
        open={openAddFavorite}
        autoHideDuration={3000}
        message="Added to favorite!"
      />
      <Snackbar
        open={openRemoveFavorite}
        autoHideDuration={3000}
        message="Removed from favorite!"
      />
      <Snackbar
        open={openNeedSignIn}
        autoHideDuration={3000}
        message="Need to sign in to add to favorite!"
        action={action}
      />
    </>
  );
}
