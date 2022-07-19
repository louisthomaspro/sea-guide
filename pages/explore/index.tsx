import { Typography } from "@mui/material";
import type { GetServerSideProps, NextPage } from "next";
import { Fragment } from "react";
import { getLife } from "../../firebase/life.firestore";
import { ILife } from "../../models/Life";

const Explore: NextPage<{ lifeData: ILife }> = ({ lifeData }) => {
  return (
    <Fragment>
      <Typography variant="h1" component="h1">
        Explore
        {JSON.stringify(lifeData)}
      </Typography>
      <Typography variant="body1" gutterBottom>
        In construction...
      </Typography>
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const lifeData = await getLife("39659");

  if (lifeData) {
    return { props: { lifeData } };
  } else {
    return { notFound: true };
  }
};

export default Explore;
