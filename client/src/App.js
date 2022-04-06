import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../src/components/header/Header'
import Home from './pages/home/Home'
import About from './pages/about/About'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <>
    <Routes>
      <Route path="/" element={<Home  />} exact/>
      <Route path="/about" element={<About />} />
     </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;
