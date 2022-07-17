import { NextApiRequest, NextApiResponse } from "next";
import { populate } from "../../firebase/life.firestore";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await populate();

  res.send("Done");
};
