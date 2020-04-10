import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import EditAnimal from '../components/EditAnimal'


class AnimalDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEdit: false
    }
  }

  componentDidMount() {
    const { mountEditForm, id } = this.props

    mountEditForm(id)
  }



  render() {
    const { animal, handleFormChange, updateAnimal, animalForm, deleteAnimal, currentUser } = this.props
    const { isEdit } = this.state
    return (
      <div>
        {animal === undefined ? <h2>Loading</h2> : (
          <div>
            <img alt={animal.name} src={animal.image_url} />
            {currentUser.is_admin ?
              // If is_admin true
              <>
                {isEdit ?
                  //  if isEdit true
                  <Route
                    exact
                    path={'/animals/:id/edit'}
                    render={() => (
                      <EditAnimal
                        handleFormChange={handleFormChange}
                        handleSubmit={(e) => {
                          e.preventDefault()
                          updateAnimal()
                          this.setState({ isEdit: false })
                          this.props.history.push(`animals/${animalForm.id}`)
                        }}
                        animalForm={animalForm} />
                    )} />

                  :
                  // If isEdit is false
                  <>
                    <h1>{animal.name}</h1>
                    <button onClick={() => {
                      this.setState({ isEdit: true })
                      this.props.history.push(`/animals/${animal.id}/edit`)
                    }}>Edit</button>
                    <button
                      onClick={() => {
                        deleteAnimal(animal.id)
                        this.props.history.push('/animals')
                      }}>Delete</button>
                  </>
                }
              </>
              // If is_admin is false
              :
              <>
                hello
              </>
            }
          </div>
        )}
      </div>
    )
  }
}


export default withRouter(AnimalDetails)