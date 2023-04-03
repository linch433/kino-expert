import React from 'react';
import StarsOnReviewBlock from '../../../styles/StarsOnReviewBlock';
import UserAvatar from '../../../styles/UserAvatar/UserAvatar';

const FilmReviews = ({ currentFilm }) => {
  const expertReviews = currentFilm.filter((item) => item.user_name === 'admin');
  const userReviews = currentFilm.filter((item) => item.user_name !== 'admin');

  return (
    <>
      <div className='flex flex-col items-center w-full'>
        <div
          className={`mb-4 w-full md:w-4/6 ${expertReviews.length === 0 ? 'hidden' : ''}`}>
          <h2 className='text-2xl font-bold mb-2 px-5 text-int-white-main'>Expert Reviews:</h2>
          {expertReviews.reverse().map((item, id) => (
            <div
              key={id}
              className='flex flex-row-reverse justify-between bg-int-gray-secondary text-int-white-main rounded-lg mx-5 p-4 mb-4'
            >
              <StarsOnReviewBlock rating={item.rating} />
              <div>{item.film_review}</div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col items-center w-full'>
        <div className={`mb-4 w-full md:w-4/6 ${userReviews.length === 0 ? 'hidden' : ''}`}>
          <h2 className='text-2xl font-bold mb-2 px-5 text-int-white-main'>User Reviews:</h2>
          {userReviews.reverse().map((item, id) => (
            <div
              key={id}
              className='flex flex-col max-w-full bg-int-gray-secondary text-int-white-main rounded-lg mx-5 p-2 mb-4'
            >
              <div className='flex flex-row items-start justify-center'>
                <div className='w-auto mr-3'>
                  <UserAvatar userName={`${item.user_name}-${id}`} />
                </div>
                <div className='w-full'>
                  <div className='flex flex-row justify-between'>
                    <div className='font-medium'>{item.user_name}</div>
                    <StarsOnReviewBlock rating={item.rating} />
                  </div>
                  <div>{item.film_review}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FilmReviews;
