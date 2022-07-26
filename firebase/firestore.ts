import { getFirestore } from "firebase/firestore/lite";
import firebase from "./firebase";

export const firestore = getFirestore(firebase);
