import logger from '../utils/logger';
import * as user from '../models/User';
import BadRequestError from '../utils/BadRequestError';


/**
 * Create a user
 * 
 * @param params 
 */
export async function createUser(params) {
  const existingUser = await user.getUserByEmail(params.email);
  if(existingUser) {
    logger.error(`There is already an existing user with this email.`);
    
    throw new BadRequestError(`There is already an existing user with this email.`);
  }

  const userInsertData = await user.create(params);

  return {
    data: userInsertData,
    message: "New user added successfully"
  };
}