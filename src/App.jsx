
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Questions from './pages/Questions';
import Home from './pages/Home';
import Leelas from './pages/Leelas';
import BGQuotes from './pages/BGQuotes';
import Childhood from './pages/Childhood';
import HisNames from './pages/HisNames';
import Slider from './Components/Slider/Slider'

function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leela" element={<Leelas />} />
        <Route path="/BGquotes" element={<BGQuotes />} />
        <Route path="/childhood" element={<Childhood />} />
        <Route path="/Hisnames" element={<HisNames />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </Router>
    <Childhood/>
    <Slider/>
    <Leelas/>
    <BGQuotes/>
    <HisNames/>
    <Questions/>

    </>
  );
}

export default App;
