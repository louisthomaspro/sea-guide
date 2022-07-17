import {
  collection,
  doc,
  DocumentData,
  Firestore,
  getDoc,
  getDocs,
  limit,
  query,
  QueryDocumentSnapshot,
  where,
} from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let data = {};
  const { id } = req.query;

  // const searchQuery = query(
  //   collection(firestore, "lives"),
  //   where("preferred_common_name", "==", false),
  //   limit(1)
  // );
  // const querySnapshot = await getDocs(searchQuery);

  const documentRef = await getDoc(doc(Firestore, `lives/${id}`));
  const result = await documentRef.data()
  res.send(result);
};
