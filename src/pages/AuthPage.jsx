import { useState } from 'react';
import LoginForm from '../components/Auth/AuthForm/LoginForm';
import RegistrationForm from '../components/Registration/RegistrationForm/RegistrationForm';

const AuthPage = () => {
  const [isLoginView, setIsLoginView] = useState('login');

  return (
    <div className='flex flex-col justify-center items-center text-int-white-main w-full'>
      <div className='w-5/6 md:w-[450px]'>
        <nav
          className='flex flex-row gap-5 self-center text-center justify-center bg-int-gray-secondary py-2 rounded-lg pb-3 w-full'>
          <h2
            onClick={() => setIsLoginView('login')}
            className={`cursor-pointer text-3xl ${
              isLoginView === 'login'
                ? 'text-int-white-main'
                : 'text-int-white-secondary'
            }`}
          >
            Sign In
          </h2>
          <h2
            onClick={() => setIsLoginView('register')}
            className={`cursor-pointer text-3xl ${
              isLoginView === 'register'
                ? 'text-int-white-main'
                : 'text-int-white-secondary'
            }`}
          >
            Sign Up
          </h2>
        </nav>
        {isLoginView === 'login' ? <LoginForm /> :
          <RegistrationForm isLoginView={isLoginView} setIsLoginView={setIsLoginView} />}
      </div>
    </div>
  );
};

export default AuthPage;
