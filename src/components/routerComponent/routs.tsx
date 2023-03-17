import { Navigate } from 'react-router-dom';
import { Big } from '../../pages/big';
import { Small } from '../../pages/small';

export const routs = [
	{
		path: '/',
		element: <Navigate to='/big' replace />,
	},
	{
		path: '/big',
		element: <Big />,
	},
	{
		path: '/small',
		element: <Small />,
	},
];
