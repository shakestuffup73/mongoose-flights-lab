import { render } from 'ejs'
import { Flight } from '../models/flight.js'

function newFlight(req, res) {
  console.log('newFlight controller responding!')
  res.render('flights/new', {
    title: 'Add Flight',
  })
}







export {
  newFlight as new,
}