import React from 'react';

const FilmReviews = ({ currentFilm }) => {
  const expertReviews = currentFilm.filter((item) => item.user_name === 'admin');
  const userReviews = currentFilm.filter((item) => item.user_name !== 'admin');

  return (
    <>
      <div className={`mb-4 ${expertReviews.length === 0 ? 'hidden' : ''}`}>
        <h2 className='text-2xl font-bold mb-2 px-5'>Expert Reviews:</h2>
        {expertReviews.reverse().map((item, id) => (
          <div
            key={id}
            className='flex flex-row-reverse justify-between max-w-full bg-int-gray-secondary text-int-white-main rounded-lg mx-5 p-4 mb-4'
          >
            <div>Rating: {item.rating}</div>
            <div>{item.film_review}</div>
          </div>
        ))}
      </div>
      <div className={`mb-4 ${userReviews.length === 0 ? 'hidden' : ''}`}>
        <h2 className='text-2xl font-bold mb-2 px-5'>User Reviews:</h2>
        {userReviews.reverse().map((item, id) => (
          <div
            key={id}
            className='flex flex-col max-w-full bg-int-gray-secondary text-int-white-main rounded-lg mx-5 p-4 mb-4'
          >
            <div>{item.user_name}</div>
            <div className='absolute right-9'>Rating: {item.rating}</div>
            <div className='pt-4'>{item.film_review}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FilmReviews;
