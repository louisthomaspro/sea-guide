import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  useInfiniteHits,
  UseInfiniteHitsProps,
} from "react-instantsearch-hooks-web";

export default function CustomInfiniteHits(props: UseInfiniteHitsProps) {
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  const observer = useRef<IntersectionObserver>();
  const prevY = useRef(0);
  const { hits, isLastPage, showMore, showPrevious } = useInfiniteHits(props);
  const test = () => {
    console.log(hits);
    console.log(showPrevious);
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        const y = firstEntry.boundingClientRect.y;

        if (prevY.current > y) {
          showMore();
        }
        prevY.current = y;
      },
      { threshold: 0.5 }
    );

    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver!.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver!.unobserve(currentElement);
      }
    };
  }, [element]);

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 2 }}>
      {hits.map((hit: any) => (
        <Grid item xs={6} key={hit.id}>
          <Link href={`/life/${hit.id}`}><Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={hit["photo.medium_url"]}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  component="div"
                  sx={{
                    overflow: "hidden",
                    "white-space": "nowrap",
                    "text-overflow": "ellipsis",
                  }}
                >
                  {hit.french_common_name}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{
                    "font-style": "italic",
                    overflow: "hidden",
                    "white-space": "nowrap",
                    "text-overflow": "ellipsis",
                  }}
                >
                  {hit.scientific_name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card></Link>
        </Grid>
      ))}
      {!isLastPage ? (
        <h1 ref={setElement}>Loading Posts...</h1>
      ) : (
        <h1>No more sealife available</h1>
      )}
    </Grid>
  );
}
