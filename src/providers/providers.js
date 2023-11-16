import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";

export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, provider);
    const { accessToken } = GoogleAuthProvider.credentialFromResult(result);


    if (result) {
      const { displayName, email, uid, photoURL } = result.user;
      return { ok:true, displayName, email, uid, photoURL, token: accessToken };
    }
  } catch (error) {
    console.log(error);
    return false;
  }

  return false;
};
