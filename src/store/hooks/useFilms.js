import { useDispatch, useSelector } from 'react-redux';
import { setFilms } from '../slices/filmsSlice';

export const useFilms = () => {
  const dispatch = useDispatch();

  const _films = useSelector((state) => state.films.films);

  const _setFilms = (films) => {
    dispatch(setFilms(films));
  };

  return {
    films: _films,
    setFilms: _setFilms,
  };
};
