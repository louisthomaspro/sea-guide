import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import { InstantSearch } from "react-instantsearch-hooks-web";
import { algolia } from "../../algolia/clientApp";
import CustomInfiniteHits from "../../components/CustomInfiniteHits";
import CustomSearchBox from "../../components/CustomSearchBox";

const Search: NextPage = () => {
  return (
    <>
      <Typography variant="h1" component="h1">
        Search
      </Typography>

      <InstantSearch indexName="sea-guide" searchClient={algolia}>
        <Box sx={{ pb: 2 }}>
          <CustomSearchBox />
        </Box>
        <CustomInfiniteHits />
      </InstantSearch>
    </>
  );
};

export default Search;
