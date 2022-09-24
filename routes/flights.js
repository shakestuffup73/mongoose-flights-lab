import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

/* GET routers */

router.get('/new', flightsCtrl.new)
router.get('/', flightsCtrl.index)

/* POST router */
router.post('/', flightsCtrl.create)


export {
  router
}
