import { Routes, Route } from 'react-router-dom';
import AddItems from './components/addItems';
import { Header } from './components/header';
import { routs } from './components/routerComponent/routs';
import { ContextProvider } from './context/global-context';

function App() {
	return (
		<ContextProvider>
			<Header />
			<AddItems />
			<Routes>
				{routs.map((el) => (
					<Route path={el.path} element={el.element} key={el.path} />
				))}
			</Routes>
		</ContextProvider>
	);
}

export default App;
