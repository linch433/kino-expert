import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@firebase/auth';
import { auth, firestore } from '../firebaseConfig';
import { doc, setDoc } from '@firebase/firestore';

export const authAPI = {
  async signUpWithEmail(email, password) {
    const createdUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const userForFirestore = {
      id: createdUser.user.uid,
      email: createdUser.user.email,
    };

    await setDoc(doc(firestore, 'Users', createdUser.user.uid), {
      ...userForFirestore,
    });

    return createdUser;
  },

  async loginWithEmail(email, password) {
    const loggedUser = await signInWithEmailAndPassword(auth, email, password);
    return loggedUser;
  },

  async logout() {
    return signOut(auth);
  },
};
