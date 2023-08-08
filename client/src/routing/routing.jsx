import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import { ErrorPage } from "../pages/ErrorPage";
import { HomePage } from "../pages/HomePage";
import { JobEditPage } from '../pages/JobEditPage';

export const routing = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				element: <HomePage />,
				index: true
			},
			{
				path: 'job-edit/:id',
				element: <JobEditPage />,
			}
		]
	}
])