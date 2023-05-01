import React, { useEffect, useState } from 'react';
import { useFilms } from '../store/hooks/useFilms';
import { PagePreLoader } from '../styles/PreLoader/PreLoader';
import ContentCard from '../components/Content/ContentCard/ContentCard';
import { findMostFrequent } from '../components/util/findMostFrequent';
import { fetchFilms } from '../components/util/fetchFilms';
import { useAuth } from '../store/hooks/useAuth';

const FavouritesPage = () => {
  const { films, setFilms } = useFilms();
  const { profileData } = useAuth();

  const [favouritesFilms, setFavouritesFilms] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!films || films?.length === 0) {
      fetchFilms(setIsLoading, setFilms);
    }
  }, [films, setFilms]);

  useEffect(() => {
    const visitedGenres =
      JSON.parse(localStorage.getItem('visitedGenres')) || [];

    const favouriteGenre =
      visitedGenres?.length > 0
        ? findMostFrequent(visitedGenres)
        : profileData?.favorite_genre;

    const favouritesFilms = films.filter((f) => {
      return f?.genre === favouriteGenre;
    });

    setFavouritesFilms(favouritesFilms);
  }, [films, profileData?.favorite_genre]);

  if (isLoading) return <PagePreLoader />;

  return (
    <div
      className={`grid grid-cols-1 place-items-center ${
        films?.length < 2
          ? ''
          : 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'
      }`}
    >
      {favouritesFilms?.map((film) => (
        <ContentCard key={film.id} film={film} />
      ))}
    </div>
  );
};

export default FavouritesPage;
