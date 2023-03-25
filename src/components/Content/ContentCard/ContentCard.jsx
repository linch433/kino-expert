import { useNavigate } from 'react-router-dom';
import { StringServices } from '../../../app/features/services/StringServices';
import ReviewCardButton from '../../../styles/ReviewCardButton';

const ContentCard = ({ film }) => {
  const { image_url, name, description, genre, rating, allowed_age } = film;
  const navigate = useNavigate();
  const navigateCard = () => {
    navigate(`/content/${film.id}`, { state: { currentFilm: film } });
  };

  return (
    <div className="flex flex-col max-w-[20rem] h-[38rem] items-start rounded-lg overflow-hidden shadow-lg bg-int-gray-secondary text-int-white-main mb-10">
      <img
        src={image_url}
        alt="poster"
        className="w-full object-cover object-top rounded-lg h-[15rem]"
      />
      <div className="px-6 py-4">
        <p className="text-lg font-semibold overflow-hidden flex items-start h-[3.2rem]">
          {name}
        </p>
        <p className="text-sm overflow-hidden py-2 h-[12rem]">{description}</p>
      </div>
      <div className="px-6 pb-1 overflow-hidden">
        <span className="inline-block bg-int-white-secondary rounded-full px-3 py-1 text-sm font-semibold text-int-gray-main mr-2 mb-1">
          {StringServices.getCapitalizeWord(genre)}
        </span>
        <span className="inline-block bg-int-white-secondary rounded-full px-3 py-1 text-sm font-semibold text-int-gray-main mr-2 mb-1">
          Rating: {rating}
        </span>
        <span className="inline-block bg-int-white-secondary rounded-full px-3 py-1 text-sm font-semibold text-int-gray-main mr-2 mb-1">
          {allowed_age}
        </span>
      </div>
      <div className="flex w-full justify-center items-end mt-[0.5rem]">
        <ReviewCardButton type="button" onClick={navigateCard}>
          Review
        </ReviewCardButton>
      </div>
    </div>
  );
};

export default ContentCard;
