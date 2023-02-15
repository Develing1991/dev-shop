import { app } from "../firebase";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  User,
  // setPersistence,
  // browserLocalPersistence,
} from "firebase/auth";
import { GET_MEMBERS, SET_MEMBERS } from "../database/members";

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
      if (members) {
        const uidList = members.users.map((user: User) => user.uid);
        if (!uidList.includes(result.user.uid)) {
          SET_MEMBERS(result.user, result.providerId);
        }
      }
      cb();
    })
    .catch(console.error);
};

export const SIGN_IN_WITH_EMAIL_AND_PASSWORD = async (
  email: string,
  password: string
) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      console.error(error);
    });
};

interface MembUser extends User {
  admin: boolean;
}
export const ON_AUTH_STATE_CHANGED = (cb: (user: MembUser) => void) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      GET_MEMBERS().then((members) => {
        const Memberuser = members?.users.find(
          (muser: MembUser) => muser.uid === user.uid
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
    .catch((error) => {
      console.error(error);

      // An error happened.
    });
};
