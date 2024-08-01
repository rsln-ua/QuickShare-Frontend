import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePageContainer } from './containers/HomePageContainer';
import { Layout } from './components/Layout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePageContainer />,
	},
]);

function App() {
	return (
		<Layout>
			<RouterProvider router={router} />
		</Layout>
	);
}

export default App;
