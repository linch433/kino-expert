import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuLink from '../../styles/MenuLink';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="flex h-[60px] items-center justify-between bg-int-gray-main text-int-white-main px-10 text-lg">
        <Link to={'/'}>Logo</Link>
        <div className="hidden md:flex items-center">
          <MenuLink linkPath="/content" text="Content" />
          <MenuLink linkPath="/about" text="About" />
          <MenuLink linkPath="/auth" text="Sign In" />
        </div>
        <div className="flex flex-col items-center md:hidden">
          <button onClick={toggleMenu}>
            <span className="text-int-white-main block h-0.5 w-6 mb-1.5 bg-current"></span>
            <span className="text-int-white-main block h-0.5 w-6 mb-1.5 bg-current"></span>
            <span className="text-int-white-main block h-0.5 w-6 bg-current"></span>
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="flex flex-col items-end bg-int-gray-main text-int-white-main text-lg py-3 z-1 gap-3 md:hidden">
          <MenuLink linkPath="/content" text="Content" />
          <MenuLink linkPath="/about" text="About" />
          <MenuLink linkPath="/auth" text="Sign In" />
        </div>
      )}
    </>
  );
};

export default Header;
