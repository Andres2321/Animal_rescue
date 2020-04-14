import React from 'react'
import { withRouter, Link } from 'react-router-dom'


function AnimalDetails(props) {
  const { animal, deleteAnimal, currentUser, createLikesAndComments, handleLikeFormChange, likes } = props
  return (
    <>
      {animal === undefined ?
        <h2>loading</h2>
        :
        <>
          {
            currentUser && currentUser.is_admin !== null ?
              <div className='animal-details-main-container flex row'>
                {/* if admin is true */}
                <div className='animal-details-first-container flex column'>
                  <Link to='/animals'>
                    <p>Back to animals</p>
                  </Link>
                  <div className='animal-details-image-container'>
                    <img
                      className='animal-details-image'
                      src={animal.image_url} alt='animal' />
                  </div>
                  <div className='animal-details-first-information flex column'>
                    <h1 className='center-name'>{animal.name}</h1>
                    <hr/>
                    <h3 className='center-name'>{animal.age} . {animal.gender} . {animal.size} . {animal.color}</h3>
                    <hr />
                    <p className='center-name'>{animal.location_name}</p>
                    <p className='center-name'>{animal.location_address}</p>
                  </div>
                  <button
                    className='animial-details-edit-button'
                    onClick={() => {
                      props.history.push(`/animals/${animal.id}/edit`)
                    }}>Edit</button>
                </div>
                <div className='animal-detail-second-container'>
                </div>
                <div className='animal-detail-third-container'>
                  third container
                  <form onSubmit={(e) => {
                    e.preventDefault()
                    createLikesAndComments(animal.id)
                  }}
                  >
                    <input
                      type='text'
                      name='comments'
                      value={likes.comments}
                      onChange={handleLikeFormChange}
                      placeholder='Leave a comment' />
                    <button onClick={() => { deleteAnimal(animal.id) }}>Delete</button>
                    <button>Submit</button>
                  </form>
                </div>
              </div>
              :
              <>
                {/* if admin is false */}
                <h1>{animal.name}</h1>
                <img src={animal.image_url} alt='animal' className='animal-details-image' />
                <p>{animal.breed}</p>
                <p>{animal.age}</p>
              </>
          }
        </>
      }
    </>
  )
}



export default withRouter(AnimalDetails)