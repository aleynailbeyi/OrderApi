/**
 * @typedef register_user
 * @property  {string} name.required - user's first name.
 * @property  {string} lastname.required - user's last name.
 * @property  {string} email.required - user's email.
 * @property  {string} password.required - user's password.
 * @property  {date} createdAt.required - user's created date.
 * @property  {date} updatedAt.required - user's updated date.
 */

/**
 * @typedef login_user
 * @property  {string} email.required - user's email.
 * @property  {string} password.required - user's password.
 */

/**
 * @typedef Token
 * @property {string} token
 */

/**
 * @typedef Response
 * @property {boolean} type
 * @property {string} message
 * @property {Token.model} data
 */

/**
 * @typedef Error
 * @property {string} status.required
 * @property {boolean} type.required
 * @property {string} message.required
 */

import AuthService from '../services/authService';
import 'http';

class authController {

	/**
	 * @route POST /public/v1/auth/register - User register
	 * @group Auth 
	 * @param {register_user.model} register_user.body.required
	 * @returns {Error.model}  error
	 * @returns {register_user.model} 200
	 */
	static async user_register(req, res) {
		const result = await AuthService.register(req.body, req.headers.language);
		return res.json(result);
	}
	/**
	 * @route POST /public/v1/auth/login - User login
	 * @group Auth 
	 * @param {login_user.model} login_user.body.required
	 * @returns {Error.model}  error
	 * @returns {Response.model} 200
	 */
	static async user_login(req, res) {
		console.log('req -->', req);
		const result = await AuthService.login(req.body, req.headers.language);
		if (result.type) {
			req.headers.authorization = result.data.token;
		}
		return res.json(result);
	}

}
export default authController;