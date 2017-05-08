const getFormFields = require(`../../../lib/get-form-fields`)

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

const onUpdateLocation = function (event) {
  event.preventDefault()
  console.log('inside of onUpdateLocation')
  const data = getFormFields(event.target)
  api.UpdateLocation(data)
  .then(ui.updateLocationSuccess)
  .catch(ui.updateLocationFailure)
}

const onDeleteLocation = function (event) {
  event.preventDefault()
  api.deleteLocation()
    .then(ui.deleteLocationSuccess)
    .catch(ui.deleteLocationFailure)
}

const addHandlers = () => {
  $('#sign-in').on('submit', onSignIn)
  $('#sign-up').on('submit', onSignUp)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#location-create').on('submit', onCreateLocation)
  $('#location-update').on('submit', onUpdateLocation)
  $('#location-delete').on('submit', onDeleteLocation)
}

module.exports = {
  addHandlers
}
