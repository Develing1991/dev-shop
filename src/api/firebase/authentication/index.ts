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

// export const SIGN_IN_WITH_PROVIDER = (type: EProvider) => {
//   setPersistence(auth, browserLocalPersistence)
//     .then(async () => {
//       return await signInWithPopup(auth, new SignInProvider[type]());
//     })
//     .then((result) => {
//       const credential = SignInProvider[type].credentialFromResult(result);
//       console.log(result);
//     })
//     .catch(console.error);
// };
export const SIGN_IN_WITH_PROVIDER = (type: EProvider, cb: () => void) => {
  signInWithPopup(auth, new SignInProvider[type]())
    .then((result) => {
      const credential = SignInProvider[type].credentialFromResult(result);
      console.log(result);
      console.log(credential);
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

export const ON_AUTH_STATE_CHANGED = (cb: (user: User | null) => void) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // const uid = user.uid;
      // console.log(user);
      cb(user);
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
