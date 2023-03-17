import RouterComponent from './components/routerComponent';
import { ContextProvider } from './context/global-context';

function App() {
	return (
		<div>
			<ContextProvider>
				<RouterComponent />
			</ContextProvider>
		</div>
	);
}

export default App;
