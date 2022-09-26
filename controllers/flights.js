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

function show(req, res) {
  console.log('This is the details show function!')
  Flight.findById(req.params.id)
  .then(flight => {
    res.render('flights/show', {
      title: 'Flight Details',
      flight: flight
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function update(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  console.log('this is the ticket created for flight id:', req.params.id)
}


function createTicket(req, res){
  console.log('This is the create ticket function!')
  console.log(req.body)
  Flight.findById(req.params.id)
  .then(flight => {
    flight.tickets.push(req.body)
    flight.save()
    .then(() =>{
      res.redirect(`/flights/${flight._id}`)
    })
    .catch(error => {
      console.log(error)
      res.redirect('/')
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}


export {
  newFlight as new,
  create,
  index,
  show,
  update,
  createTicket,
}