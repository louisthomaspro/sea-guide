import { Typography } from "@mui/material";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment } from "react";
import BackButton from "../../components/BackButton";
import { Favorite } from "../../components/Favorite";

const Explore: NextPage<{ lifeData: number }> = ({ lifeData }) => {
  // const router = useRouter();
  // if (router.isFallback) {
  //   return <Fragment>Loading...</Fragment>;
  // }

  return (
    <Fragment>
      <BackButton />
      <Favorite />
      <Typography variant="h1" component="h1">
        Explore
      </Typography>
      <Typography variant="body1" gutterBottom>
        In construction...
      </Typography>
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return { props: { lifeData: null } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [] as any[],
    fallback: 'blocking',
  };
};

export default Explore;
