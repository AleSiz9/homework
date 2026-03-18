import { BrowserRouter } from "react-router-dom"
import AppRouters from "./providers/router/AppRouters"
import { ThemeProvider } from "@/shared/lib/theme/ThemeProvider"

function App() {

	return (
		<BrowserRouter>
			<ThemeProvider>
				<AppRouters />
			</ThemeProvider>
		</BrowserRouter>
	)
}

export default App
