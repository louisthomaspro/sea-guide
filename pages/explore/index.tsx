import { Typography } from "@mui/material";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Fragment } from "react";
import { Favorite } from "../../components/Favorite";

const Explore: NextPage<{ lifeData: number }> = ({ lifeData }) => {
  return (
    <Fragment>
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

export default Explore;
