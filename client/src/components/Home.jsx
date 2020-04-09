import React from 'react'


function Home() {

  return (
    <div className='home-container flex row'>
      <div className='dog-container'>
        <img src='https://i.imgur.com/ep2IR2Ah.jpg?1'className='home-picture'></img>
      </div>
      <div className='cat-container'>
        <img src='https://i.imgur.com/eU1rJCSh.jpg?1' className='home-picture'></img>
      </div>
    </div>
  )

}

export default Home