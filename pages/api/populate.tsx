import { NextApiRequest, NextApiResponse } from "next";
import { populate } from "../../lib/life/life.service";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await populate();

  res.send("Done");
};
