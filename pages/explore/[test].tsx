import { Typography } from "@mui/material";
import type {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from "next";
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

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  const lifeData = await getLife("39659");

  // const lifeData = {
  //   id: 123,
  //   french_common_name: "test",
  //   scientific_name: "test",
  //   wikipedia_url: "test",
  //   photos: [] as any[],
  // };

  if (lifeData) {
    return { props: { lifeData } };
  } else {
    return { notFound: true };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [] as any[],
    fallback: true,
  };
};

export default Explore;
