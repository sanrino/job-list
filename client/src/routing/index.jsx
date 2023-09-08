import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Login } from '../components/Login/Login';
import { Protected } from '../components/Protected';
import { Register } from '../components/Register/Register';
import { UnAuthenticated } from '../components/UnAuthenticated';
import About from '../pages/About';
import { ErrorPage } from "../pages/ErrorPage";
import { HomePage } from "../pages/HomePage";
import { JobEditPage } from '../pages/JobEditPage';
import { ProfilePage } from '../pages/ProfilePage';
import { ABOUT_ROUTE, EDIT_JOB_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

export const routing = createBrowserRouter([
	{
		path: HOME_ROUTE,
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				element: (
					<HomePage />
				),
				index: true
			},
			{
				path: PROFILE_ROUTE,
				element: (
					<Protected>
						<ProfilePage />
					</Protected>
				),
			},
			{
				path: EDIT_JOB_ROUTE,
				element: (
					<Protected>
						<JobEditPage />
					</Protected>),
			},
			{
				path: REGISTRATION_ROUTE,
				element: (
					<UnAuthenticated>
						<Register />
					</UnAuthenticated>
				),
			},
			{
				path: LOGIN_ROUTE,
				element: (
					<UnAuthenticated>
						<Login />
					</UnAuthenticated>
				),
			},

			{
				path: ABOUT_ROUTE,
				element: <About />,
			}
		]
	}
]);