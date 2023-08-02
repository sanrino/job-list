import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import { AboutPage } from "../pages/AboutPage";
import { ErrorPage } from "../pages/ErrorPage";
import { HomePage } from "../pages/HomePage";
import { PostPage } from '../pages/PostPage';

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
				path: 'about',
				element: <AboutPage />
			},
			{
				path: 'post/:id',
				element: <PostPage />
			}
		]
	}
])