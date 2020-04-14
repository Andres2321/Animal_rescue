import React from 'react'
import Header from './Header'


function Animals(props) {
  const { animals, currentUser } = props
  const animal = animals.map(animal => (
    <div
      onClick={() => { props.history.push(`/animals/${animal.id}`) }}
      className='animal-card-container flex column hvr-grow-shadow border-radius' id='animals-box-shadow'
      key={animal.id}
    >
      <div className='animal-image-container border-radius'>
        <img alt={animal.name} src={animal.image_url} className='animal-image' />
      </div>
      <div className='animal-details flex column'>
        <p className='details'>Name: {animal.name}</p>
        <p className='details'>Breed: {animal.breed}</p>
        <p className='details'>Gender: {animal.gender}</p>
      </div>
    </div>
  ))

  return (
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
                onClick={() => {props.history.push('/animals/create')}}
                src='https://i.imgur.com/M44d4zG.png?2'
                className='addition-image' />
            </div>
          </>
          :
          animal
      }
    </div>
  )
}


export default Animals