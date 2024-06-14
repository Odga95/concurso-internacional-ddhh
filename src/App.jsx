import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Layout from "./layout";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>


        <Route path='/home' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>


        <Route path='/concurso' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>


        <Route path='/concursos-anteriores' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
