'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const locationEvents = require('./auth/events.js')

$(() => {
  setAPIOrigin(location, config)
  locationEvents.addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

$(() => {
  // $('.locations').on('submit', locationEvents.onGetLocations)
  $('.location-delete').on('submit', locationEvents.onDeleteLocation)
  $('.location-update').on('submit', locationEvents.onUpdateLocation)
  $('.location-create').on('submit', locationEvents.onCreateLocation)
})
