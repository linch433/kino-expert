import { AiFillStar } from 'react-icons/ai';

const StarsOnReviewBlock = ({ rating }) => {
  const stars = Array(5)
    .fill()
    .map((_, i) => (
      <AiFillStar key={i} className={`h-6 w-6 ${i < rating ? 'text-yellow-400' : 'text-gray-400'}`} />
    ));

  return (
    <div className='flex flex-row items-center'>
      {stars}
    </div>
  );
};

export default StarsOnReviewBlock;
