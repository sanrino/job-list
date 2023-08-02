import React from 'react';

const Error = ({ value }) => {
	return (
		<div>
			<div className="error-message">{value}</div>
		</div>
	)
}

export { Error }
