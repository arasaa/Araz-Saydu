import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../src/components/header/Header'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Projects from './pages/projects/Projects';
import Gallery from './pages/gallery/Gallery';
import Example from './components/test/Example';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <>
    <Routes>
      <Route path="/" element={<Home  />} exact/>
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/example" element={<Example />} />
     </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;
