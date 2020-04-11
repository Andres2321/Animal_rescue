import React from 'react'
import { Link } from 'react-router-dom'


function Home() {

  return (
    <div className='home-container flex row'>
      <div className='dog-container hvr-bob' >
        <Link to='/animals'>
          <img src='https://i.imgur.com/ep2IR2Ah.jpg?1' className='home-picture' alt='dog'></img>
        </Link>
      </div>
      <div className='cat-container hvr-bob'>
        <img src='https://i.imgur.com/eU1rJCSh.jpg?1' className='home-picture' alt='cat'></img>
      </div>
    </div>
  )

}

export default Home