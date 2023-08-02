import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	const error = useRouteError();

	return (
		<div className='min-h-screen text-center flex items-center justify-center'>
			<div>
				<h1 className='font-black text-4xl mb-5'>Oops!</h1>
				<p className='mb-3'>Sorry, something went wrong</p>
				<p>{error.statusText ?? error.message}</p>
			</div>
		</div>
	)
}

export { ErrorPage };