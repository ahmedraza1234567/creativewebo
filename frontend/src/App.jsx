import { BrowserRouter, Routes, Route } from "react-router-dom"
import ListPage from "./pages/ShowData"
import AddPage from "./pages/AddData"
import EditPage from "./pages/EditData"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/edit/:id" element={<EditPage/>}/>
        <Route path="/" element={<ListPage/>}/>
        <Route path="/add" element={<AddPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App