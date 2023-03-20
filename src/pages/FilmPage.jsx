import { useLocation } from 'react-router-dom';
import FilmCard from '../components/Content/FilmPage/FilmCard';
import FilmReviews from '../components/Content/FilmPage/FilmReviews';

const FilmPage = () => {
  const locationState = useLocation().state;
  const { currentFilm } = locationState;
  console.log(currentFilm.reviews);

  return (
    <>
      <FilmCard currentFilm={currentFilm} />
      <FilmReviews currentFilm={currentFilm?.reviews} />
    </>
  );
};

export default FilmPage;
