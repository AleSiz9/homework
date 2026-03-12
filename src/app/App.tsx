import { MainPage } from "@/pages/MainPage"
import MainLayout from "@/shared/layouts/MainLayout/MainLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./providers/ThemeProvider"

function App() {

  return (
<BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path='/'element={<MainLayout />}>
            <Route index element={<MainPage />}/>
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
