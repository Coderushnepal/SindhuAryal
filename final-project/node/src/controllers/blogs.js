import * as blogService from '../services/blogs';

/**
 * Controller to create blog
 *
 * @param  req
 * @param  res
 * @param  next
 */
export function createBlogs(req, res, next) {
  blogService
    .createBlogs(req.body)
    .then(data => res.json(data))
    .catch(err => next(err));
}

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
    .then(data => res.json(data))
    .catch(err => next(err));
}

/**
 * Controller to get blogs by id.
 *
 * @param  req
 * @param  res
 * @param  next
 */
export function getBlogsByID(req, res, next) {
  blogService
    .getBlogsById(+req.params.blogsId)
    .then(data => res.json(data))
    .catch(err => next(err));
}

/**
 * Controller to update blog
 *
 * @param req
 * @param res
 * @param next
 */
export function updateBlog(req, res, next) {
  blogService
    .updateBlogs(+req.params.blogsId, req.body)
    .then(data => res.json(data))
    .catch(err => next(err));
}

/**
 * Controller to delete blog
 *
 * @param req
 * @param res
 * @param next
 */
export function deleteBlog(req, res, next) {
  blogService
    .removeBlog(+req.params.blogsId)
    .then(data => res.json(data))
    .catch(err => next(err));
}
