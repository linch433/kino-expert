import React from 'react';

const FilmReviews = ({ currentFilm }) => {
  return (
    <>
      {currentFilm.map((item, id) => (
        <div
          key={id}
          className="flex flex-col max-w-full bg-int-gray-secondary text-int-white-main rounded-lg mx-5 p-4 mb-4"
        >
          <div>{item.user_name}</div>
          <div className="absolute right-9">Rating: {item.rating}</div>
          <div className="pt-4">{item.film_review}</div>
        </div>
      ))}
    </>
  );
};

export default FilmReviews;
