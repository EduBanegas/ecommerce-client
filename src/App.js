import { useRoutes } from 'react-router-dom';
import routes from './config/index.routes';


function App() {
	const content = useRoutes(routes);

	return (
		<>
			{content}
		</>
	);
}


export default App;
