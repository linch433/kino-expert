import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../firebaseConfig';

export const fetchFilms = async (setIsLoading, setFilms) => {
  setIsLoading(true);
  await getDocs(collection(firestore, 'Films')).then((querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setFilms(newData);
  });
  setIsLoading(false);
};
