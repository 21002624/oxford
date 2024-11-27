import React from 'react'
import './Home.css';
import Homebanner from '../../Components/Homebanner/Homebanner';
import Campus from '../../Components/Campus/Campus';
import Feature from '../Feature/Feature';

const Home = () => {
  return (
    <div className='Home'>
      <Campus />
      <Homebanner />
      <Feature />
    </div>
  )
}

export default Home
