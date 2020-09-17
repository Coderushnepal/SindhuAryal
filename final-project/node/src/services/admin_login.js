import { hash } from '../utils/crypt';
import * as adminLoginModel from '../models/admin_login';
// import { generateToken } from '../utils/jwt';
// import logger from '../utils/logger';
// import BadRequestError from '../utils/BadRequestError';
// import * as adminSession from  '../models/adminSession';

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
        },
    };
}

/**
 * Verify email,password and login
 *
 * @param params
 */
// export async function adminLogin(params) {
//     const { email, password } = params;
//     const admin = await adminLoginModel.getAdminCredentials(data);

//     if (!admin) {
//         logger.error("Invalid Login Credentials");

//         throw new BadRequestError("Invalid login credentials");
//     }

//     const isPasswordValid = compare(password, admin.password);
//     if (!isPasswordValid) {
//         logger.error("Invalid login credentials");

//         throw new BadRequestError("Invalid login credentials");
//     }

//     const token = generateToken({
//         email: admin.email,
//     });

//     await adminSession.saveToken(admin.email, token);

//     admin.password = undefined;

//     return {
//         data: {
//             admin,
//             token,
//         },
//         message: "Logged In Successfully!!",
//     };
// }