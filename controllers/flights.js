import { render } from 'ejs'
import { Flight } from '../models/flight.js'

function newFlight(req, res) {
  console.log('newFlight controller responding!')
  res.render('flights/new', {
    title: 'Add Flight',
  })
}

function create(req, res) {
  console.log('This is the create flight function!')
  res.redirect('/flights/new', {
    title: 'Add Flight'
  })
  Flight.create(req.body)
    .then(flight => {
      console.log('This is the flight being created:', flight)
      res.redirect('/flights/new')
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