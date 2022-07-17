import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  useInfiniteHits,
  UseInfiniteHitsProps,
  useSearchBox,
  UseSearchBoxProps,
} from "react-instantsearch-hooks-web";
import SearchIcon from '@mui/icons-material/Search';

export default function CustomSearchBox(props: UseSearchBoxProps) {
  const { refine, clear } = useSearchBox(props);

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Common name or scientific name"
        inputProps={{ "aria-label": "search" }}
          value={null}
          onChange={event => refine(event.currentTarget.value)}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
