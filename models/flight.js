import mongoose from 'mongoose'

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: String,
  airport: {
    type: String,
    default: "DEN",
  },
  flightNo: Number,
  departs: {
    type: Date,
    default: oneYearFromNow(),
  },
}, {
  timestamps: true,
})

function oneYearFromNow() {
  const today = new Date()
  console.log('This is one year from today', today.getFullYear() + 1)

  today.setFullYear(today.getFullYear() + 1)

  console.log('This is one year from today', today)

  return today
}
oneYearFromNow();



const Flight = mongoose.model('Flight', flightSchema)


export {
  Flight
}