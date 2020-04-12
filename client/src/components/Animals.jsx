import React from 'react'
import Header from './Header'


function Animals(props) {
  const { currentUser, animals} = props
  return (
    <div>
      <Header />
      {animals.map(animal => (
        <div
          key={animal.id}
        
          onClick={(e) => {
            if (currentUser) {
              props.history.push(`/animals/${animal.id}`)
            } else {
              props.history.push('/login')
            }
          }}>

          <img alt={animal.name} src={animal.image_url} />
          <p>{animal.name}</p>
          <p>{animal.breed}</p>
          <p>{animal.gender}</p>
        </div>
      ))}
      <div
        onClick={() => {
          props.history.push('/new/animal')
      }}>
      </div>
    </div>
  )
}


export default Animals