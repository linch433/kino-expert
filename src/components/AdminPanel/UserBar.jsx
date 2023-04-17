import React from 'react';
import UserAvatar from '../../styles/UserAvatar/UserAvatar';

const UserBar = ({ username, id }) => {

  if (username) {
    return (
      <div className='flex items-center gap-2 my-6'>
        <UserAvatar userName={`${username}-${id}`} />
        <span>{username}</span>
      </div>
    );
  }
};

export default UserBar;
