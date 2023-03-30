import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCPuXXug4Bk7vRcMx-zYKoy1Mo6rRq4Q8g',
  authDomain: 'cinemaexpert-eeab2.firebaseapp.com',
  projectId: 'cinemaexpert-eeab2',
  storageBucket: 'cinemaexpert-eeab2.appspot.com',
  messagingSenderId: '279391090164',
  appId: '1:279391090164:web:f7a1a779506947ea33b5a1',
  measurementId: 'G-WGDH4HQZ83',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

onAuthStateChanged(auth, user => {
  if (user) {
    localStorage.setItem('user', JSON.stringify(auth.currentUser));
  } else {
    localStorage.removeItem('user');
  }
});
