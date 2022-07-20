import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment } from "react";
import BackButton from "../../components/BackButton";
import { Favorite } from "../../components/Favorite";
import { ILife } from "../../models/Life";

const Life: NextPage<{ lifeData: ILife }> = ({ lifeData }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <BackButton />
      {/* <FavoriteButton /> */}
      <Favorite />
      {/* <Typography component="h1">{lifeData.french_common_name}</Typography>
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
      </ImageList> */}
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return { props: { lifeData: null } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [] as any[],
    fallback: true,
  };
};

export default Life;
