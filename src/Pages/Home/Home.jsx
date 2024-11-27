import React from 'react'
import Notice from '../../Components/Notice/Notice'
import './Home.css';
import Card from '../../Components/Card/Card';
import Logins from '../../Components/Logins/Logins';
import Homebanner from '../../Components/Homebanner/Homebanner';

const Home = () => {
  return (
    <div className='Home'>
      <Logins />
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
