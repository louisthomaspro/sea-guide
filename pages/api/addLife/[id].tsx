import { NextApiRequest, NextApiResponse } from "next";
import { setLifeFromINaturalist } from "../../../firebase/life.firestore";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let data: any = {};
  const id = req.query.id?.toString() ?? "";

  setLifeFromINaturalist(id);

  res.send("Added");
};
