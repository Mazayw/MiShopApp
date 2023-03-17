import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from 'react-router-dom';
import { Big } from '../../pages/big';
import { Small } from '../../pages/small';

function Router() {
	const router = createBrowserRouter([
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
	]);

	return <RouterProvider router={router} />;
}

export default Router;
