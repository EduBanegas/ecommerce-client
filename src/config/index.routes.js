// Dependencies
import { Suspense, lazy } from 'react'

const Loadable = Component => props => (
	<Suspense fallback={<h1>Loading...</h1>} >
		<Component {...props} />
	</Suspense>
)

// Views
const MainLayout = Loadable(lazy(() => import('../components/layouts/MainLayout/MainLayout')))
const Home = Loadable(lazy(() => import('../components/views/Home/Home')))

// Routes
const routes = [
	{
		path: '*',
		element: <MainLayout />,
		children: [
			{			
				path: '', 
				element: <Home/>
			}		
		]
	},
	{
		path: '*',
		element: <h1>404 - path not found</h1>
	}
];

export default routes;
