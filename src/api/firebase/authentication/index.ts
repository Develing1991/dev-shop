import { app } from "../firebase";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  User,
  // setPersistence,
  // browserLocalPersistence,
} from "firebase/auth";
import { GET_MEMBERS, SET_MEMBERS } from "../database/members";
import { IMembCreateEmail, IMembStateChange } from "../database/types";

const auth = getAuth(app);

export enum EProvider {
  google = "google",
  facebook = "facebook",
  twitter = "twitter",
}
const SignInProvider = {
  google: GoogleAuthProvider,
  facebook: FacebookAuthProvider,
  twitter: TwitterAuthProvider,
};

export const SIGN_IN_WITH_PROVIDER = (type: EProvider, cb: () => void) => {
  signInWithPopup(auth, new SignInProvider[type]())
    .then(async (result) => {
      const members = await GET_MEMBERS();
      const { user } = result;
      if (members) {
        const uidList = members.users.map((user: User) => user.uid);
        if (!uidList.includes(user.uid)) {
          const CreateUser = {
            displayName: user.displayName ?? "",
            email: user.email ?? "",
            uid: user.uid,
            admin: false,
            providerId: type,
            phoneNumber: "",
            address: "",
            zonecode: "",
          };
          SET_MEMBERS(CreateUser);
        }
      }
      cb();
    })
    .catch(console.error);
};

export const SIGN_IN_WITH_EMAIL_AND_PASSWORD = async (
  email: string,
  password: string,
  cb: () => void,
  errCb: () => void
) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // const user = userCredential.user;
      // console.log(user);
      cb();
    })
    .catch(() => {
      errCb();
    });
};

export const ON_AUTH_STATE_CHANGED = (cb: (user: IMembStateChange) => void) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      GET_MEMBERS().then((members) => {
        const Memberuser = members?.users.find(
          (muser: IMembStateChange) => muser.uid === user.uid
        );
        cb(Memberuser);
      });

      // ...
    } else {
      // User is signed out
      // ...
    }
  });
};

export const ON_SING_OUT = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("로그아웃");
      localStorage.setItem("isLogged", JSON.stringify(false));
    })
    .catch(console.error);
};

export const CREATE_USER_WITH_EMAIL_AND_PASSWORD = (
  membUser: IMembCreateEmail,
  cb: () => void
) => {
  createUserWithEmailAndPassword(auth, membUser.email, membUser.password)
    .then(async (result) => {
      const { user } = result;
      const members = await GET_MEMBERS();
      if (members) {
        const uidList = members.users.map((user: User) => user.uid);
        if (!uidList.includes(result.user.uid)) {
          const CreateUser = {
            displayName: membUser.displayName ?? "",
            email: membUser.email ?? "",
            uid: user.uid,
            admin: false,
            providerId: "emailAndPassword",
            phoneNumber: membUser.phoneNumber,
            address: membUser.address,
            zonecode: membUser.zonecode,
          };
          SET_MEMBERS(CreateUser).then(() => {
            cb();
          });
        }
      }
      // ...
    })
    .catch(console.error);
};
