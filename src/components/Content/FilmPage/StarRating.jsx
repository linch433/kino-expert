import { useField } from 'formik';
import { AiFillStar } from 'react-icons/ai';

const StarRating = ({ name, labelName }) => {
  const [field, meta, helpers] = useField(name);
  const starRating = [1, 2, 3, 4, 5];

  const handleClick = (newValue) => {
    helpers.setValue(newValue);
  };

  return (
    <div className='flex flex-col px-1'>
      <label className='text-[18px] leading-6 text-int-white-main pb-2'>{labelName}</label>
      <div className='flex items-center'>
        {starRating.map((i) => (
          <AiFillStar
            key={i}
            className={`h-6 w-6 ${
              i <= meta.value ? 'text-yellow-400 fill-current' : 'text-gray-400'
            }`}
            onClick={() => handleClick(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default StarRating;
