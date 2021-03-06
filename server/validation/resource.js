import Joi from 'joi'

export default {
  findAll: {
    query: {
      eventId: Joi.number(),
      from: Joi.string().isoDate(),
      to: Joi.string().isoDate(),
    },
  },
  createResource: {
    body: {
      description: Joi.string().min(10).max(120).required(),
      images: Joi.array().max(1),
      title: Joi.string().min(3).required(),
    },
  },
  updateResource: {
    body: {
      description: Joi.string().min(10).max(120).required(),
      images: Joi.array().max(1),
      title: Joi.string().min(3).required(),
    },
    params: {
      resourceSlug: Joi.string().required(),
    },
  },
}
