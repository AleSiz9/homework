import { BrowserRouter } from "react-router-dom"
import AppRouters from "./providers/router/AppRouters"
import { ThemeProvider } from "@/shared/lib/theme/ThemeProvider"
import { Provider } from "react-redux"
import { store } from "./providers/store/store"

function App() {

	return (
		<BrowserRouter>
			<ThemeProvider>
				<Provider store={store}>
				<AppRouters />
				</Provider>
			</ThemeProvider>
		</BrowserRouter>
	)
}

export default App
