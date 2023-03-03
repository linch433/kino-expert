import React from "react";
import AuthForm from "../components/Auth/AuthForm/AuthForm";
import AuthButtons from "../components/Auth/AuthButtons/AuthButtons";

const AuthPage = () => {
    return <div className='text-int-white-main flex flex-col items-center justify-center min-h-[calc(100vh-75px)]'>
        <AuthForm/>
        <AuthButtons/>
    </div>;
};

export default AuthPage;
