import logger from '../utils/logger';
import { hash, compare } from '../utils/crypt';
import BadRequestError from '../utils/BadRequestError';
import * as adminLoginModel from '../models/admin_login';
import { generateToken } from '../utils/jwt';
/**
 * Create an admin
 *
 * @param params
 */
export async function createAdmin(params) {
  const hashedPassword = hash(params.password);
  const existingAdmin = await adminLoginModel.create({
    email: params.email,
    password: hashedPassword
  });

  return {
    data: {
      existingAdmin
    }
  };
}

/**
 * Verify email,password and login
 *
 * @param params
 */
export async function adminLogin(params) {
  const { email, password } = params; //from postman that is to be compared with db
  const admin = await adminLoginModel.getAdminCredentials({
    email,
    password
  });

  if (!admin) {
    logger.error('Invalid Login Credentials');

    throw new BadRequestError('Invalid login credentials');
  }

  const isPasswordValid = compare(password, admin.password); //from postman
  if (!isPasswordValid) {
    logger.error('Invalid login credentials');

    throw new BadRequestError('Invalid login credentials');
  }

  const token = generateToken(admin);

  return {
    data: {
      admin,
      token
    },
    message: 'Logged In Successfully!!'
  };
}
