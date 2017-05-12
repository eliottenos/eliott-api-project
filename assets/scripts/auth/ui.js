'use strict'

const store = require('../store.js')
// const showLocationTemplate = require('../templates/locations.handlebars')

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
  $('.createSuccess').empty()
  $('.createBlank').empty()
  $('.createBlank1').empty()
  $('.createBlank2').empty()
  $('.createBlank3').empty()
  $('.createBlank4').empty()
  $('.createSuccess').text('You successully created a location!')
  $('.createBlank').text('ID: ')
  $('.createBlank').append($(data)[0].location.id)
  $('.createBlank1').text('City: ')
  $('.createBlank1').append($(data)[0].location.city)
  $('.createBlank2').text('Country: ')
  $('.createBlank2').append($(data)[0].location.country)
  $('.createBlank3').text('Comment: ')
  $('.createBlank3').append($(data)[0].location.comment)
  $('.createBlank4').text('Zipcode: ')
  $('.createBlank4').append($(data)[0].location.zipcode)
}

const createLocationFailure = (error) => {
  console.log('error on create location in ', error)
}

const getLocationSuccess = (data) => {
  console.log('this one', data)
  console.log($(data)[0].location)
  $('.getSuccess').empty()
  $('.getBlank').empty()
  $('.getBlank1').empty()
  $('.getBlank2').empty()
  $('.getBlank3').empty()
  $('.getBlank4').empty()
  $('.getSuccess').text('You successully retreived a location!')
  $('.getBlank').text('ID: ')
  $('.getBlank').append($(data)[0].location.id)
  $('.getBlank1').text('City: ')
  $('.getBlank1').append($(data)[0].location.city)
  $('.getBlank2').text('Country: ')
  $('.getBlank2').append($(data)[0].location.country)
  $('.getBlank3').text('Comment: ')
  $('.getBlank3').append($(data)[0].location.comment)
  $('.getBlank4').text('Zipcode: ')
  $('.getBlank4').append($(data)[0].location.zipcode)
}

const getLocationFailure = (error) => {
  console.log('error on get location in ', error)
  $('.getSuccess').empty()
  $('.getBlank').empty()
  $('.getBlank1').empty()
  $('.getBlank2').empty()
  $('.getBlank3').empty()
  $('.getBlank4').empty()
  $('.getSuccess').text('Cannot find location!')
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
  $('.form-reset').trigger('reset')
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
  getLocationSuccess,
  getLocationFailure,
  updateLocationSuccess,
  updateLocationFailure,
  deleteLocationSuccess,
  deleteLocationFailure,
  weatherSuccess,
  weatherFailure
}
