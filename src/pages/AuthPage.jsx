import { useState } from 'react';
import LoginForm from '../components/Auth/AuthForm/LoginForm';
import RegistrationForm from '../components/Registration/RegistrationForm/RegistrationForm';

const AuthPage = () => {
  const [isLoginView, setIsLoginView] = useState('login');

  return (
    <div className="text-int-white-main w-[450px] m-auto">
      <nav className="flex flex-row gap-5 self-center justify-center bg-int-gray-secondary py-2 rounded-lg pb-3">
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
      {isLoginView === 'login' ? <LoginForm /> : <RegistrationForm />}
    </div>
  );
};

export default AuthPage;
