import { ImageList, ImageListItem, Link, Typography } from "@mui/material";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import BackButton from "../../components/BackButton";
import FavoriteButton from "../../components/FavoriteButton";
import { getLife } from "../../firebase/life.firestore";

const Life: NextPage = ({ lifeData }: any) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <BackButton />
      <FavoriteButton lifeId={lifeData.id} />
      <Typography component="h1">{lifeData.french_common_name}</Typography>
      <Typography
        component="caption"
        color="text.secondary"
        sx={{
          fontStyle: "italic",
        }}
      >
        {lifeData.scientific_name}
      </Typography>
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
            <Image
              loader={() => photo.medium_url}
              src="/loading-fish.webp"
              layout="fill"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Fragment>
  );
};

export default Life;

export async function getStaticProps({ params }: any) {
  try {
    const lifeData = await getLife(params.id.toString());
    return { props: { lifeData } };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
}

export async function getStaticPaths() {
  // fallback: true means that the missing pages
  // will not 404, and instead can render a fallback.
  return { paths: [] as string[], fallback: true };
}
