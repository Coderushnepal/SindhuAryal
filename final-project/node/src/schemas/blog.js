import Joi from 'joi';

const CREATE_BLOG = Joi.object().keys({
  title: Joi.string().max(500).required(),
  image: Joi.string(),
  desc: Joi.string().max(5000).required()
});

export function validateBlogCreation(req, res, next) {
  try {
    Joi.assert(req.body, CREATE_BLOG);

    next();
  } catch (err) {
    next(err);
  }
}
