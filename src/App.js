import Head from './components/head';
import Home from './pages/home';
import Aboutme from './pages/aboutme';
import Portfolio from './pages/portfolio';
import Contacts from './pages/contacts';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Head />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutme" element={<Aboutme/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contacts" element={<Contacts/>} />
      </Routes>
    </Router>
  );
}

export default App;
