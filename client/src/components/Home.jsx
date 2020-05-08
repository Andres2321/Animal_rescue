import React from 'react'
import { Link, withRouter } from 'react-router-dom'


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

                <h3 className='white home-signup'><Link to='/register'>Sign Up</Link></h3>
                <h3 className='white home-login'><Link id='anchor-style' to='/login'>Log In</Link></h3>
              </div>
            </div>}
        </div>
        <div>
          {/* <nav className='main-nav'>
            <ul className='flex row center'>
              <li>
                <Link href="#">Adoptions</Link>
                <ul>
                  <li><Link to='#'>Adoption details</Link></li>
                  <li><Link to='#'>Barn cats</Link></li>
                  <li><Link to='#'>Medically Needy Animals</Link></li>
                  <li><Link to='#'>Senior Dogs</Link></li>
                </ul>
              </li>
              <li>
                <Link href="#">Services</Link>
                <ul>
                  <li><Link to="#">Spay/Neutered</Link></li>
                  <li><Link to="#">Boarding</Link></li>
                  <li><Link to="#">Grooming</Link></li>
                  <li><Link to="#">Euthanasia and Cremation</Link></li>
                </ul>
              </li>
              <li><Link to="#">Events</Link></li>
              <li><Link to="#">Volunteer</Link></li>
              <li>
                <Link to="#">About Us</Link>
                <ul>
                  <li><Link to="#">Ways to Help</Link></li>
                  <li><Link to="#">Our Supply Whishlist</Link></li>
                  <li><Link to="#">Animal Cruelty</Link></li>
                  <li><Link to="#">Local Resources</Link></li>
                </ul>
              </li>
            </ul>
          </nav> */}

        </div>
      </div>
      <div className='flex column home-button-container'>
        <h1 className='adoption-title'>Thinking about adoption or donating?</h1>
        <div className='flex row home-buttons'>
          <button
            onClick={() => { props.history.push('/animals') }}
            className='adopt-button'>Adopt</button>
          <button
            className='donate-button'>
            <a
              className='donation-link'
              href='https://www.paypal.com/donate/?token=bqigvM9NgTNGeas-J7PNPgniu2BjUL3othMbzd932JCC-S5exG1MDiJhQOaHaJffMObzCW&country.x=US&locale.x=US'>
              Donate
            </a>
          </button>
        </div>
      </div>
    </>
  )

}

export default withRouter(Home)








