import { ImageList, ImageListItem, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import type { GetServerSideProps, NextPage } from "next";
import React, { useState } from "react";
import BackButton from "../../components/BackButton";
import FavoriteButton from "../../components/FavoriteButton";
import { serverUrl } from "../../config";
import { getLife } from "../../firebase/life.firestore";
import { ILife } from "../../models/Life";

const Life: NextPage = ({ lifeData }: any) => {
  return (
    <div>
      <BackButton />
      <FavoriteButton lifeId={lifeData.id} />
      <Box>
        <Typography component="h1">{lifeData.french_common_name}</Typography>
        <Typography
          component="caption"
          color="text.secondary"
          sx={{
            "font-style": "italic",
          }}
        >
          {lifeData.scientific_name}
        </Typography>
      </Box>
      <Link
        href={lifeData.wikipedia_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Wikipedia
      </Link>

      <ImageList cols={3} rowHeight={164}>
        {lifeData.photos.map((photo: any) => (
          <ImageListItem key={photo.id}>
            <img
              src={`${photo.medium_url}?w=164&h=164&fit=crop&auto=format`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id!;
  console.log(id);

  const lifeData = await getLife(id.toString())

  return {
    props: {
      lifeData,
    },
  };
};

export default Life;
