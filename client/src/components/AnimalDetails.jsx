import React from 'react'
import { withRouter, Link } from 'react-router-dom'


function AnimalDetails(props) {
  const { animal, deleteAnimal, currentUser, createLikesAndComments, handleLikeFormChange, likes } = props
  return (
    <div>
      {animal === undefined ?
        <h2>loading</h2>
        :
        <>
          {
            currentUser && currentUser.is_admin !== null ?
              <>
                <Link to='/animals'>
                  <p>Back to animals</p>
                </Link>
                {/* if admin is true */}
                <h1>{animal.name}</h1>
                <img src={animal.image_url} alt='animal' className='animal-details-image1' />
                <button onClick={() => {
                  props.history.push(`/animals/${animal.id}/edit`)
                }}>Edit</button>
                <button
                  onClick={() => {
                    deleteAnimal(animal.id)
                    props.history.push('/animals')
                  }}>Delete</button>
              </>


              
              
              
              
              :
              <>
                {/* if admin is false */}
                <h1>{animal.name}</h1>
                <img src={animal.image_url} alt='animal' className='animal-details-image'/>
                <p>{animal.breed}</p>
                <p>{animal.age}</p>
              </>
          }
          <form
            onSubmit={(e) => {
              e.preventDefault()
              createLikesAndComments(animal.id)
            }}
          >
            <input
              type='text'
              name='comments'
              value={likes.comments}
              onChange={handleLikeFormChange}
              placeholder='Leave a comment'
            ></input>

            <button>Submit</button>
          </form>
        </>
      }
    </div>
  )
}



export default withRouter(AnimalDetails)