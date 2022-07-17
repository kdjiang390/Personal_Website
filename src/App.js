import Head from './components/head';
import Home from './pages/home';
import Aboutme from './pages/aboutme';
import Portfolio from './pages/portfolio';
import Contacts from './pages/contacts';
import './App.css';

import { HashRouter as Router, Route, Routes } from "react-router-dom";
// BrowserRouter works everywhere EXCEPT github page, hence switched over to HashRouter.
// BrowserRouter use basename and Hashrouter use base.

function App() {
  return (
    <Router base='kdjiang390.github.io/personal_website'>
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
