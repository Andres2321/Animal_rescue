import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import EditAnimal from '../components/EditAnimal'


class AnimalDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {

  }



  render() {
    const { animal, deleteAnimal, currentUser } = this.props
    return (
      // <div>
      //   {animal === undefined ? <h2>Loading</h2> : (
      //     <div>
      //       <img alt={animal.name} src={animal.image_url} />
      //       {currentUser.is_admin ?
      //       <>
      //       {isEdit ?
      //         <Route
      //           exact
      //           path={'/animals/:id/edit'}
      //           render={() => (
      //             <EditAnimal
      //               handleFormChange={handleFormChange}
      //               handleSubmit={(e) => {
      //                 e.preventDefault()
      //                 updateAnimal()
      //                 this.setState({ isEdit: false })
      //                 this.props.history.push(`animals/${animalForm.id}`)
      //               }}
      //               animalForm={animalForm} />
      //           )} />

      //         :

      //         <>
      //           <h1>{animal.name}</h1>
      //           <button onClick={() => {
      //             this.setState({ isEdit: true })
      //             this.props.history.push(`/animals/${animal.id}/edit`)
      //           }}>Edit</button>
      //           <button
      //             onClick={() => {
      //               deleteAnimal(animal.id)
      //               this.props.history.push('/animals')
      //             }}>Delete</button>
      //         </>
      //       }
      //       </>
      //       :
      //         <>
      //         hello
      //       </>
      //   }
      //   </div>
      //   )}
      // </div>


      <div>
        {animal === undefined ?
          <h2>loading</h2>
          :
          <>
            {
              currentUser && currentUser.is_admin !== null ?
              <>
              {/* if admin is true */}
                  <img src={animal.image_url}/>
                  <h1>{animal.name}</h1>
                  <button onClick={() => {
                    this.props.history.push(`/animals/${animal.id}/edit`)
                  }}>Edit</button>
                  <button
                    onClick={() => {
                      deleteAnimal(animal.id)
                      this.props.history.push('/animals')
                    }}>Delete</button>
                </>
                :
                <>
                  {/* if admin is false */}
                  <img src={animal.image_url} />
                  <h1>{animal.name}</h1>
                  <p>{animal.breed}</p>
                  <p>{animal.age}</p>
                </>
            }
            <form
            
            >
            <input
              type='text'
              name='#'
              // value={}
              // onChange={}
              placeHolder='Leave a comment'
              ></input>
              <button>Submit</button>
            </form>
          </>
        }
      </div>
    )
  }
}


export default withRouter(AnimalDetails)