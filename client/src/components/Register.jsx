import React from 'react'


function Register(props) {
  const { handleRegister, formData, handleChange } = props
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input name='username' type='text' placeholder='Username' value={formData.username} onChange={handleChange} />
        <input name='email' type='text'placeholder='Email' value={formData.email} onChange={handleChange} />
        <input name='password' type='password' placeholder='Password' value={formData.password} onChange={handleChange} />
        <button>Register</button>
      </form>
    </div>
  )
}




export default Register