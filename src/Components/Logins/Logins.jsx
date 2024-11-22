import React from 'react'
import './Logins.css'
import { useNavigate } from 'react-router-dom'

function Logins() {

  const navigate = useNavigate();

  const OpenLogin=()=>{
    navigate('/ParentLogin')
  }

  const TeacherLogin=()=>{
    navigate('./TeacherLogin')
  }
  return (
    <div className='Logins'>
      <h2>A problem is a chance for you to do your best</h2>
      <div className='loginsBtnDiv'>
        choose your login
        <div className='MobStyle'>
          <button className='logbtn' onClick={OpenLogin}>Parent</button>
          <button className='logbtn' onClick={TeacherLogin}>Teacher</button>
        </div>
        
      </div>
    </div>
  )
}

export default Logins
