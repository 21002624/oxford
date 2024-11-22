import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Pages/Header/Header';
import './App.css'
import Home from './Pages/Home/Home';
import Footer from './Pages/Footer/Footer';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import ParentLogin from './Pages/Login/ParentLogin';
import TeacherLogin from './Pages/Login/Teacherlogin';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/parentlogin" element={<ParentLogin />} />
        <Route path="/teacherlogin" element={<TeacherLogin />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
