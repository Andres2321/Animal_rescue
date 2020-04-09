import React from 'react'
import { Input } from '@material-ui/core';

function CreateAnimal(props) {
  const { animalForm, handleFormChange} = props
  return (
    <div>
      Create Animal
      <form className='flex column'>
        <Input
          type='text'
          name='species'
          value={animalForm.species}
          onChange={handleFormChange}
          placeholder='Cat or Dog'
        />

        <Input
          type='text'
          name='name'
          value={animalForm.name}
          onChange={handleFormChange}
          placeholder='Name'
        />

        <Input
          type='text'
          name='breed'
          value={animalForm.breed}
          onChange={handleFormChange}
          placeholder='Breed'
        />

        <Input
          type='text'
          name='age'
          value={animalForm.age}
          onChange={handleFormChange}
          placeholder='Age'
        />

        <Input
          type='text'
          name='gender'
          value={animalForm.gender}
          onChange={handleFormChange}
          placeholder='Gender'
        />

        <Input
          type='text'
          name='size'
          value={animalForm.size}
          onChange={handleFormChange}
          placeholder='Size'
        />

        <Input
          type='text'
          name='color'
          value={animalForm.color}
          onChange={handleFormChange}
          placeholder='Color'
        />

        <Input
          type='text'
          name='image_url'
          value={animalForm.image_url}
          onChange={handleFormChange}
          placeholder='Image Link'
        />

        <Input
          type='text'
          name='spayed_neutered'
          value={animalForm.spayed_neutered}
          onChange={handleFormChange}
          placeholder='Spayed or Neutered'
        />

        <Input
          type='text'
          name='declawed'
          value={animalForm.declawed}
          onChange={handleFormChange}
          placeholder='Declawed'
        />

        <Input
          type='text'
          name='housetrained'
          value={animalForm.housetrained}
          onChange={handleFormChange}
          placeholder='Housetrained'
        />

        <Input
          type='text'
          name='description'
          value={animalForm.description}
          onChange={handleFormChange}
          placeholder='Description'
        />

        <Input
          type='text'
          name='good_with_dogs'
          value={animalForm.good_with_dogs}
          onChange={handleFormChange}
          placeholder='Good with dogs'
        />

        <Input
          type='text'
          name='good_with_cats'
          value={animalForm.good_with_cats}
          onChange={handleFormChange}
          placeholder='Good with cats'
        />

        <Input
          type='text'
          name='good_with_kids'
          value={animalForm.good_with_kids}
          onChange={handleFormChange}
          placeholder='Good with kids'
        />

        <Input
          type='text'
          name='location_name'
          value={animalForm.location_name}
          onChange={handleFormChange}
          placeholder='Location name'
        />

        <Input
          type='text'
          name='location_address'
          value={animalForm.location_address}
          onChange={handleFormChange}
          placeholder='Location address'
        />

        <Input
          type='text'
          name='intake_date'
          value={animalForm.intake_date}
          onChange={handleFormChange}
          placeholder='Intake Date'
        />

        <Input
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