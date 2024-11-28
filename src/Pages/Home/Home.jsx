import React from 'react'
import './Home.css';
import Homebanner from '../../Components/Homebanner/Homebanner';
import Campus from '../../Components/Campus/Campus';
import Feature from '../Feature/Feature';
import Happening from '../../Components/Happining/Happining';
import Year from '../../Components/Year/Year';

const Home = () => {
  return (
    <div className='Home'>
      <Campus />
      <Homebanner />
      <Feature />
      <Year />
      <Happening />
    </div>
  )
}

export default Home
