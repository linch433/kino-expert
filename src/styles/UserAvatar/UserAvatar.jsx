import { useMemo } from 'react';
import { colorGenerator } from '../../app/features';

const UserAvatar = ({ userName }) => {
  const userNameFirstLetter = userName.charAt(0).toUpperCase();
  const bgColor = useMemo(() => `#${colorGenerator(userName)}`, [userName]);

  return (
    <div className='flex justify-center items-center w-12 h-12 rounded-3xl'
         style={{ backgroundColor: `${bgColor}` }}>{userNameFirstLetter}</div>
  );
};

export default UserAvatar;
