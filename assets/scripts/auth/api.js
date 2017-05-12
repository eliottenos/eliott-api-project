'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-up/',
    method: 'POST',
    data: data
    // data: data
  })
}

const signIn = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-in/',
    method: 'POST',
    data: data
    // data: data
  })
}

const signOut = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
    // data: data
  })
}

const changePassword = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const createLocation = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/create-location',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getLocation = (data) => {
  // debugger
  console.log('api.data', data)
  console.log('api.data.id', data.id)
  return $.ajax({
    url: config.apiOrigin + '/locations/' + data.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const deleteLocation = (data) => {
  console.log('data', data)
  return $.ajax({
    url: config.apiOrigin + '/destroy-location/' + data.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const updateLocation = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/update-location/' + data.location.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

// const weather = (data) => {
//   return $.ajax({
//     url: config.apiOrigin + '/weather/',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: data
//   })
// }

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createLocation,
  deleteLocation,
  updateLocation,
  getLocation
  // weather
}
