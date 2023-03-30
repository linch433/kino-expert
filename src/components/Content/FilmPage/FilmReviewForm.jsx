import { useState, useEffect } from 'react';
import { Form, Formik } from 'formik';
import { CustomField } from '../../../styles/CustomField';
import { useLocation } from 'react-router-dom';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { auth, firestore } from '../../../firebaseConfig';
import { onAuthStateChanged } from '@firebase/auth';
import StarRating from './StarRating';

const FilmReviewForm = (props) => {
  const { toggleModal } = props;
  const [userState, setUserState] = useState(null);
  const location = useLocation().state.currentFilm;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDocRef = doc(firestore, 'Users', user.uid);
        const userDocSnapshot = await getDoc(userDocRef);
        setUserState(userDocSnapshot.data());
      } else {
        setUserState(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className='fixed z-10 inset-0 overflow-hidden backdrop-brightness-[0.4]'>
      <Formik
        initialValues={{
          filmReviewField: '',
          filmRating: 0,
        }}
        onSubmit={values => {
          const newReview = {
            user_name: userState?.displayName,
            film_review: values.filmReviewField,
            rating: values.filmRating,
          };
          const docRef = doc(firestore, 'Films', location.id);

          updateDoc(docRef, {
            reviews: [...location.reviews, newReview],
          }).then(() => {
            console.log('New review added successfully');
            toggleModal();
          }).catch((error) => {
            console.error('Error adding new review: ', error);
          });
        }}
      >
        <div className='flex justify-center items-center min-h-screen'>
          <Form className='flex flex-col justify-center items-center text-int-white-main'>
            <div
              className='bg-int-gray-secondary rounded-lg shadow-lg max-w-[20rem] sm:w-[28rem] sm:max-w-none'>
              <div className='px-4 py-5 sm:pt-6'>
                <div className='text-2xl font-medium leading-6 text-int-white-main mb-4'>
                  Add review
                </div>
                <div className='mt-2'>
                  <CustomField
                    name='filmReviewField'
                    placeholder='Write your review here'
                    text='Review'
                    type='textarea'
                    rows={5}
                  />
                </div>
                <div className='mt-2'>
                  <Form>
                    <StarRating name='filmRating' labelName='Your rating' />
                  </Form>
                </div>
              </div>
              <div
                className='flex flex-col-reverse px-4 pb-3 sm:px-4 sm:flex sm:flex-row-reverse sm:justify-start'>
                <button
                  type='button'
                  className='inline-flex justify-center mt-2 w-full px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm sm:mt-0'
                  onClick={toggleModal}
                >
                  Close
                </button>
                <button
                  type='submit'
                  className='inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm'
                >
                  Confirm
                </button>
              </div>
            </div>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default FilmReviewForm;


