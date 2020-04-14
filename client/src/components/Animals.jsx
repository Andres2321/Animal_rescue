import React from 'react'
import { Link } from 'react-router-dom'


function Animals(props) {
  const { animals, currentUser, handleLogout } = props
  const animal = animals.map(animal => (
    <div
      onClick={() => { props.history.push(`/animals/${animal.id}`) }}
      className='animal-card-container flex column hvr-grow-shadow border-radius' id='animals-box-shadow'
      key={animal.id}>
      <div className='animal-image-container border-radius'>
        <img alt={animal.name} src={animal.image_url} className='animal-image' />
      </div>
      <div className='animal-details flex column'>
        <p className='details subtitle-margin'>Name: {animal.name}</p>
        <p className='details subtitle-margin'>Breed: {animal.breed}</p>
        <p className='details subtitle-margin'>Gender: {animal.gender}</p>
      </div>
    </div>
  ))

  return (
    <>
      <div>
        <div className='top-header-div row flex'>
          <h2 className='center'>
            <Link to='/' className='header-title'>
              The Broome County Humane Society
            </Link>
          </h2>
          {currentUser ?
            <>
              <h3 onClick={handleLogout} className='logout'>
                Log Out
              </h3>
            </>
            :
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

      <h1 className='center-name'>Adopt Me</h1>
      <div
        className='animal-container flex row'>
        {
          currentUser && currentUser.is_admin !== null ?
            <>
              {animal}
              <div
                className='addition-card-container'
              >
                <img
                  onClick={() => { props.history.push('/animals/create') }}
                  src='https://i.imgur.com/M44d4zG.png?2'
                  className='addition-image' />
              </div>
            </>
            :
            animal
        }
      </div>
    </>
  )
}


export default Animals