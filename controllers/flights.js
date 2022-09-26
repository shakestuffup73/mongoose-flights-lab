import { render } from 'ejs'
import { Flight } from '../models/flight.js'

function newFlight(req, res) {
  console.log('newFlight controller responding!')
  const newFlight = new Flight()

  const departs = newFlight.departs
  const departsDate = departs.toISOString().slice(0, 16)
  console.log('This is departsDate', departsDate)

  console.log('This is newFlight', newFlight)
  res.render('flights/new', {
    departsDate,
    title: 'Add Flight',
  })
}

function create(req, res) {
  console.log('This is the create flight function!')
  Flight.create(req.body)
    .then(flight => {
      console.log('This is the flight being created:', flight)
      res.redirect('/flights')
    })
    .catch(err => {
      res.redirect('/flights/new')
    })
}

function index(req, res) {
  console.log('This is the show flight function')
  Flight.find({})
    .then(flights => {
      res.render('flights/index', {
        flights: flights,
        title: 'All Flights'
      })
    })
    .catch(error => {
      console.log(error)
      res.redirect('/flights/new')
    })
}




export {
  newFlight as new,
  create,
  index,
}