import React from 'react'
import ImgSlider from '../../Components/ImgSlider/ImgSlider'
import Notice from '../../Components/Notice/Notice'
import './Home.css';
import Card from '../../Components/Card/Card';
import Logins from '../../Components/Logins/Logins';

const Home = () => {
  return (
    <div className='Home'>
      <Logins />
      <ImgSlider />
      <Notice />
      <div className='CardDiv'>
        <Card />
        <Card />
        <Card />
        <Card />  
      </div>
    </div>
  )
}

export default Home
