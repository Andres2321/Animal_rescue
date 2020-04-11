import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Login = (props) => {
  const { handleLogin, formData, handleChange, currentUser } = props
  return (
    <div className="form-container">
      <form onSubmit={handleLogin} className='form-container flex column'>
        <div className='image-container'>
          <img alt='#'/>
        </div>
        <input name="email" type="text" placeholder='Email' value={formData.email} onChange={handleChange} className='input-style'/>
        <input name="password" type="password" placeholder='Password' value={formData.password} onChange={handleChange}  />
        <button
        >Login</button>
        <Link to='/register'>Register</Link>
      </form>
    </div>
  )
}


export default withRouter(Login)