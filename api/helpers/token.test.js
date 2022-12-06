import chai from 'chai';
import app from '../index';

class tokenTest {

	static async getToken(email, password) {
		const result = await chai.request(app)
			.post('/public/v1/auth/login')
			.set('language', 'tr')
			.send({
				email: email,
				password: password			
			});
		return result.body.data.token;
	}

}
export default tokenTest;
