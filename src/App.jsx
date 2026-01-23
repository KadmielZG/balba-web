import './App.css'
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import MainLayout from "./layouts/MainLayout";

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

  return (

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>

  )
}

export default App
