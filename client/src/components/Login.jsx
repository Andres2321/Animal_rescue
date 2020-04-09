import React from 'react'
import { Link } from 'react-router-dom'

const Login = (props) => {
  const { handleLogin, formData, handleChange } = props
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input name="email" type="text" placeholder='Email' value={formData.email} onChange={handleChange} />
        <input name="password" type="password" placeholder='Password' value={formData.password} onChange={handleChange}  />
        <button>Login</button>
        <Link to='/register'>Register</Link>
      </form>
    </div>
  )
}


export default Login