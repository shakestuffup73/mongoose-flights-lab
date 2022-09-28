import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

/* GET routers */

router.get('/new', flightsCtrl.new)
router.get('/', flightsCtrl.index)
router.get('/:id', flightsCtrl.show)

/* POST router */
router.post('/', flightsCtrl.create)
router.post('/:id/tickets', flightsCtrl.createTicket)
router.post('/:id/meals', flightsCtrl.addToMeal)

/* PUT router */
router.put('/:id', flightsCtrl.update)


export {
  router
}
