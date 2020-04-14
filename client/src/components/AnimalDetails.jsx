import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import Animals from './Animals'


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
                    <hr />
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
                  <div className='animal-detail-second-container-subcontainer-one flex column'>
                    <h2>about</h2>
                    <h3>House-trained</h3>
                    <p>{animal.housetrained}</p>
                    <h3>Good with kids?</h3>
                    <p>{animal.good_with_kids}</p>
                    <h3>Good with other dogs?</h3>
                    <p>{animal.good_with_dogs}</p>
                    <h3>Good with other cats?</h3>
                    <p>{animal.good_with_cats}</p>
                    <h3>Adoption price</h3>
                    <p>{animal.adoption_price}</p>
                    <h2>Meet {animal.name}</h2>
                    <p>{animal.description}</p>
                  </div>
                </div>
                <div className='animal-detail-third-container flex column'>
                  <div className='animal-detail-second-container-subcontainer-two'>
                  </div>
                  <div className='animal-detail-second-container-subcontainer-three'>
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
                      <button>Submit</button>
                    </form>
                  </div>
                  <button className='animial-details-delete-button' onClick={() => { deleteAnimal(animal.id) }}>Delete</button>
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