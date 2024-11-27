import React from 'react'
import Notice from '../../Components/Notice/Notice'
import './Home.css';
import Card from '../../Components/Card/Card';
import Homebanner from '../../Components/Homebanner/Homebanner';
import Campus from '../../Components/Campus/Campus';

const Home = () => {
  return (
    <div className='Home'>
      <Campus />
      <Homebanner />
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
