import React from 'react'


function Animals(props) {
  const { allAnimals } = props

    const displayAnimals = allAnimals.map((animal) => {
      return (
        <>
        <img src={animal.image_url}/>
        <h1>Name: {animal.name}</h1>
        <p>Breed: {animal.breed}</p>
        <p>Age: {animal.age}</p>
        <p>Gender: {animal.gender}</p>
        <p>Size: {animal.size}</p>
        </>
      )
    })
  
  return (
    <div>
      {displayAnimals}
    </div>
  )
}


export default Animals