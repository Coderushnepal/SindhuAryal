import * as blogService from '../services/blogs';
/**
 * Controller to get all blogs
 *
 * @param  req
 * @param  res
 * @param  next
 */
export function getAllBlogs(req, res, next) {
  blogService
    .getBlogs()
    .then((data) => res.json(data))
    .catch((err) => next(err));
}