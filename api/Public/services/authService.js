import md5 from 'md5';
import jwt from 'jsonwebtoken';
import db from '../../src/models';
import lang from '../../language';
import { validateRegister, validateLogin } from '../validation/authValidation';

class authService {

	static async register(body, language) {
		try {
			const user = {
				name: body.name,
				lastname: body.lastname,
				email: body.email,
				password: md5(body.password)
			};
			const dbuser = await db.users.findOne({
				where: {
					email: user.email
				}
			});
			if (dbuser) {
				return { data: null, message: lang(language).Register.dbUser, type: false };
			}

			const validated_user = validateRegister({
				name: user.name,
				lastname: user.lastname,
				email: user.email,
				password: user.password
			});

			if (!validated_user) {
				return { message: 'error', type: false };
			}
			const new_user = await db.users.create(user);
			if (!new_user) {
				return { data: null, message: lang(language).Register.NotNewUser, type: false };
			}
			return { data: new_user, message: lang(language).Register.NewUser, type: true };
		}
		catch (error) {
			throw (error);
		}
	}
	static async login(body, language) {
		try {
			const { email, password } = body;
			const user = await db.users.findOne({ where: { email: email } });
			// validate the input
			const validated_user = validateLogin({
				email: user.email,
				password: user.password
			});
			// check if there is an erro while validating
			if (!validated_user) {
				return { message: 'error', type: true };
			}
			if (!user || user.password !== md5(password)) {
				return ({
					status: 401,
					type: false,
					message: lang(language).Login.error
				});
			}
			const token = await jwt.sign(
				{ user_id: user.id },
				'wrong-secret',
				{ expiresIn: '1h' }
			);
			return {
				status: 200,
				type: true,
				message: lang(language).Login.success,
				data: {
					token
				}
			};
		}
		catch (err) {
			throw (err);
		}
	}

}
export default authService;