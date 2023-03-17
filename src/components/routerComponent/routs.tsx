import { Navigate } from 'react-router-dom';

export const routs = [
	{
		path: '/',
		element: <Navigate to='/big' replace />,
	},
	{
		path: '/big',
		element: '',
	},
	{
		path: '/small',
		element: '',
	},
];
