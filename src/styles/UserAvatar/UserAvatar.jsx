import { useMemo } from 'react';
import { colorGenerator } from '../../app/features';

const UserAvatar = ({ userName }) => {
  const userNameFirstLetter = userName.charAt(0).toUpperCase();
  const bgColor = useMemo(() => colorGenerator(userName), [userName]);

  const styleObj = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '3rem',
    height: '3rem',
    borderRadius: '1.5rem',
    backgroundColor: `#${bgColor}`,
  };

  return (
    <div style={styleObj}>{userNameFirstLetter}</div>
  );
};

export default UserAvatar;
