import React, { Component } from 'react'

class EditAnimal extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.mountEditForm(this.props.id)
  }

  render() {
    const { handleFormChange, updateAnimal, animalForm } = this.props
    return (

      <div className='edit-animals-container flex row'>
        <div className=' flex column created-animal-card-container'>
          {/* <h2 className='preview-title'>Preview</h2> */}
          <div className='flex column preview-container hvr-float-shadow' id='border-color'>
            <div className='preview-image-container'>
              <img className='preview-image' alt='Place an image' src={animalForm.image_url} />
            </div>
            <div className='flex column preview-details'>
              <p>Name: {animalForm.name}</p>
              <p>Breed: {animalForm.breed}</p>
              <p>Age: {animalForm.age}</p>
            </div>
          </div>
        </div>
      

      <form className='flex column edit-animal-form' onSubmit={updateAnimal}>
        <h1 className='edit-animal-title'>Update {animalForm.name}'s profile</h1>
        <div className='edit-animal-input-container flex column'>
          <input
            className='edit-animal-input'
            type='text'
            name='species'
            defaultValue={animalForm.species}
            onChange={handleFormChange}
            placeholder='Cat or Dog'
          />

          <input
            className='edit-animal-input'
            type='text'
            name='name'
            value={animalForm.name}
            onChange={handleFormChange}
            placeholder='Name'
          />

          <input
            className='edit-animal-input'
            type='text'
            name='breed'
            value={animalForm.breed}
            onChange={handleFormChange}
            placeholder='Breed'
          />

          <input
            className='edit-animal-input'
            type='text'
            name='age'
            value={animalForm.age || ''}
            onChange={handleFormChange}
            placeholder='Age'
          />

          <input
            className='edit-animal-input'
            type='text'
            name='gender'
            value={animalForm.gender}
            onChange={handleFormChange}
            placeholder='Gender'
          />

          <input
            className='edit-animal-input'
            type='text'
            name='size'
            value={animalForm.size}
            onChange={handleFormChange}
            placeholder='Size'
          />

          <input
            className='edit-animal-input'
            type='text'
            name='color'
            value={animalForm.color}
            onChange={handleFormChange}
            placeholder='Color'
          />

          <input
            className='edit-animal-input'
            type='text'
            name='image_url'
            value={animalForm.image_url}
            onChange={handleFormChange}
            placeholder='Image Link'
          />

          <input
            className='edit-animal-input'
            type='text'
            name='spayed_neutered'
            value={animalForm.spayed_neutered}
            onChange={handleFormChange}
            placeholder='Spayed or Neutered'
          />

          <input
            className='edit-animal-input'
            type='text'
            name='declawed'
            value={animalForm.declawed}
            onChange={handleFormChange}
            placeholder='Declawed'
          />

          <input
            className='edit-animal-input'
            type='text'
            name='housetrained'
            value={animalForm.housetrained}
            onChange={handleFormChange}
            placeholder='Housetrained'
          />

          <input
            className='edit-animal-input'
            type='text'
            name='description'
            value={animalForm.description}
            onChange={handleFormChange}
            placeholder='Description'
          />

          <input
            className='edit-animal-input'
            type='text'
            name='good_with_dogs'
            value={animalForm.good_with_dogs || ''}
            onChange={handleFormChange}
            placeholder='Good with dogs'
          />

          <input
            className='edit-animal-input'
            type='text'
            name='good_with_cats'
            value={animalForm.good_with_cats}
            onChange={handleFormChange}
            placeholder='Good with cats'
          />

          <input
            className='edit-animal-input'
            type='text'
            name='good_with_kids'
            value={animalForm.good_with_kids}
            onChange={handleFormChange}
            placeholder='Good with kids'
          />

          <input
            className='edit-animal-input'
            type='text'
            name='location_name'
            value={animalForm.location_name}
            onChange={handleFormChange}
            placeholder='Location name'
          />

          <input
            className='edit-animal-input'
            type='text'
            name='location_address'
            value={animalForm.location_address}
            onChange={handleFormChange}
            placeholder='Location address'
          />

          <input
            className='edit-animal-input'
            type='text'
            name='intake_date'
            value={animalForm.intake_date}
            onChange={handleFormChange}
            placeholder='Intake Date'
          />

          <input
            className='edit-animal-input'
            type='text'
            name='adoption_price'
            value={animalForm.adoption_price || ''}
            onChange={handleFormChange}
            placeholder='Price'
          />
        </div>
        <button className='edit-animal-submit-button'>Submit</button>
      </form>
      </div >
      
    )
  }
}

export default EditAnimal