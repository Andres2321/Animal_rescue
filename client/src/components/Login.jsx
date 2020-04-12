import React from 'react'
import { withRouter } from 'react-router-dom'

const Login = (props) => {
  const { handleLogin, formData, handleChange } = props
  return (
    <div className='login-container flex row'>

      <div className='left-container flex column'>
        <h1 className='account-title' >NEED AN ACCOUNT?</h1>
        <button onClick={() => { props.history.push('/register') }} className='register-button'>Register</button>
      </div>

      <form onSubmit={handleLogin} className='right-container'>
        <h1 className='sign-in-title'>SIGN IN</h1>
        <div className='input-container'>
          <input name="email" type="text" placeholder='Email' value={formData.email} onChange={handleChange} className='input-style' />
          <input name="password" type="password" placeholder='Password' value={formData.password} onChange={handleChange} className='input-style' />
        </div>
        <button className='submit-button'> Login</button>
      </form>
    </div>
  )
}


export default withRouter(Login)