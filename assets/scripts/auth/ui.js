'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log(data)
  $('.auth').text('You successully signed up!')
}

const signUpFailure = (error) => {
  console.log(error)
  $('.auth').text('Email already taken or password does not match')
}

const signInSuccess = (data) => {
  console.log(data)
  $('.auth').text('You successully signed in!')
  // change display property with jq
  // store user
  store.user = data.user
}

const signInFailure = (error) => {
  console.log(error)
  $('.auth').text('Your email or password is incorrect')
}

const changePasswordSuccess = (data) => {
  console.log(data)
  $('.auth').text('You changed your password!')
}

const changePasswordFailure = (error) => {
  console.log(error)
  $('.auth').text('Your password is incorrect')
}

const signOutSuccess = (data) => {
  console.log('success sign out')
  $('.auth').text('You signed out!')
  store.user = null
}

const signOutFailure = (error) => {
  console.log('error on sign out in ', error)
}

const createLocationSuccess = (data) => {
  console.log(data)
  $('.auth').text('You successully created a location!')
}

const createLocationFailure = (error) => {
  console.log('error on create location in ', error)
}

const updateLocationSuccess = (data) => {
  console.log(data)
  $('.auth').text('You updated a location!')
}

const updateLocationFailure = (error) => {
  console.log('error on update location in ', error)
}

const deleteLocationSuccess = (data) => {
  console.log('success delete location')
  $('.auth').text('You deleted a location!')
  store.location = null
}

const deleteLocationFailure = (error) => {
  console.log('error on delete location in ', error)
}

const weatherSuccess = (data) => {
  console.log(data)
  $('.auth').text('weather')
}

const weatherFailure = (error) => {
  console.log(error)
  $('.auth').text('not a valid zipcide')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createLocationSuccess,
  createLocationFailure,
  updateLocationSuccess,
  updateLocationFailure,
  deleteLocationSuccess,
  deleteLocationFailure,
  weatherSuccess,
  weatherFailure
}
