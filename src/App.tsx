import AddItems from './components/addItems';
import { TabsComponent } from './components/tabsComponent';
import { ContextProvider } from './context/global-context';

function App() {
	return (
		<ContextProvider>
			<AddItems />
			<TabsComponent />
		</ContextProvider>
	);
}

export default App;

/**
 * <Header />
 * <Routes>
				{routs.map((el) => (
					<Route path={el.path} element={el.element} key={el.path} />
				))}
			</Routes>
 * 
 * 
 */
