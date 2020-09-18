import logger from '../utils/logger';
import * as blogsModel from '../models/blogs'

/**
 * Get all blogs.
 *
 * @param params
 */
export async function getBlogs() {
    logger.info("Fetching all blogs");

    const data = await blogsModel.getAll();

    return {
        data,
        message: "List of Blogs received."
    };
}