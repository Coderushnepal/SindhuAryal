import logger from '../utils/logger';
import * as blogsModel from '../models/blogs'

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

/**
 * Get all blogs
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
 * Get blogs by id
 * 
 * @param blogsId 
 */
export async function getBlogsById(blogsId) {
    logger.info(`Fetching blog with id ${blogsId}`);

    const data = await blogsModel.getById(blogsId);

    return {
        data,
        message: `Blog with id ${blogsId} received.`
    };
}

