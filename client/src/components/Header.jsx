import React from 'react'
import { Link } from 'react-router-dom'



function Header(props) {

  console.log(props)
  const { currentUser, handleLogout } = props
  return (
    <>
      <div className='top-header-div row flex'>
        <h1 className='center'>
          <Link to='/' className='header-title'>
            The Broome County Humane Society
        </Link>
        </h1>
        {currentUser ?
          <>
            <h3 onClick={handleLogout}>
              Log Out
            </h3>
          </>
          :
          <>
            <div className='flex row'>
              <img className='looking-glass center' src="https://img.icons8.com/search" alt='looking glass'></img>
              <Link to='/register' className='center sign-up'>
                <h3>Sign Up</h3>
              </Link>
              <Link to='/login' className='center log-in'>
                <h3>Log In</h3>
              </Link>
            </div>
          </>}
      </div>
    </>

  )
}


export default Header