import { ImageList, ImageListItem, Link, Typography } from "@mui/material";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import BackButton from "../../components/BackButton";
import FavoriteButton from "../../components/FavoriteButton";
import { getLife } from "../../firebase/life.firestore";

const Life: NextPage = ({ lifeData }: any) => {

  return (
    <Fragment>
      <BackButton />
      <FavoriteButton lifeId={lifeData.id} />
      <Typography component="h1">{lifeData.french_common_name}</Typography>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ fontStyle: "italic" }}
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
              src="/loading-fish.webp" // not working ?
              layout="fill"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Fragment>
  );
};

export default Life;

export async function getServerSideProps(context: any) {
  let lifeData = await getLife("39659");
  
  return { props: { lifeData } };
}

// export async function getStaticPaths() {
//   return { paths: [] as any[], fallback: true };
// }
