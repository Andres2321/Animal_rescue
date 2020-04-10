const axios = require('axios')

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://animal-rescue-001.herokuapp.com/' : 'http://localhost:3000'
});

// =====================Auth========================

export const loginUser = async (loginData) => {
  const response = await api.post('/auth/login', { auth: loginData })
  localStorage.setItem('authToken', response.data.token)
  api.defaults.headers.common.authorization = `Bearer ${response.data.token}`
  return response.data.user
}

export const registerUser = async (registerData) => {
  const response = await api.post('/users', { user: registerData })
  localStorage.setItem('authToken', response.data.token)
  api.defaults.headers.common.authorization = `Bearer ${response.data.token}`
  return response.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken')
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const response = await api.get('/auth/verify')
    return response.data
  }
  return false
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null 
}


// =====================Get Animals========================

export const showAnimals = async () => {
  const response = await api.get('/animals')
  return response.data
}

export const showAnimal = async (id) => {
  const response = await api.get(`/animals/${id}`)
  return response.data
}

// =====================Create Animal========================

export const createAnimal = async (params) => {
  console.log(params)
  const response = await api.post('/animals', { animal: params })
  return response.data
}

// =====================Update Animal========================

export const updateAnimal = async (id, params) => {
  const response = await api.put(`/animals/${id}`, { animal: params })
  return response.data
}

// =====================Delete Animal========================

export const deleteAnimal = async (id) => {
  const response = await api.delete(`/animals/${id}`)
  return response.data
}