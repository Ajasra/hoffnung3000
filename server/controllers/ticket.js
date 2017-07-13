import httpStatus from 'http-status'

import checkout from '../services/checkout'
import config from '../../config'
import pick from '../utils/pick'
import User from '../models/user'
import { APIError } from '../helpers/errors'
import { sendAdminRegistrationNotification } from '../helpers/mailTemplate'

const permittedFields = [
  'city',
  'cityCode',
  'country',
  'email',
  'firstname',
  'lastname',
  'password',
  'paymentMethod',
  'street',
]

const product = {
  name: config.title,
  description: 'Festival ticket',
  price: config.festivalTicketPrice,
}

function signup(req, res, next) {
  const fields = pick(permittedFields, req.body)
  fields.isVisitor = true

  const { email, paymentMethod } = fields

  User.findOne({ where: { email } })
    .then(existingUser => {
      if (existingUser) {
        next(
          new APIError(
            'A user with this email address already exists',
            httpStatus.BAD_REQUEST
          )
        )
        return
      }

      User.create(fields, { returning: true })
        .then((user) => {
          return checkout(paymentMethod, user, product)
            .then((data) => {
              sendAdminRegistrationNotification({
                paymentMethod,
                product,
                user,
              })
              res.json(data)
            })
            .catch(err => next(err))
        })
        .catch(err => next(err))
    })
}

export default {
  signup,
}
