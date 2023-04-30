import { useLocation } from 'react-router-dom';
import FilmCard from '../components/Content/FilmPage/FilmCard';
import FilmReviews from '../components/Content/FilmPage/FilmReviews';
import { useEffect } from 'react';

const FilmPage = () => {
  const locationState = useLocation().state;
  const { currentFilm } = locationState;

  useEffect(() => {
    const currentVisitedGenred =
      JSON.parse(localStorage.getItem('visitedGenres')) || [];

    localStorage.setItem(
      'visitedGenres',
      JSON.stringify([...currentVisitedGenred, currentFilm?.genre])
    );
  }, []);

  return (
    <>
      <FilmCard currentFilm={currentFilm} />
      <FilmReviews currentFilm={currentFilm?.reviews} />
    </>
  );
};

export default FilmPage;
