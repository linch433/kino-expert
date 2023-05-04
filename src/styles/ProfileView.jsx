const ProfileView = ({ src }) => {
  const { image, devName, devInfo, livingPlace } = src;

  return (
    <div>
      <div className='flex flex-col justify-center items-center bg-int-gray-main rounded-xl'>
        <img src={image} alt={devName} className='object-cover rounded h-80 w-80 bg-int-white-main' />
        <div className='my-4 text-2xl'>{devName}</div>
        <div className='bg-int-white-secondary h-1 w-3/4 mb-2'></div>
        <div>{devInfo}</div>
        <div>{livingPlace}</div>
      </div>
    </div>
  );
};

export default ProfileView;
