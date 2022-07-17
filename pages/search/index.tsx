import { Box } from "@mui/material";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useContext, useRef, useState } from "react";
import { InstantSearch, SearchBox } from "react-instantsearch-hooks-web";
import { algolia } from "../../algolia/clientApp";
import CustomInfiniteHits from "../../components/CustomInfinitHits";
import CustomSearchBox from "../../components/CustomSearchBox";
import AuthContext from "../../context/auth.context";

const Search: NextPage = () => {
  const { user, loading } = useContext(AuthContext);
  const [nameInput, setNameInput] = useState("");
  const [searchResults, setSearchResults] = useState([]) as any;
  const nameRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const searchAction = () => {
    router.query.name = nameInput;
    console.log(nameInput);
    router.push(router);
  };

  React.useEffect(() => {
    if (!router.isReady) return;
    if (Object.keys(router.query).length != 0) {
      const queryParams: any = { ...router.query };

      fetch(`/api/search?` + new URLSearchParams(queryParams))
        .then((res) => res.json())
        .then((dataParsed) => {
          setSearchResults(dataParsed);
        });
    }
  }, [router.query]);

  return (
    <div>
      <div className="ais-InstantSearch">
        {JSON.stringify(user)}{JSON.stringify(loading)}
        {/* <GoogleSignIn /> */}
        <h1>Search</h1>

        <InstantSearch indexName="sea-guide" searchClient={algolia}>
          {/* <ClearRefinements /> */}
          {/* <RefinementList attribute="name" /> */}
          <Box sx={{ pb: 2 }}>
            <CustomSearchBox />
          </Box>
          <CustomInfiniteHits />
        </InstantSearch>
      </div>
    </div>
  );
};

export default Search;
