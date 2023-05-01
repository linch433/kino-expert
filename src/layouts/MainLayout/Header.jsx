import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MenuLink from '../../styles/MenuLink';
import { CgMenu } from 'react-icons/cg';
import { authAPI } from '../../api/authApi';
import { useAuth } from '../../store/hooks/useAuth';
import { ReactComponent as ReactLogo } from '../../assets/logo.svg';
import LogOutButton from '../../styles/LogOutButton';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAuth, setAuth, profileData } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsModalOpen(!isModalOpen);
  };

  const logoutUser = async () => {
    await authAPI.logout();
    setAuth(false);
    navigate('/auth');
  };

  return (
    <>
      <div
        className='flex h-[60px] items-center justify-between bg-int-gray-main text-int-white-main px-5 md:px-10 text-lg'>
        <Link to={'/'}>
          <ReactLogo className='h-8 w-auto' />
        </Link>
        <div className='hidden lg:flex items-center'>
          {profileData?.displayName === 'admin' ? (
            <MenuLink linkPath='/adminPanel' text='Admin Panel' />
          ) : (
            <></>
          )}
          <MenuLink linkPath='/' text='Films' />
          <MenuLink linkPath='/about' text='About' />
          {isAuth && <MenuLink linkPath='/favourites' text='Favorites' />}

          {isAuth ? (
            <LogOutButton onClick={logoutUser} className='cursor-pointer'>
              Sign Out
            </LogOutButton>
          ) : (
            <MenuLink linkPath='/auth' text='Sign In' />
          )}
        </div>
        <div className='flex flex-col items-center lg:hidden'>
          <CgMenu
            className='cursor-pointer w-auto h-6'
            onClick={toggleMenu}
            color='white'
          />
        </div>
      </div>

      {isModalOpen && (
        <div
          className='flex flex-col px-5 bg-int-gray-main text-int-white-main text-lg py-3 z-1 gap-3 border-2 lg:hidden'>
          {profileData?.displayName === 'admin' && (
            <MenuLink linkPath='/adminPanel' text='Admin Panel' />
          )}
          <MenuLink linkPath='/' text='Films' />
          <MenuLink linkPath='/about' text='About' />
          {isAuth && <MenuLink linkPath='/favourites' text='Favorites' />}
          {isAuth ? (
            <LogOutButton onClick={logoutUser} className='cursor-pointer'>
              Sign Out
            </LogOutButton>
          ) : (
            <MenuLink linkPath='/auth' text='Sign In' />
          )}
        </div>
      )}
    </>
  );
};

export default Header;
