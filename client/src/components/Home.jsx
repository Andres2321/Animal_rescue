import React from 'react'
import { Link } from 'react-router-dom'


function Home(props) {
  const { currentUser, handleLogout } = props
  return (
    <>
      <div className='flex column main-home-container'>
        <div className='home-container flex row'>
          <h1 className='no-margin white'>The Broome County Animal Shelter</h1>
          {currentUser ?
            <div>
              <h3 onClick={handleLogout} className='no-margin white'>
                Log Out
                </h3>
            </div>
            :
            <div>
              <div className='flex row'>
                <Link to='/register' className=''>
                  <h3 className='no-margin white'>Sign Up</h3>
                </Link>
                <Link to='/login' className=''>
                  <h3 className='no-margin white'>Log In</h3>
                </Link>
              </div>
            </div>}
        </div>
          <nav className='main-nav'>
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
          </nav>
      </div>
      <div className='flex column'>
        <div className=''>
          <div className=''></div>
          <div className=''></div>
        </div>


      </div>
    </>
  )

}

export default Home








