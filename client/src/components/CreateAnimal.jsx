import React from 'react'

function CreateAnimal(props) {
  const { animalForm, handleFormChange} = props
  return (

    <div>
      Create Animal
      <form className='flex column'>
        <input
          type='text'
          name='species'
          value={animalForm.species}
          onChange={handleFormChange}
          placeholder='Cat or Dog'
        />

        <input
          type='text'
          name='name'
          value={animalForm.name}
          onChange={handleFormChange}
          placeholder='Name'
        />

        <input
          type='text'
          name='breed'
          value={animalForm.breed}
          onChange={handleFormChange}
          placeholder='Breed'
        />

        <input
          type='text'
          name='age'
          value={animalForm.age}
          onChange={handleFormChange}
          placeholder='Age'
        />

        <input
          type='text'
          name='gender'
          value={animalForm.gender}
          onChange={handleFormChange}
          placeholder='Gender'
        />

        <input
          type='text'
          name='size'
          value={animalForm.size}
          onChange={handleFormChange}
          placeholder='Size'
        />

        <input
          type='text'
          name='color'
          value={animalForm.color}
          onChange={handleFormChange}
          placeholder='Color'
        />

        <input
          type='text'
          name='image_url'
          value={animalForm.image_url}
          onChange={handleFormChange}
          placeholder='Image Link'
        />

        <input
          type='text'
          name='spayed_neutered'
          value={animalForm.spayed_neutered}
          onChange={handleFormChange}
          placeholder='Spayed or Neutered'
        />

        <input
          type='text'
          name='declawed'
          value={animalForm.declawed}
          onChange={handleFormChange}
          placeholder='Declawed'
        />

        <input
          type='text'
          name='housetrained'
          value={animalForm.housetrained}
          onChange={handleFormChange}
          placeholder='Housetrained'
        />

        <input
          type='text'
          name='description'
          value={animalForm.description}
          onChange={handleFormChange}
          placeholder='Description'
        />

        <input
          type='text'
          name='good_with_dogs'
          value={animalForm.good_with_dogs}
          onChange={handleFormChange}
          placeholder='Good with dogs'
        />

        <input
          type='text'
          name='good_with_cats'
          value={animalForm.good_with_cats}
          onChange={handleFormChange}
          placeholder='Good with cats'
        />

        <input
          type='text'
          name='good_with_kids'
          value={animalForm.good_with_kids}
          onChange={handleFormChange}
          placeholder='Good with kids'
        />

        <input
          type='text'
          name='location_name'
          value={animalForm.location_name}
          onChange={handleFormChange}
          placeholder='Location name'
        />

        <input
          type='text'
          name='location_address'
          value={animalForm.location_address}
          onChange={handleFormChange}
          placeholder='Location address'
        />

        <input
          type='text'
          name='intake_date'
          value={animalForm.intake_date}
          onChange={handleFormChange}
          placeholder='Intake Date'
        />

        <input
          type='text'
          name='adoption_price'
          value={animalForm.adoption_price}
          onChange={handleFormChange}
          placeholder='Price'
        />

        <button>Submit</button>

      </form>
    </div>
  )
}


export default CreateAnimal