import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './styles/main.css'
import Navbar from './components/Navbar';
import Connect from './pages/Connect';
import About from './pages/About';
import Home from './pages/Home';
import Footer from './components/Footer';
import Projects from './pages/Projects';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Connect' element={<Connect />} />
        <Route path='/About' element={<About />} />
        <Route path='/Projects' element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
