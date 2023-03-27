import { StringServices } from '../../../app/features';
import { Link } from 'react-router-dom';
import FilmReviewForm from './FilmReviewForm';
import { useState } from 'react';
import { useAuth } from '../../../store/hooks/useAuth';

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
    trailer_url,
  )}`;
  const videoDetails = [
    { label: 'Duration:', value: `${duration} minutes` },
    { label: 'Published at:', value: `${published_at} y.` },
    { label: 'Rating:', value: rating },
    { label: 'Allowed age:', value: allowed_age },
    { label: 'Genre:', value: StringServices.getCapitalizeWord(genre) },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAuth } = useAuth();

  const toggleModalOpen = () => {
    setIsModalOpen(true);
    document.body.classList.add('overflow-hidden');
  };

  const toggleModalClose = () => {
    setIsModalOpen(false);
    document.body.classList.remove('overflow-hidden');
  };

  return (
    <div
      className='relative py-10 mx-5 flex flex-wrap items-center bg-int-gray-secondary text-int-white-main rounded-lg mb-5'>
      <div className='w-full md:w-[45%] lg:w-[38%] ml-auto mr-auto px-2'>
        <img
          src={image_url}
          alt='poster'
          className='max-w-full rounded-lg shadow-lg'
        />
      </div>
      <div className='w-full md:w-6/12 ml-auto mr-auto px-2 sm:mt-2'>
        <div className='md:pr-12'>
          <div className='pt-3 text-3xl font-semibold'>{name}</div>
          <div className='mt-4 text-lg leading-relaxed'>{description}</div>

          {videoDetails.map((detail, index) => (
            <div key={index} className='mt-2 text-lg leading-relaxed'>
              <span className='font-semibold'>{detail.label} </span>
              {detail.value}
            </div>
          ))}

          <div
            className={`mt-2 text-lg flex flex-col leading-relaxed justify-center items-center rounded-lg py-3 bg-int-gray-main hover:bg-input font-semibold cursor-pointer
            ${isAuth ? '' : 'hidden'}`}
            onClick={toggleModalOpen}
          >
            Add review
          </div>

          {isModalOpen && <FilmReviewForm toggleModal={toggleModalClose} />}
          <Link
            to={trailer_url}
            className='mt-2 text-lg flex flex-col leading-relaxed justify-center items-center rounded-lg py-3 bg-int-gray-main hover:bg-input font-semibold lg:hidden'
            target='_blank'
          >
            Watch trailer
          </Link>
          <div className='mt-2 items-center hidden justify-center w-full lg:flex lg:h-[29.5rem]'>
            <iframe
              src={embedUrl}
              className='w-full h-full'
              title='Trailer'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
