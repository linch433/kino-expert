import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuLink from '../../styles/MenuLink';
import { CgMenu } from 'react-icons/cg';
import { useAuth } from '../../store/hooks/useAuth';
import { authAPI } from '../../api/authApi';


const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isAuth = JSON.parse(localStorage.getItem('user'));
  // const { setAuth, authData } = useAuth();

  console.log('Locale storage content: ', JSON.parse(localStorage.getItem('user')));
  
  const toggleMenu = () => {
    setIsModalOpen(!isModalOpen);
  };

  const user = JSON.parse(localStorage.getItem('user'));

  const userLogout = () => {
    authAPI.logout().then(() => console.log('Locale storage: ', JSON.parse(localStorage.getItem('user'))));
  };

  return (
    <>
      <div className='flex h-[60px] items-center justify-between bg-int-gray-main text-int-white-main px-10 text-lg'>
        <Link to={'/'}>Logo</Link>
        <div className='hidden md:flex items-center'>
          <MenuLink linkPath='/content' text='Content' />
          <MenuLink linkPath='/about' text='About' />
          <div onClick={userLogout} className='mr-[36px]'>Sign Out</div>
          <MenuLink linkPath='/auth' text='Sign In' />
        </div>
        <div className='flex flex-col items-center md:hidden'>
          <CgMenu className='cursor-pointer w-auto h-6' onClick={toggleMenu} color='white' />
        </div>
      </div>

      {isModalOpen && (
        <div className='flex flex-col items-end bg-int-gray-main text-int-white-main text-lg py-3 z-1 gap-3 md:hidden'>
          <MenuLink linkPath='/content' text='Content' />
          <MenuLink linkPath='/about' text='About' />
          <MenuLink linkPath='/auth' text='Sign In' />
        </div>
      )}
    </>
  );
};

export default Header;
