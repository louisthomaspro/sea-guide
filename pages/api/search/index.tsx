import { NextApiRequest, NextApiResponse } from "next";
import { algoliaIndex } from "../../../algolia/clientApp";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let data: any = {};
  const params = req.query;

  console.log(params);

  let result: any = [];
  algoliaIndex
    .search("", {
      attributesToRetrieve: ["preferred_common_name"],
    })
    .then(({ hits }) => {
      console.log(hits);
      result = hits;
    });

  res.send(result);
};
