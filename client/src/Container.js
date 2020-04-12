import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'
import Animals from './components/Animals'
import CreateAnimal from './components/CreateAnimal'
import AnimalDetails from './components/AnimalDetails'
import EditAnimal from './components/EditAnimal'
import Header from './components/Header'

import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
  showAnimals,
  showAnimal,
  createAnimal,
  updateAnimal,
  deleteAnimal,
  createLikeComment
} from './services/api-helper'

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      animals: [],
      animal: '',
      animalForm: {
        species: '',
        name: '',
        breed: '',
        age: null,
        gender: '',
        size: '',
        color: '',
        image_url: '',
        spayed_neutered: '',
        declawed: '',
        housetrained: '',
        description: '',
        good_with_dogs: '',
        good_with_cats: '',
        good_with_kids: '',
        location_name: '',
        location_address: '',
        intake_date: '',
        adoption_price: null,
      },
      likes: {
        comments: ''
      },
      authFormData: {
        username: "",
        email: "",
        password: "",
      }
    }
  }

  componentDidMount = async () => {
    this.getAnimals()
    const currentUser = await verifyUser()
    if (currentUser) {
      this.setState({
        currentUser
      })
    }
  }

  // ===============API Data==================

  // Get all animals from API
  getAnimals = async () => {
    const animals = await showAnimals()
    this.setState({
      animals
    })
  }

  // Get a single animal from api
  getAnimal = async (id) => {
    const animal = await showAnimal(id)
    this.setState({
      animal
    })
  }

  // Create an animal
  newAnimal = async (e) => {
    e.preventDefault()
    const { animalForm } = this.state
    const animal = await createAnimal(animalForm)
    this.setState(prevState => ({
      animals: [...prevState.animals, animal],
      animalForm: {
        species: '',
        name: '',
        breed: '',
        age: null,
        gender: '',
        size: '',
        color: '',
        image_url: '',
        spayed_neutered: '',
        declawed: '',
        housetrained: '',
        description: '',
        good_with_dogs: '',
        good_with_cats: '',
        good_with_kids: '',
        location_name: '',
        location_address: '',
        intake_date: '',
        adoption_price: null
      }
    }))
  }

  // Update an animal
  updateAnimal = async (e) => {
    e.preventDefault()
    const { animalForm } = this.state
    const editAnimal = await updateAnimal(animalForm.id, animalForm)
    this.setState(prevState => (
      {
        animals: prevState.animals.map(animal => {
          return (
            animal.id === animalForm.id ? editAnimal : animal
          )
        })
      }
    ))
    this.props.history.push(`/animals/${animalForm.id}`)
  }

  // update animal form
  mountEditForm = async (id) => {
    const animals = await showAnimals()
    const animal = animals.find(item => item.id === parseInt(id))
    this.setState({
      animalForm: animal
    })
  }

  // Will store form inputs in state
  handleFormChange = (e) => {
    const { name, value } = e.target
    this.setState(prevState => ({
      animalForm: {
        ...prevState.animalForm,
        [name]: value
      }
    }))
  }

  // Delete an animal
  deleteAnimal = async (id) => {
    await deleteAnimal(id)
    this.setState(prevState => ({
      animals: prevState.animals.filter(animal => animal.id !== id)
    }))
  }

  // Create likes and comments
  createLikesAndComments = async (id) => {
    const likeAndComment = await createLikeComment({ ...this.state.likes, user_id: this.state.currentUser.id, animal_id: id })
  }

  // Will store form inputs in state
  handleLikeFormChange = (e) => {
    const { name, value } = e.target
    this.setState(prevState => ({
      likes: {
        ...prevState.likes,
        [name]: value
      }
    }))
  }

  // ===============Auth=====================
  handleLogin = async (e) => {
    e.preventDefault()
    const currentUser = await loginUser(this.state.authFormData)
    this.setState({
      currentUser
    })
    this.props.history.push('/')
  }

  handleRegister = async (e) => {
    e.preventDefault()
    const currentUser = await registerUser(this.state.authFormData)
    this.setState({
      currentUser
    })
  }

  handleLogout = () => {
    localStorage.removeItem("jwt")
    this.setState({
      currentUser: null
    })
    removeToken()
  }

  authHandleChange = (e) => {
    const { name, value } = e.target
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }))
  }

  render() {
    const { handleLogin, handleLogout, authHandleChange, handleRegister, newAnimal, handleFormChange, updateAnimal, mountEditForm, createLikesAndComments, handleLikeFormChange } = this
    const { authFormData, animals, animalForm, currentUser, likes } = this.state
    return (
      <>
        {/* =================Routes================= */}
        <Switch>
          <Route
            exact
            path='/login'
            render={(props) =>
              <Login
                {...props}
                currentUser={currentUser}
                handleLogin={handleLogin}
                handleChange={authHandleChange}
                formData={authFormData} />
            }
          />

          <Route
            exact
            path='/register'
            render={() => (
              <Register
                handleRegister={handleRegister}
                handleChange={authHandleChange}
                formData={authFormData}
              />)}
          />

          <Route
            exact
            path='/animals'
            render={(props) =>
              <Animals
                {...props}
                currentUser={currentUser}
                animals={animals}
                animalForm={animalForm}
                handleFormChange={handleFormChange}
                newAnimal={newAnimal}
              />
            }
          />

          <Route
            exact
            path='/animals/create'
            render={() => (
              <CreateAnimal
                handleFormChange={handleFormChange}
                animalForm={animalForm}
                newAnimal={newAnimal}
              />
            )}
          />

          <Route
            exact
            path='/animals/:id'
            render={(props) => {
              const { id } = props.match.params
              const animal = this.state.animals.find(item => item.id === parseInt(id))
              return <AnimalDetails
                likes={likes}
                handleLikeFormChange={handleLikeFormChange}
                createLikesAndComments={createLikesAndComments}
                handleFormChange={handleFormChange}
                currentUser={currentUser}
                animal={animal}
              />
            }}
          />

          <Route
            exact
            path='/animals/:id/edit'
            render={(props) => {
              const { id } = props.match.params
              const animal = this.state.animals.find(item => item.id === parseInt(id))
              return <EditAnimal
                {...props}
                currentUser={currentUser}
                id={id}
                animal={animal}
                mountEditForm={mountEditForm}
                handleFormChange={handleFormChange}
                updateAnimal={updateAnimal}
                animalForm={animalForm}
              />
            }}
          />
          <Route
            path='/'
            render={() => (
              <Home
                currentUser={currentUser}
                handleLogout={handleLogout}
                animals={animals}
              />)}
          />
        </Switch>
      </>
    )
  }
}



export default withRouter(Container) 