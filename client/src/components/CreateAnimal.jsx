import React from 'react'

function CreateAnimal(props) {
  const { animalForm, handleFormChange, newAnimal } = props
  return (
    <div className='create-animal-container flex row'>
      <form className='flex column animal-form' onSubmit={newAnimal}>

        <h1 className='create-animal-title'>create an animal</h1>
        <div>
          <input
            className='create-animal-input'
            type='text'
            name='species'
            value={animalForm.species}
            onChange={handleFormChange}
            placeholder='Cat or Dog'
          />

          <input
            className='create-animal-input'
            type='text'
            name='name'
            value={animalForm.name}
            onChange={handleFormChange}
            placeholder='Name'
          />

          <input
            className='create-animal-input'
            type='text'
            name='breed'
            value={animalForm.breed}
            onChange={handleFormChange}
            placeholder='Breed'
          />

          <input
            className='create-animal-input'
            type='text'
            name='age'
            value={animalForm.age || ''}
            onChange={handleFormChange}
            placeholder='Age'
          />

          <input
            className='create-animal-input'
            type='text'
            name='gender'
            value={animalForm.gender}
            onChange={handleFormChange}
            placeholder='Gender'
          />

          <input
            className='create-animal-input'
            type='text'
            name='size'
            value={animalForm.size}
            onChange={handleFormChange}
            placeholder='Size'
          />

          <input
            className='create-animal-input'
            type='text'
            name='color'
            value={animalForm.color}
            onChange={handleFormChange}
            placeholder='Color'
          />

          <input
            className='create-animal-input'
            type='text'
            name='image_url'
            value={animalForm.image_url}
            onChange={handleFormChange}
            placeholder='Image Link'
          />

          <input
            className='create-animal-input'
            type='text'
            name='spayed_neutered'
            value={animalForm.spayed_neutered}
            onChange={handleFormChange}
            placeholder='Spayed or Neutered'
          />

          <input
            className='create-animal-input'
            type='text'
            name='declawed'
            value={animalForm.declawed}
            onChange={handleFormChange}
            placeholder='Declawed'
          />

          <input
            className='create-animal-input'
            type='text'
            name='housetrained'
            value={animalForm.housetrained}
            onChange={handleFormChange}
            placeholder='Housetrained'
          />

          <input
            className='create-animal-input'
            type='text'
            name='description'
            value={animalForm.description}
            onChange={handleFormChange}
            placeholder='Description'
          />

          <input
            className='create-animal-input'
            type='text'
            name='good_with_dogs'
            value={animalForm.good_with_dogs || ''}
            onChange={handleFormChange}
            placeholder='Good with dogs'
          />

          <input
            className='create-animal-input'
            type='text'
            name='good_with_cats'
            value={animalForm.good_with_cats}
            onChange={handleFormChange}
            placeholder='Good with cats'
          />

          <input
            className='create-animal-input'
            type='text'
            name='good_with_kids'
            value={animalForm.good_with_kids}
            onChange={handleFormChange}
            placeholder='Good with kids'
          />

          <input
            className='create-animal-input'
            type='text'
            name='location_name'
            value={animalForm.location_name}
            onChange={handleFormChange}
            placeholder='Location name'
          />

          <input
            className='create-animal-input'
            type='text'
            name='location_address'
            value={animalForm.location_address}
            onChange={handleFormChange}
            placeholder='Location address'
          />

          <input
            className='create-animal-input'
            type='text'
            name='intake_date'
            value={animalForm.intake_date}
            onChange={handleFormChange}
            placeholder='Intake Date'
          />

          <input
            className='create-animal-input'
            type='text'
            name='adoption_price'
            value={animalForm.adoption_price || ''}
            onChange={handleFormChange}
            placeholder='Price'
          />
        </div>
        <button className='create-animal-submit-button'>Submit</button>
      </form>

      <div className=' flex column created-animal-card-container'>
        {/* <h2 className='preview-title'>Preview</h2> */}
        <div className='flex column preview-container hvr-float-shadow'>
          <div className='preview-image-container'>
            <img className='preview-image' alt='Place an image' src={animalForm.image_url}/>
          </div>
          <div className='flex column preview-details'>
            <p>Name: {animalForm.name}</p>
            <p>Breed: {animalForm.breed}</p>
            <p>Age: {animalForm.age}</p>
          </div>
        </div>
      </div>

    </div>
  )
}


export default CreateAnimal