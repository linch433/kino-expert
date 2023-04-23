import React from 'react';
import UserAvatar from '../../styles/UserAvatar/UserAvatar';
import { StringServices } from '../../app/features';

const UserBar = ({ user, id }) => {

  const { displayName, email, favorite_genre } = user;

  if (user.displayName) {
    return (
      <div className='flex p-2 gap-4 items-center mb-4 bg-int-gray-secondary rounded-xl text-int-white-main'>
        <UserAvatar userName={`${displayName}-${id}`} />
        <div className='text-sm'>
          <div>Username: {displayName}</div>
          <div>Email: {email}</div>
          <div>Favorite genre: {(favorite_genre === '') ? '-' : StringServices.getCapitalizeWord(favorite_genre)}
          </div>
        </div>
      </div>
    );
  }
};

export default UserBar;
