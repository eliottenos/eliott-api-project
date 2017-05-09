const getFormFields = require(`../../../lib/get-form-fields`)
// const locationListing = require('../templates/locations.handlebars')

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('inside of onChangePassword')
  const data = getFormFields(event.target)
  api.changePassword(data)
  .then(ui.changePasswordSuccess)
  .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onCreateLocation = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.createLocation(data)
    .then(ui.createLocationSuccess)
    .catch(ui.createLocationFailure)
}

const onGetLocation = function (event) {
  console.log(event)
  // debugger
  event.preventDefault()
  const location = getFormFields(event.target).location
  // debugger
  console.log('location', location)
  if (location.id.length !== 0) {
    api.getLocation(location)
      .then(ui.getLocationSuccess)
      // .catch(ui.getLocationError)
  // } else {
  //   console.log('Please provide a location id!')
  }
}

const onUpdateLocation = function (event) {
  event.preventDefault()
  console.log('inside of onUpdateLocation')
  const location = getFormFields(event.target)
  // if (location.id.length !== 0) {
  api.updateLocation(location)
  .then(ui.updateLocationSuccess)
  .catch(ui.updateLocationFailure)
  // }
}

const onDeleteLocation = function (event) {
  event.preventDefault()
  const location = getFormFields(event.target).location
  console.log('location', location)
  if (location.id.length !== 0) {
    api.deleteLocation(location)
    // .then(ui.deleteLocationSuccess)
    // .catch(ui.deleteLocationFailure)
  // } else {
  //   console.log('Please provide a location id!')
  }
}

// const onWeather = function (event) {
//   const data = getFormFields(this)
//   event.preventDefault()
//   api.weather(data)
//     .then(ui.weatherSuccess)
//     .catch(ui.weatherFailure)
// }

// locationListing()

const addHandlers = () => {
  $('#sign-in').on('submit', onSignIn)
  $('#sign-up').on('submit', onSignUp)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#location-create').on('submit', onCreateLocation)
  $('#location-update').on('submit', onUpdateLocation)
  $('#location-delete').on('submit', onDeleteLocation)
  // $('#weather').on('submit', onWeather)
  $('#location-get').on('submit', onGetLocation)
}

module.exports = {
  addHandlers
}
