import MainLayout from "../layouts/MainLayout/MainLayout";
import {Outlet} from "react-router-dom";
import AuthPage from "../pages/AuthPage";

const routes = [
    {
        path: '/',
        children: [
            {
                path: '',
                element: (
                    <MainLayout>
                        <Outlet/>
                    </MainLayout>
                ),
                children: [
                    {
                        path: '',
                        element: <AuthPage/>
                    },
                    {
                        path: 'content',
                        element: <div>Content</div>
                    },
                    {
                        path: 'login',
                        element: <div>Login</div>
                    },
                ]
            }
        ]
    }
]

export default routes;