import logger from '../utils/logger';
import usersJson from '../data/users';
import * as user from '../models/User';
import * as UserPhoneNumber from '../models/UserPhoneNumber';
import NotFoundError from '../utils/NotFoundError';

/**
 * Get all users.
 */
export async function getAllUsers() {
  logger.info('Fetching all users');
  const users = await user.getAll();
  const data = users.map(user => {
    const { phoneNumbers } = user;
    const hasEmptyPhnNo = Object.keys(phoneNumbers[0]).length === 0;

    return {
      ...user,
      phoneNumbers: hasEmptyPhnNo ? [] : phoneNumbers
    };
  });

  return {
    data,
    message: 'List of all users'
  };
}

/**
 * Get user by id
 *
 * @param userId 
 */
export async function getUserById(userId) {
  logger.info(`Fetching user information with id ${userId}`);

  const result = await user.getById(userId);

  if (!result) {
    logger.error(`Cannot find the user with id ${userId}`);

    throw new NotFoundError(`Cannot find the user with id ${userId}`);
  }

  return {
    data: result,
    message: `Information about userId ${userId}`
  };
}

/**
 * Create a user
 * 
 * @param params 
 */
export async function createUser(params) {
  const { firstName, lastName, email, password, phoneNumbers } = params;
  const userInsertData = await user.create({
    firstName,
    lastName,
    email,
    password
  });


  const insertDataForPhoneNumbers = phoneNumbers.map(phone => ({
    users_id: userInsertData.id,
    phn_no: phone.number,
    type: phone.type
  }));

  const phoneNumberInsertedData = await UserPhoneNumber.add(insertDataForPhoneNumbers);



  return {
    data: params,
    message: "New user added successfully"
  };
}




/**
 * Delete a user
 * @param userId 
 */
export function deleteUser(userId) {

  const updatedUserList = usersJson.filter(user => user.id !== userId);

  const doesUserExist = usersJson.find((user) => user.id === userId);
  if (!doesUserExist) {
    logger.error(`Cannot find user with id ${userId}`);

    throw new Error(`Cannot find user with id ${userId}`);
  }

  fs.writeFileSync(usersJsonPath, JSON.stringify(updatedUserList, null, 2));

  return {
    message: `Deleted user with userid ${userId}`,
  };
}

/**
 * Update a user
 * 
 * @param userId 
 * @param params 
 */
export function updateUser(userId, params) {
  const updatedJson = usersJson.map(user => {
    if (user.id === userId) {
      return {
        ...user,
        ...params
      };
    }

    return user;
  });

  fs.writeFileSync(usersJsonPath, JSON.stringify(updatedJson, null, 2));

  return {
    message: "Updated user with id " + userId
  };
} 
