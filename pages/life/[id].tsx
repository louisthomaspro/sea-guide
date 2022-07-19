import { NoPhotography } from "@mui/icons-material";
import { ImageList, ImageListItem, Link, Typography } from "@mui/material";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import BackButton from "../../components/BackButton";
import FavoriteButton from "../../components/FavoriteButton";
import { getLife } from "../../firebase/life.firestore";

const Life: NextPage = () => {
  const [lifeData, setLifeData] = useState(null);
  useEffect(() => {
    getLife("39659").then((res) => {
      setLifeData(res);
    });
  }, []);

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      {lifeData ? (
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
      ) : (
        "Loading..."
      )}
    </Fragment>
  );
};

export default Life;

// export async function getStaticProps({ params }: any) {
//   let lifeData = null;
//   try {
//     lifeData = await getLife(params.id.toString());
//   } catch (error) {
//     console.error(error);
//   }
//   if (lifeData) {
//     return { props: { lifeData } };
//   } else {
//     return { notFound: true };
//   }
// }

// export async function getStaticPaths() {
//   return { paths: [] as any[], fallback: true };
// }

// export async function getServerSideProps(context: any) {

//     let lifeData = null;
//   try {
//     lifeData = await getLife("39659");
//   } catch (error) {
//     console.error(error);
//   }
//   if (lifeData) {
//     return { props: { lifeData } };
//   }
// }
