import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from 'react-router-dom';

function RouterComponent() {
	const router = createBrowserRouter([
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
	]);

	return <RouterProvider router={router} />;
}

export default RouterComponent;
