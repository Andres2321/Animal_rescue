import React, { Component } from 'react'
import { Route } from 'react-router-dom'
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
    const { animal, handleFormChange, updateAnimal, animalForm, deleteAnimal } = this.props
    const { isEdit } = this.state
    return (
      <div>
        {animal == undefined ? <h2>Loading</h2> : (
          <div>
            <img alt={animal.name} src={animal.image_url} />
            {isEdit ?
              <Route
                path={'/animals/:id/edit'} render={() => (
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
              <>
                <h1>{animal.name}</h1>
                <button onClick={() => {
                  this.setState({ isEdit: true })
                  this.props.history.push(`/animals/${animal.id}/edit`)
                }}>Edit</button>
                <button
                  onClick={() => {
                    deleteAnimal(animal.id)
                    this.props.history.push('/')
                  }}>Delete</button>
              </>
            }
        </div>
        )}
      </div>
    )
  }
}



export default AnimalDetails