import { useEffect, useMemo, useState } from 'react';
import { PagePreLoader } from '../styles/PreLoader/PreLoader';

import ContentSearchRadioButton from '../styles/ContentSearchRadioButton';
import ContentSearchBar from '../styles/ContentSearchBar';
import ContentCard from '../components/Content/ContentCard/ContentCard';
import { useFilms } from '../store/hooks/useFilms';
import { fetchFilms } from '../components/util/fetchFilms';

const ContentPage = () => {
  const { films, setFilms } = useFilms();

  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('name');

  useEffect(() => {
    fetchFilms(setIsLoading, setFilms);
  }, []);

  const filteredFilms = useMemo(() => {
    return films?.filter((film) => {
      if (filterOption === 'name') {
        return film.name.toLowerCase().includes(searchQuery.toLowerCase());
      } else if (filterOption === 'genre') {
        return film.genre.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return true;
    });
  }, [searchQuery, films, filterOption]);

  if (isLoading) return <PagePreLoader />;

  return (
    <>
      <div className="flex items-center flex-col justify-center gap-1 md:flex-row md:gap-3">
        <ContentSearchBar
          type="search"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex justify-center mb-6">
          <div className="mr-4">
            <ContentSearchRadioButton
              type="radio"
              value="name"
              checked={filterOption === 'name'}
              onChange={() => setFilterOption('name')}
            >
              Name
            </ContentSearchRadioButton>
          </div>
          <ContentSearchRadioButton
            type="radio"
            value="genre"
            checked={filterOption === 'genre'}
            onChange={() => setFilterOption('genre')}
            className="ml-3"
          >
            Genre
          </ContentSearchRadioButton>
        </div>
      </div>
      <div
        className={`grid grid-cols-1 place-items-center ${
          films?.length < 2
            ? ''
            : 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'
        }`}
      >
        {filteredFilms?.map((film) => (
          <ContentCard key={film.id} film={film} />
        ))}
      </div>
    </>
  );
};

export default ContentPage;
