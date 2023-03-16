import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex h-[60px] items-center bg-int-gray-main text-int-white-main px-[60px]">
      <Link to={'/login'} className="mr-[36px]">
        Login
      </Link>
      <Link to={'/content'} className="mr-[36px]">
        Content
      </Link>
    </div>
  );
};

export default Header;
