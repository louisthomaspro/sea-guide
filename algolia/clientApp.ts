import algoliasearch from "algoliasearch/lite";

export const algolia = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY!
);

export const algoliaIndex = algolia.initIndex("sea-guide");
