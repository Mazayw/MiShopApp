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
