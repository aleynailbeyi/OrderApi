import md5 from 'md5';
import jwt from 'jsonwebtoken';
import db from '../../src/models';
import lang from '../../language';

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
			const new_user = await db.users.create(user);
			if (!new_user) {
				return { data: null, message: lang(language).Register.NotNewUser, type: false };
			}
			return { data: new_user, message: lang(language).Register.NewUser, type: true };
		}
		catch (error) {
			console.log("ERROR---->", error);
			throw (error);
		}
	}
	static async login(body,language) {
		try {
			const { email, password } = body;
			const user = await db.users.findOne({ where: { email: email } });

			if (!user || user.password != md5(password)) {
				return ({
					status: 401,
					type: false,
					message: lang(language).Login.error,
				});
			}
			const token = await jwt.sign(
				{ user_id: user.id, },
				"wrong-secret",
				{ expiresIn: "1h" }
			)
			return {
				status: 200,
				type: true,
				message: lang(language).Login.success,
				data: {
					token
				}
			}
		}
		catch (err) {
			console.log("ERROR---->", err);
			throw (err);
		}
	}
}
export default authService;