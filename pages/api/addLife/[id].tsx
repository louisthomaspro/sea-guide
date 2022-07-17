import { doc, setDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "../../../firebase/firestore";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let data: any = {};
  const id = req.query.id?.toString() ?? "";

  try {
    const res = await fetch(`https://api.inaturalist.org/v1/taxa/${id}?locale=fr`);
    data = await res.json();
  } catch (err) {
    console.log(err);
  }

  setDoc(doc(firestore, `lives`, id), data.results[0]);

  res.send("Added");
};
