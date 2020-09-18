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

/**
 * Create a blog
 * 
 * @param params 
 */
export async function createBlogs(params) {
    logger.info("Blogs created successfully");

    const data = await blogsModel.create(params);

    return {
        data,
        message: "Blogs created successfully."
    }
}