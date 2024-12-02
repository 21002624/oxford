import React from 'react'
import './Home.css';
import Homebanner from '../../Components/Homebanner/Homebanner';
import Campus from '../../Components/Campus/Campus';
import Feature from '../Feature/Feature';
import Year from '../../Components/Year/Year';
import Alumni from '../../Components/Alumni/Alumni';

const Home = () => {
  return (
    <div className='Home'>
      <Campus />
      <Homebanner />
      <Feature />
      <Year />
      <Alumni />
    </div>
  )
}

export default Home
