import React from 'react'
import { withRouter } from 'react-router-dom'


function Register(props) {
  const { handleRegister, formData, handleChange } = props
  return (
    <div className='register-main-container flex row'>

      <form onSubmit={handleRegister} className='register-left-container'>
        <h1 className='register-title' >Register</h1>
        <div className='register-input-container'>
          <input className='register-input-style' name='username' type='text' placeholder='Username' value={formData.username} onChange={handleChange} />
          <input className='register-input-style' name='email' type='text' placeholder='Email' value={formData.email} onChange={handleChange} />
          <input className='register-input-style' name='password' type='password' placeholder='Password' value={formData.password} onChange={handleChange} />
        </div>
        <button className='register-submit-button'>Register</button>
      </form>

      <div className='register-right-container flex column'>
        <h1 className='have-account-title'>Already have an account?</h1>
        <button className='register-signin-redirect-button' onClick={() => { props.history.push('/login') }}>Sign In</button>
      </div>
    </div>
  )
}




export default withRouter(Register)