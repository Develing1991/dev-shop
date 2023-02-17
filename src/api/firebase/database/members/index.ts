import { MembUser } from "./../types";
import { app } from "../../firebase";
import {
  getFirestore,
  // setDoc,
  updateDoc,
  doc,
  getDoc,
  arrayUnion,
} from "firebase/firestore";
const db = getFirestore(app);

// const adminsRef = doc(db, "members", "users");
const membersRef = doc(db, "members", "users");
export const GET_MEMBERS = async () => {
  const docSnap = await getDoc(membersRef);
  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

export const SET_MEMBERS = async (user: Partial<MembUser>) => {
  await updateDoc(membersRef, {
    users: arrayUnion({
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      admin: false,
      providerId: user.providerId,
      phoneNumber: user.phoneNumber ?? "",
      address: user.address ?? "",
      zonecode: user.zonecode ?? "",
    }),
  });
};
