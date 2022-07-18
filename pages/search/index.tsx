import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { Fragment, useContext, useRef, useState } from "react";
import { InstantSearch } from "react-instantsearch-hooks-web";
import { algolia } from "../../algolia/clientApp";
import CustomInfiniteHits from "../../components/CustomInfinitHits";
import CustomSearchBox from "../../components/CustomSearchBox";
import AuthContext from "../../context/auth.context";

const Search: NextPage = () => {
  return (
    <Fragment>
      <Typography variant="h1" component="h1">
        Search
      </Typography>

      <InstantSearch indexName="sea-guide" searchClient={algolia}>
        <Box sx={{ pb: 2 }}>
          <CustomSearchBox />
        </Box>
        <CustomInfiniteHits />
      </InstantSearch>
    </Fragment>
  );
};

export default Search;
