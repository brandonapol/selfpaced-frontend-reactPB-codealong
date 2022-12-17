// This component will be used for router level logic

// import pages
import Home from "./pages/Home"
import About from "./pages/About"
import Dashboard from "./pages/Dashboard"

// import components
import Navbar from "./components/Navbar"

// import dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from "./redux/store"

function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Provider store={ store }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App
