import React from 'react'
import { Link } from 'react-router-dom'


function Home(props) {
  const { currentUser, handleLogout, animals } = props
  return (
    <>
      <div className='home-container'>
        <div className='top-header-div row flex'>
          <h2 className='center'>
            <Link to='/' className='header-title bounceInLeft'>
              The Broome County Humane Society
              
            </Link>
          </h2>

          {currentUser ?
            <>
              {/* If current user is true  */}
              <h3 onClick={handleLogout} className='logout'>
                Log Out
            </h3>
            </>
            :
            // If current user is false
            <>
              <div className='flex row'>
                <Link to='/register' className='center sign-up'>
                  <h3>Sign Up</h3>
                </Link>
                <Link to='/login' className='center log-in'>
                  <h3>Log In</h3>
                </Link>
              </div>
            </>}
          
        </div>
      </div>

      {/* <nav className='main-nav'>
        <ul className='flex row center'>
          <li>
            <Link href="">Adoptions</Link>
            <ul>
              <li><Link to=''>Adoption details</Link></li>
              <li><Link to=''>Barn cats</Link></li>
              <li><Link to=''>Medically Needy Animals</Link></li>
              <li><Link to=''>Senior Dogs</Link></li>
            </ul>
          </li>
          <li>
            <Link href="">Services</Link>
            <ul>
              <li><Link to="">Spay/Neutered</Link></li>
              <li><Link to="">Boarding</Link></li>
              <li><Link to="">Grooming</Link></li>
              <li><Link to="">Euthanasia and Cremation</Link></li>
            </ul>
          </li>
          <li><Link to="">Events</Link></li>
          <li><Link to="">Volunteer</Link></li>
          <li>
            <Link to="">About Us</Link>
            <ul>
              <li><Link to="">Ways to Help</Link></li>
              <li><Link to="">Our Supply Whishlist</Link></li>
              <li><Link to="">Employment</Link></li>
              <li><Link to="">Blog</Link></li>
              <li><Link to="">Animal Cruelty</Link></li>
              <li><Link to="">Local Resources</Link></li>
            </ul>
          </li>
        </ul>
      </nav> */}
    </>
  )

}

export default Home