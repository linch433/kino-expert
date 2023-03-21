import { StringServices } from '../../../app/features/services/StringServices';
import { Link } from 'react-router-dom';

const FilmCard = ({ currentFilm }) => {
  const {
    image_url,
    name,
    description,
    duration,
    published_at,
    rating,
    allowed_age,
    genre,
    trailer_url,
  } = currentFilm;
  const embedUrl = `https://www.youtube.com/embed/${StringServices.getEmbedString(
    trailer_url
  )}`;

  return (
    <div className="relative py-10 mx-5 flex flex-wrap items-center bg-int-gray-secondary text-int-white-main rounded-lg mb-5">
      <div className="w-full md:w-[45%] lg:w-[38%] ml-auto mr-auto px-2">
        <img
          src={image_url}
          alt="poster"
          className="max-w-full rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-6/12 ml-auto mr-auto px-2 sm:mt-2">
        <div className="md:pr-12">
          <div className="pt-3 text-3xl font-semibold">{name}</div>
          <div className="mt-4 text-lg leading-relaxed">{description}</div>
          <div className="mt-2 text-lg leading-relaxed">
            <span className="font-semibold">Duration: </span>
            {duration} minutes
          </div>
          <div className="mt-2 text-lg leading-relaxed">
            <span className="font-semibold">Published at: </span>
            {published_at} y.
          </div>
          <div className="mt-2 text-lg leading-relaxed">
            <span className="font-semibold">Rating: </span>
            {rating}
          </div>
          <div className="mt-2 text-lg leading-relaxed">
            <span className="font-semibold">Allowed age: </span>
            {allowed_age}
          </div>
          <div className="mt-2 text-lg leading-relaxed">
            <span className="font-semibold">Genre: </span>
            {StringServices.getCapitalizeWord(genre)}
          </div>
          <Link
            to={trailer_url}
            className="mt-2 text-lg flex flex-col leading-relaxed justify-center items-center rounded-lg py-3 bg-int-gray-main hover:bg-input font-semibold lg:hidden"
            target="_blank"
          >
            Watch trailer
          </Link>
          <div className="mt-2 items-center hidden justify-center w-full lg:flex lg:h-[29.5rem]">
            <iframe
              src={embedUrl}
              className="w-full h-full"
              title="Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
