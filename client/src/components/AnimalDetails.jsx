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
                  <div className='animal-details-image-container border-radius'>
                    <img
                      className='animal-details-image'
                      src={animal.image_url} alt='animal' />
                  </div>
                  <div className='animal-details-first-information flex column animal-details-box-shadow border-radius'>
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
                  <div className='animal-detail-second-container-subcontainer-one flex column animal-details-box-shadow border-radius'>
                    <div>
                      <h2 className='center-name'>About</h2>
                      <hr />
                      <h3 className='subtitle-margin'>House-trained</h3>
                      <p className='answer-margin'>{animal.housetrained}</p>
                      <h3 className='subtitle-margin'>Good with kids?</h3>
                      <p className='answer-margin'>{animal.good_with_kids}</p>
                      <h3 className='subtitle-margin'>Good with other dogs?</h3>
                      <p className='answer-margin'>{animal.good_with_dogs}</p>
                      <h3 className='subtitle-margin'>Good with other cats?</h3>
                      <p className='answer-margin'>{animal.good_with_cats}</p>
                      <h3 className='subtitle-margin'>Adoption price</h3>
                      <p className='answer-margin'>${animal.adoption_price}</p>
                    </div>
                    <div>
                      <h2 className='center-name'>Meet {animal.name}</h2>
                      <hr />
                      <p className='answer-margin'>{animal.description}</p>
                    </div>
                  </div>
                </div>
                <div className='animal-detail-third-container flex column'>
                  <div className='animal-detail-second-container-subcontainer-two animal-details-box-shadow border-radius flex row'>
                    <div className='animal-details-foundation-image'>
                      <img className='shelter-logo' src='https://i.imgur.com/p8evGHD.png?1'/>
                    </div>
                    <div className='animal-details-foundation-information-container flex column'>
                      <h4 className='center-name'>The Broome County Humane Society</h4>
                      <p className='center-name'>Cutler Pond Rd., Binghamton, NY 13905</p>
                      <p className='center-name'>Broome County Dog Shelter</p>
                      <p className='center-name'>(607) 778 - 2493</p>
                    </div>
                  </div>
                  <div className='animal-detail-second-container-subcontainer-three animal-details-box-shadow border-radius'>
                    <form onSubmit={(e) => {
                      e.preventDefault()
                      createLikesAndComments(animal.id)
                    }}
                    >
                      <h2 className='center-name'>Leave {animal.name} a comment!</h2>
                      <input
                        className='animal-details-input'
                        type='text'
                        name='comments'
                        value={likes.comments}
                        onChange={handleLikeFormChange}
                        placeholder=' Type your comment here...' />
                      <button className='comment-submit-button'>Submit</button>
                    </form>
                    <div className='comments-container '>
                      {animal.likes.map(comment => (
                        <div className='speech-bubble'>
                          <p>{comment.comments}</p>
                        </div>
                      ))}
                    </div>
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