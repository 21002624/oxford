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
import CustomizedSwitches  from '../src/Components/DarkMode/DarkMode';
import Academics from './Pages/Academics/Academics';
import Facilities from './Pages/Facilities/Facilities';
import Admission from './Pages/Admission/Admission'; 
import {data} from '../src/Components/Data/Data';
import Gallery from './Pages/Gallery/Gallery';
import Enquire from './Components/Enquire/Enquire';

function App() {
  const [selectedOption, setSelectedOption] = useState('Matric');

  return (
    <Router> 
      <Enquire />
      <Header selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      <Routes>
        <Route path="/" element={<Home selectedOption={selectedOption} data={data[selectedOption]} />} /> 
        <Route path="/about" element={<About selectedOption={selectedOption} data={data} />} />
        <Route path="/parentlogin" element={<ParentLogin />} />
        <Route path="/teacherlogin" element={<TeacherLogin />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/admission" element={<Admission />} /> 
        <Route path="/academics" element={<Academics />} />
        <Route path="/faclities" element={<Facilities/>} />
        <Route path="/gallery" element={<Gallery />} /> 
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
