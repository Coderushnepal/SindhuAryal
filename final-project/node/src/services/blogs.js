import logger from '../utils/logger';
import * as blogsModel from '../models/blogs';

/**
 * Create a blog
 *
 * @param params
 */
export async function createBlogs(params) {
  logger.info('Blogs created successfully');

  const data = await blogsModel.create(params);

  return {
    data,
    message: 'Blogs created successfully.'
  };
}

/**
 * Get all blogs
 *
 * @param params
 */
export async function getBlogs() {
  logger.info('Fetching all blogs');

  const data = await blogsModel.getAll();

  return {
    data,
    message: 'List of Blogs received.'
  };
}

/**
 * Get blogs by id
 *
 * @param blogsId
 */
export async function getBlogsById(blogsId) {
  logger.info(`Fetching blog with id ${blogsId}`);

  const data = await blogsModel.getById(blogsId);

  console.log(data);

  return {
    data,
    message: `Blog with id ${blogsId} received.`
  };
}

/**
 * Update blog
 *
 * @param blogsId
 * @param params
 */
export async function updateBlogs(blogsId, params) {
  logger.info(`Updated blog with id ${blogsId}`);

  const data = await blogsModel.update(blogsId, params);

  return {
    data,
    message: `Updated blog with id ${blogsId}`
  };
}

/**
 * Delete blog
 *
 * @param  blogsId
 */
export async function removeBlog(blogsId) {
  logger.info(`Deleted blog with id ${blogsId}`);

  await blogsModel.remove(blogsId);

  return {
    message: `Deleted blog with id ${blogsId}`
  };
}
